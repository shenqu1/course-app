import {Component, OnInit} from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {ControlItem} from '@app/models/frontend'
import {regex, regexErrors} from '@app/shared'

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

  constructor(private fb: FormBuilder) {
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
            Validators.pattern(regex.email),
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
    })
  }

  onSubmit() {
    console.log('Submit!')
  }

  onPatchValue() {
    this.form.patchValue({input: 'test'})
  }

  onToggleInline() {
    this.isInline = !this.isInline
  }
}
