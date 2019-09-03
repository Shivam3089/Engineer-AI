import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {
    constructor (private http: HttpClient) {}
	/**
	* @function getUserService
	* @description : get User http Service
	*/
	public getUserService(): Observable<any> {
		return this.http.get('https://hn.algolia.com/api/v1/search_by_date?tags=story');
	}
}
