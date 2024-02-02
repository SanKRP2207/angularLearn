import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from "./user-list/user-list.component";
import { InlineStyleComponent } from "./inline-style/inline-style.component";
import { InlinetemplateComponent } from "./inlinetemplate/inlinetemplate.component";
import { InlineStyleTemplateComponent } from "./inline-style-template/inline-style-template.component";
import { LoginComponent } from "./user-auth/login/login.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, UserListComponent, InlineStyleComponent, InlinetemplateComponent, InlineStyleTemplateComponent, LoginComponent]
})
export class AppComponent {
  title = 'angularLearn';
}
