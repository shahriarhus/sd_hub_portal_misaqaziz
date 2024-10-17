import {Component, inject} from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input'; //Material
import {MatFormFieldModule} from '@angular/material/form-field'; //Material
import {MatStepperModule} from '@angular/material/stepper'; //Material
import {MatButtonModule} from '@angular/material/button'; //Material


@Component({
  selector: 'app-register-single',
  templateUrl: './register-single.component.html',
  styleUrl: './register-single.component.css',
  standalone: false
})
export class RegisterSingleComponent {
  // private _formBuilder = inject(FormBuilder);

  // firstFormGroup = this._formBuilder.group({
  //   firstCtrl: ['', Validators.required],
  // });
  // secondFormGroup = this._formBuilder.group({
  //   secondCtrl: ['', Validators.required],
  // });
  // isLinear = false;
}
