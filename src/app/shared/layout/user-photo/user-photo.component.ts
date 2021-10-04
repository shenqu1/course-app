import {Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core'
import {SafeStyle, DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: 'app-user-photo',
  templateUrl: './user-photo.component.html',
  styleUrls: ['./user-photo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPhotoComponent implements OnInit {
  @Input() photoURL: string

  constructor(private santizer: DomSanitizer) {}

  ngOnInit(): void {}

  get safePhotoURL(): SafeStyle {
    return this.photoURL
      ? this.santizer.bypassSecurityTrustStyle(`url(${this.photoURL})`)
      : null
  }
}
