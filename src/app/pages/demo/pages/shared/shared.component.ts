import {Component, OnInit} from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {ControlItem} from '@app/models/frontend'
import {NotificationService} from '@app/services'
import {markFormGroupTouched, regex, regexErrors} from '@app/shared'

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss'],
})
export class SharedComponent implements OnInit {
  form: FormGroup
  isInline: boolean
  regexErrors = regexErrors

  items: ControlItem[]

  showSpinner = false

  constructor(
    private fb: FormBuilder,
    private notification: NotificationService
  ) {
    this.isInline = true

    this.items = [
      {label: 'First', value: 1},
      {label: 'Second', value: 2},
      {label: 'Third', value: 3},
      {label: 'Fourth', value: 4},
      {label: 'Fifth', value: 5},
    ]
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      input: [
        null,
        {
          updateOn: 'blur',
          validators: [
            Validators.required,
            Validators.minLength(3),
            Validators.pattern(regex.numbers),
          ],
        },
      ],
      password: [
        null,
        {
          updateOn: 'blur',
          validators: [Validators.required],
        },
      ],
      autocomplete: [
        null,
        {
          updateOn: 'blur',
          validators: [Validators.required],
        },
      ],
      select: [
        null,
        {
          updateOn: 'change',
          validators: [Validators.required],
        },
      ],
      checkboxes: [
        null,
        {
          updateOn: 'change',
          validators: [Validators.required],
        },
      ],
      radios: [
        null,
        {
          updateOn: 'change',
          validators: [Validators.required],
        },
      ],
      date: [
        null,
        {
          updateOn: 'change',
          validators: [Validators.required],
        },
      ],
      dateRange: [
        null,
        {
          updateOn: 'change',
          validators: [Validators.required],
        },
      ],
    })
  }

  onSubmit() {
    console.log('Submit!')

    if (!this.form.valid) {
      markFormGroupTouched(this.form)
    }
  }

  onPatchValue() {
    this.form.patchValue({
      input: 123,
      password: 'qwerty',
      autocomplete: 1,
      select: 2,
      checkboxes: [3],
      radios: 4,
      date: new Date().getTime(),
      dateRange: {
        from: new Date(2019, 5, 10).getTime(),
        to: new Date(2019, 5, 25).getTime(),
      },
    })
  }

  onToggleInline() {
    this.isInline = !this.isInline
  }

  onToggleDisabke() {
    if (this.form.enabled) {
      this.form.disable()
    } else {
      this.form.enable()
    }
  }

  onToggleSpinner() {
    this.showSpinner = !this.showSpinner
  }

  onError(): void {
    this.notification.error('Oops! something is wrong')
  }

  onSuccess(): void {
    this.notification.success('Everything is fine!')
  }

  onFilesChanged(urls: string | string[]): void {
    console.log('urls = ', urls)
  }
}
