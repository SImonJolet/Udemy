import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userIsAuthenticted = true;
  private _userId= 'abc';

  get userIsAuthenticated() {
    return this._userIsAuthenticted;
  }

  get userId(){ 
    return this._userId;
  }
  constructor() { }
  login() {
    this._userIsAuthenticted = true;
  }

  logout() {
    this._userIsAuthenticted= false;
  }
}
