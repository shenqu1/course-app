import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core'
import {Observable, Subject} from 'rxjs'
import {takeUntil} from 'rxjs/operators'
import {StepperService} from './components/stepper/services'

import {Store, select} from '@ngrx/store'
import * as fromRoot from '@app/store'
import * as fromDictionaries from '@app/store/dictionaries'
import {PersonalForm} from './components/personal/personal.component'
import {ProfessionalForm} from './components/professional/professional.component'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent implements OnInit, OnDestroy {
  dictionaries$: Observable<fromDictionaries.Dictionaries>
  dictionariesIsReady$: Observable<boolean>

  private destroy = new Subject<any>()

  constructor(
    private store: Store<fromRoot.State>,
    public stepper: StepperService
  ) {}

  ngOnInit(): void {
    this.dictionaries$ = this.store.pipe(
      select(fromDictionaries.getDictionaries)
    )

    this.dictionariesIsReady$ = this.store.pipe(
      select(fromDictionaries.getIsReady)
    )

    this.stepper.init([
      {key: 'professional', label: 'Professional'},
      {key: 'personal', label: 'Personal'},
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

  onChangePersonal(data: PersonalForm): void {
    console.log('personal changed = ', data)
  }

  onChangeProfessoonal(data: ProfessionalForm): void {
    console.log('professional changed = ', data)
  }
}
