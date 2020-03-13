import { Pipe, PipeTransform } from '@angular/core';
import {IMovie} from '../../shared/interfaces/movie.interface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: IMovie[], ...args: string[]): IMovie[] {
    const filtered = value.filter(item => item.title.includes(args[0]));
    return filtered;
  }

}
