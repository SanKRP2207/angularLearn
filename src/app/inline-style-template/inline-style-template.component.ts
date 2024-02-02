import { Component } from '@angular/core';

@Component({
  selector: 'app-inline-style-template',
  standalone: true,
  imports: [],
  template: `
    <p class="inlinestletemplate">
      inline-style-template works!
    </p>
  `,
  styles: [
    `.inlinestletemplate{color:blue}`
  ]
})
export class InlineStyleTemplateComponent {

}
