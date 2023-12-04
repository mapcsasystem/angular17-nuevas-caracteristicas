import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '@shared/title/title.component';
import { HeavyLoadersFastComponent } from '../../../shared/heavy-loaders/heavy-loaders-fast.component';

@Component({
  selector: 'app-defer-options',
  standalone: true,
  imports: [CommonModule, TitleComponent, HeavyLoadersFastComponent],
  templateUrl: './defer-options.component.html',
  styleUrl: './defer-options.component.scss',
})
export class DeferOptionsComponent {}
