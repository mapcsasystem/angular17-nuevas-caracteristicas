import { Injectable, signal } from '@angular/core';
import { User } from '@interfaces/req-response';

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // TODO el caracter # es para poner el state en privado directamente en javascript
  #state = signal<State>({
    users: [],
    loading: true,
  });

  constructor() {
    console.log('Cargando data');
  }
}
