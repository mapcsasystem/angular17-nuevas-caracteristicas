import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.scss',
})
export class ControlFlowComponent {
  public showContent = signal<boolean>(false);

  public toggleContent(): void {
    this.showContent.update((value) => !value);
  }
}
