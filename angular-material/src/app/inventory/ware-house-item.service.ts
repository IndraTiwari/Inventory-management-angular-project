import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WareHouseItem } from './ware-house-item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WareHouseItemService {

  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getItemList(): Observable<WareHouseItem[]> {
    return this.http.get<any>(`${this.url}/products`);
   }

  postItems(params): Observable<any> {
    return this.http.post<any>(`${this.url}/products`, params);
  }

  deleteItem(id: number): Observable<any> {
    console.log('id', id);
    return this.http.delete<any>(`${this.url}/products` + '/' + id );
  }

  UpdateItem(params): Observable<any> {
    return this.http.put<any>(`${this.url}/products` + '/' + params.id, params );
  }

}
