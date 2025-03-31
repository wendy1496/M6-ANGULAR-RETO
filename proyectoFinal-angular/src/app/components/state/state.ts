import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class State {
    private _user = new BehaviorSubject<string>(null);
    private _password = new BehaviorSubject<string>(null);
    

    get user$(): Observable<string> {
        return this._user.asObservable();
      }
    
    set user(value: string) {
        this._user.next(value);
    }

    get password$(): Observable<string> {
        return this._password.asObservable();
      }
    
    set password(value: string) {
        this._password.next(value);
    }
    
}
