import {Component, OnDestroy, OnInit} from '@angular/core'
import {Subject} from 'rxjs'
import {takeUntil} from 'rxjs/operators'
import {StepperService} from './components/stepper/services'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit, OnDestroy {
  private destroy = new Subject<any>()

  constructor(public stepper: StepperService) {}

  ngOnInit(): void {
    this.stepper.init([
      {key: 'personal', label: 'Personal'},
      {key: 'professional', label: 'Professional'},
    ])

    this.stepper.complete$.pipe(takeUntil(this.destroy)).subscribe(() => {
      console.log('complete')
    })

    this.stepper.cancel$.pipe(takeUntil(this.destroy)).subscribe(() => {
      console.log('cancel')
    })
  }

  ngOnDestroy(): void {
    this.destroy.next()
    this.destroy.complete()
  }
}
