import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextFieldComponent } from './components/text-field/text-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FamilyInfoComponent } from './components/family-info/family-info.component';
import { CreativeSectionComponent } from './components/creative-section/creative-section.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { SummaryComponent } from './components/summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    TextFieldComponent,
    StepperComponent,
    UserInfoComponent,
    FamilyInfoComponent,
    CreativeSectionComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
