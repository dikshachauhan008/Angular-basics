import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: '<div class="alert alert-success"><p> This website uses cookies to provide better user experience. </p> </div>',
  styles: ["div{ margin :10px 0px; padding:10px 20px; background-color: beige; text-align:center}"]
})
export class NotificationComponent {

}
