import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  private _refresh$ = new Subject<void>()

  get refresh$(){
    return this._refresh$
  }

  url = 'http://127.0.0.1:80' // localhost

  constructor(private http:HttpClient) { }

  consultaDatos():Observable<any>{
    return this.http.get(this.url+'/consultaDatos')
  }

  removeDatos(datId:any){
    return this.http
    .post(this.url+'/removeDatos', JSON.stringify(datId))
    .pipe(tap(() => {
      this.refresh$.next()
    } 
    ))
  }

}
