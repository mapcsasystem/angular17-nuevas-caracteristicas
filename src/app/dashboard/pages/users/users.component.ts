import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '@shared/title/title.component';
import { UserService } from '@services/user.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  public userService = inject(UserService);
}
