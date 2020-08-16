import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { SearchbargoodSpfxWebPartComponent } from './searchbargood-spfx-web-part/searchbargood-spfx-web-part.component';
import {BorderDirective} from './directives/border.directive';
import {SearchUserPipe} from './pipes/search-user.pipe';
import {HighlightPipe} from './pipes/highlight.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    SearchbargoodSpfxWebPartComponent,
    BorderDirective,
    SearchUserPipe,
    HighlightPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule

  ],
  providers: [],
  entryComponents: [SearchbargoodSpfxWebPartComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(SearchbargoodSpfxWebPartComponent, { injector: this.injector });
    customElements.define('app-searchbargood-spfx-web-part', el);
  }
}
