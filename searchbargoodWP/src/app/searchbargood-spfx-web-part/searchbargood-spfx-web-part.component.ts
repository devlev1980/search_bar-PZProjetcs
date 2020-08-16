import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef, HostListener,
  Input,
  OnInit,
  Renderer2,
  ViewChild
} from '@angular/core';
import {UserService} from '../services/user.service';
import {Observable} from 'rxjs';
import {IUser} from '../models/user';
import {FormGroup} from '@angular/forms';



@Component({
  selector: 'app-searchbargood-spfx-web-part',
  templateUrl: './searchbargood-spfx-web-part.component.html',
  styleUrls: ['./searchbargood-spfx-web-part.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchbargoodSpfxWebPartComponent implements OnInit {
  @Input() description: string;
  users$: Observable<IUser[]>
  showUsers: boolean = false;
  selectedUser: string;
  inputForm: FormGroup;
  @ViewChild('username') userName: ElementRef;
  @ViewChild('autocomplete') autoComplete: ElementRef;


  @HostListener('document:click', ['$event'])
  handleOutsideClick(event) {
    if (!this.autoComplete.nativeElement.contains(event.target)) {
      this.showUsers = false;
    }
  }

  constructor(private userService: UserService, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.users$ = this.userService.getUsers();
  }

  onSelectUser(user: IUser) {
    this.selectedUser = user.name;
    this.showUsers = false;
  }

  onInput() {
    setTimeout(() => {
      const charToHighlight = document.querySelector('.user__info-name span');
      if (charToHighlight) {
        this.renderer.setStyle(charToHighlight, 'color', '#fff');
      }
    }, 0);
  }

}
