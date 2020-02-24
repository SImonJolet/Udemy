import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userIsAuthenticted = true;

  get userIsAuthenticated() {
    return this._userIsAuthenticted;
  }

  constructor() { }
  login() {
    this._userIsAuthenticted = true;
  }

  logout() {
    this._userIsAuthenticted= false;
  }
}
