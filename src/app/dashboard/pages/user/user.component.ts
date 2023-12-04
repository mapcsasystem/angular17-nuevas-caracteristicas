import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { TitleComponent } from '@shared/title/title.component';
import { User } from '@interfaces/req-response';
import { switchMap } from 'rxjs';
import { UserService } from '@services/user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, TitleComponent, RouterModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  #route = inject(ActivatedRoute);
  #userServices = inject(UserService);

  public user = toSignal(
    this.#route.params.pipe(
      switchMap(({ id }) => this.#userServices.getUserById(id))
    )
  );

  public fullName = computed(() => {
    if (this.user()) {
      return `Información del Usuario: ${this.user()?.first_name} ${
        this.user()?.last_name
      } `;
    }
    return `Información del Usuario`;
  });

  // constructor() {
  //   console.log(this.#route.params);
  // }
}
