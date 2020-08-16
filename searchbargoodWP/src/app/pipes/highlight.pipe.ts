import {ElementRef, Pipe, PipeTransform, Renderer2} from '@angular/core';
import {IUser} from '../models/user';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  constructor(private renderer: Renderer2) {


  }

  transform(user: string, searchTerm?: any): any {
    if (!user || !searchTerm) {
      return user;
    }


    if (!searchTerm) { return user; }
    const re = new RegExp(searchTerm, 'gi');
    const newSpan = `<span class='yellow'>${searchTerm}</span>`;
       return  user.replace(re, newSpan);




  }

}
