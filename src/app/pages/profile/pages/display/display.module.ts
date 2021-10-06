import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {DisplayRoutingModule} from './display-routing.module'
import {DisplayComponent} from './display.component'
import {UserPhotoModule} from '@app/shared'
import {RecruiterComponent} from './components/recruiter/recruiter.component';
import { EmployeeComponent } from './components/employee/employee.component'

@NgModule({
  declarations: [DisplayComponent, RecruiterComponent, EmployeeComponent],
  imports: [CommonModule, DisplayRoutingModule, UserPhotoModule],
})
export class DisplayModule {}
