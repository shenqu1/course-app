import {Component, OnDestroy, OnInit} from '@angular/core'
import {Subject} from 'rxjs'
import {takeUntil} from 'rxjs/operators'
import {StepperService} from '../stepper/services'

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
})
export class PersonalComponent implements OnInit, OnDestroy {
  private destroy = new Subject<any>()

  constructor(private stepper: StepperService) {}

  ngOnInit(): void {
    this.stepper.check$.pipe(takeUntil(this.destroy)).subscribe((type) => {
      //type === 'next'
      this.stepper[type].next(true)
    })
  }

  ngOnDestroy(): void {
    this.destroy.next()
    this.destroy.complete()
  }
}
