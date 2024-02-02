import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { UserListComponent } from './user-list/user-list.component';
import { InlineStyleComponent } from './inline-style/inline-style.component';
import { InlinetemplateComponent } from './inlinetemplate/inlinetemplate.component'
import { InlineStyleTemplateComponent } from './inline-style-template/inline-style-template.component'

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration()]
};
export const userlist: UserListComponent = {
  providers: [provideRouter(routes), new UserListComponent()]
}

export const inlineStyle: InlineStyleComponent = {
  providers:[provideRouter(routes), new InlineStyleComponent()]
}

export const inlineTemplate: InlinetemplateComponent = {
  providers:[provideRouter(routes), new InlinetemplateComponent()]

}

export const inlinestletemplate: InlineStyleTemplateComponent = {
  providers:[provideRouter(routes), new InlineStyleTemplateComponent()]

}