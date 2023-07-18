import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoringService } from '../storing.service';

@Component({
  selector: 'app-subject1',
  templateUrl: './subject1.component.html',
  styleUrls: ['./subject1.component.css']
})
export class Subject1Component {
  name='Mosin';

  form: FormGroup = new FormGroup({});
  constructor(private FB: FormBuilder,private StoringService :StoringService) {
    this.form = FB.group({
      password: ['', [Validators.required]],
      confirm_password: ['', [Validators.required]]
    },
      {
        validator: this.Mustmatch('password', 'confirm_password')

      })
  }




  get f() {
    return this.form.controls;
  }

  Mustmatch(password: any, confirm_password: any) {

    return (formGroup: FormGroup) => {
      const passwordcontrol = formGroup.controls[password];
      const confirm_passwordcontrol = formGroup.controls[confirm_password];

      if (confirm_passwordcontrol.errors && !confirm_passwordcontrol.errors['Mustmatch']) {
        return;
      }
      if (passwordcontrol.value !== confirm_passwordcontrol.value) {
        confirm_passwordcontrol.setErrors({ Mustmatch: true });
      }
      else {
        confirm_passwordcontrol.setErrors(null);
      }

    }

  }

  sendData(){
    console.log('inint s1');

    this.StoringService.name.next(this.name);
  }

  SaveForm() {

  }
}
