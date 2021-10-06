import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {ReactiveFormsModule} from '@angular/forms'

import {
  FormFieldModule,
  InputModule,
  AutocompleteModule,
  SelectModule,
  CheckboxesModule,
  RadiosModule,
  DateRangeModule,
} from '@app/shared/controls'
import {FilesUploadModule} from '@app/shared/popups'
import {SpinnerModule} from '@app/shared/indicators'
import {FormRoutingModule} from './form-routing.module'
import {FormComponent} from './form.component'
import {StepperModule} from './components/stepper/stepper.module'
import {PersonalComponent} from './components/personal/personal.component'
import {ProfessionalComponent} from './components/professional/professional.component'
import {ButtonModule, UserPhotoModule} from '@app/shared'
import {EmployeeComponent} from './components/professional/roles/employee/employee.component'
import {RecruiterComponent} from './components/professional/roles/recruiter/recruiter.component'
import {ExperiencesComponent} from './components/professional/roles/employee/experiences/experiences.component'
import {MapperService} from './services'

@NgModule({
  declarations: [
    FormComponent,
    PersonalComponent,
    ProfessionalComponent,
    EmployeeComponent,
    RecruiterComponent,
    ExperiencesComponent,
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    FormFieldModule,
    InputModule,
    AutocompleteModule,
    SelectModule,
    CheckboxesModule,
    RadiosModule,
    DateRangeModule,
    ButtonModule,
    FilesUploadModule,
    SpinnerModule,
    StepperModule,
    ReactiveFormsModule,
    UserPhotoModule,
  ],
  providers: [MapperService],
})
export class FormModule {}
