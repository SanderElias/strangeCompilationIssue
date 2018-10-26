import { Component } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testIt';

  async swalShow() {
    const result = await swal({
      type: 'info',
      title: 'test swal',
      text: 'here comes some text',
      showCancelButton: true
    });
    console.log(result);
  }
}
