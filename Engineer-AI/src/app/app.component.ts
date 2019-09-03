import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { AppService } from './app.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
	@ViewChild('popupModal') popupModal: ModalDirective;

	public searchText = '';			// search filter name
	public postList = [];			// all user list
	public popupUserDetails = null;	// selected user details
	public serviceSubscription = null;	// service subscription will hold service data
	public timerSubscription = null;	// timer subscription will hold Timer data

	constructor(private appService: AppService) {}

	ngOnInit() {
		// get data from service
		this.getUserData();
	}

	/**
	* @name getUserData
	* @description get User Data
	*/
	getUserData(): void {
		this.serviceSubscription = this.appService.getUserService().subscribe(
			(res) => {
				if (res && res.hits.length > 0) {
					this.postList = res.hits;
					this.subscribeToData();
				} else {
					alert('no data found');
				}
			},
			(error) => {
				// set error message
				console.log(error);
			}
		);
	}

	/**
	* @name subscribeToData
	* @description get User Data
	*/
	subscribeToData(): void {
		this.timerSubscription = Observable.timer(10000).first().subscribe(() => this.getUserData());
	}

	/**
	* @name showPopupModal
	* @description show popup modal
	*/
	showPopupModal(post): void {
		this.popupModal.show();
		this.popupUserDetails = post;
	}

	/**
	* @name hidePopupModal
	* @description hide popup modal
	*/
	hidePopupModal(): void {
		this.popupModal.hide();
	}

	ngOnDestroy(): void {
		if (this.serviceSubscription) {
			this.serviceSubscription.unsubscribe();
		}
		if (this.timerSubscription) {
			this.timerSubscription.unsubscribe();
		}
	}
}
