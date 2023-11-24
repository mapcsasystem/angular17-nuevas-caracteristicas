import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './change-detection.component.html',
  styleUrl: './change-detection.component.scss',
})
export class ChangeDetectionComponent {
  public currentFramework = computed(
    () => `Change Detection ${this.frameworkAsSignal().name}`
  );

  public frameworkAsSignal = signal({
    name: 'Angular',
    releseDate: 2016,
  });

  public frameworkAsProperty = {
    name: 'Angular',
    releseDate: 2016,
  };

  constructor() {
    setTimeout(() => {
      this.frameworkAsSignal.update((value) => ({ ...value, name: 'React' }));
      // this.frameworkAsProperty.name = 'React';
      console.log('Hecho');
    }, 3000);
  }
}
