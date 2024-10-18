import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { MatStep, MatStepper, MatStepperModule } from '@angular/material/stepper'; //Material
import { MatInput, MatInputModule } from '@angular/material/input'; //Material
import { MatButton, MatButtonModule } from '@angular/material/button'; //Material
import { MatCalendar } from '@angular/material/datepicker'; //Material
import { MatCardModule } from '@angular/material/card'; //Material
import { RegisterSingleComponent } from './register-single/register-single.component';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    RegisterComponent,
    RegisterSingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule, //Material
    MatInputModule, //Material
    MatButtonModule, //Material
    MatCardModule, //Material
    MatDatepickerModule, //Material
    
  ],
  providers: [
    provideAnimationsAsync(),
    provideNativeDateAdapter()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
