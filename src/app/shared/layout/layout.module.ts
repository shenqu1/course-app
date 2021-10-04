import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {UserPhotoModule} from '.'

@NgModule({
  declarations: [],
  imports: [CommonModule, UserPhotoModule],
  exports: [UserPhotoModule],
})
export class LayoutModule {}
