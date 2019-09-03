import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'searchTitle' })
export class SearchByTitlePipe implements PipeTransform {
  transform(listData, searchText: string) {
    return listData.filter(data => ((data.title).toLowerCase()).indexOf(searchText.toLowerCase()) !== -1);
  }
}