import { Pipe, PipeTransform } from '@angular/core';
import {IMovie} from '../../shared/interfaces/movie.interface';
import {IUser} from '../../shared/interfaces/user.interface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], ...args: string[]): IMovie[] {
    if (value) {
      const searchValue = args[0];
      const searchField = args[1];
      const regexp = new RegExp(`${searchValue}`, 'i');
      const filtered = value.filter(item => item[searchField].match(regexp));
      return filtered;
    }
  }

}
