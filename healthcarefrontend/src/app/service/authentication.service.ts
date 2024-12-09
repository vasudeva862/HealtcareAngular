import { Injectable } from '@angular/core';



@Injectable({

  providedIn: 'root'

})

export class AuthenticationService {



  constructor() { }

  authenticate(id: string, password: string) {

    if (id === "nitin" && password === "1234") {

      sessionStorage.setItem('id', id)

      return true;

    } else {

      return false;

    }

  }

  isUserLoggedIn() {

    let user = sessionStorage.getItem('id')

    console.log(user);

    console.log(!(user === null))

    return !(user === null)

  }

  logOut() {

    sessionStorage.removeItem('id')

  }

}