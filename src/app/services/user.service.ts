import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { User, UsersResponse } from '@interfaces/req-response';
import { delay } from 'rxjs';

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // TODO el caracter # es para poner el state en privado directamente en javascript
  #http = inject(HttpClient);

  #state = signal<State>({
    users: [],
    loading: true,
  });

  public users = computed(() => this.#state().users);
  public loading = computed(() => this.#state().loading);

  constructor() {
    this.#http
      .get<UsersResponse>('https://reqres.in/api/users')
      .pipe(delay(3000))
      .subscribe((res) => {
        this.#state.set({
          users: res.data,
          loading: false,
        });
      });
  }
}
