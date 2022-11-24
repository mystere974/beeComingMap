import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Capital } from '../list/capital';


@Injectable({
  providedIn: 'root'
})
export class ListService {

  baseUrl: string = 'http://localhost:3000/capitals';
  router: any;

  constructor(private http: HttpClient) { }

  getCapitals(): Observable<Capital[]> {
    return this.http.get<Capital[]>(this.baseUrl);
  }

  getCapital(id: string): Observable<Capital> {
    return this.http.get<Capital>(this.baseUrl+ "/" + id);
  }

  postCapital(capital: Capital, id?: string): Observable<Capital> {

    if (id) {
      return this.http.put<Capital>(this.baseUrl + "/" + id, capital );
    } else {

      return this.http.post<Capital>(this.baseUrl, capital );
    }
  }

  deleteCapital(id: number): Observable<object> {
    return this.http.delete(this.baseUrl + "/" + id);
  }

}
