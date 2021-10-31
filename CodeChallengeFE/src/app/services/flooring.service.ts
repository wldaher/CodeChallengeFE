import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Flooring } from '../entities/flooring.entity';
import { Observable } from 'rxjs';
import { EditFlooring } from '../entities/edit-flooring.entity';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FlooringService {
  baseUrl = environment.baseUrl + '/Flooring';

  constructor(private _httpClient: HttpClient) { }

  public get(params?: HttpParams): Observable<Flooring[]> {
    return this._httpClient.get<Flooring[]>(this.baseUrl, { params: params });
  }

  public save(flooring: EditFlooring): Observable<Flooring> {
    if (flooring.id) {
      return this._httpClient.put<Flooring>(this.baseUrl, flooring);
    } else {
      return this._httpClient.post<Flooring>(this.baseUrl, flooring);
    }
  }

  public delete(id: number): Observable<number> {
    return this._httpClient.delete<number>(this.baseUrl + '?flooringId=' + id);
  }
}
