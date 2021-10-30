import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Flooring } from '../entities/flooring.entity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlooringService {
  constructor(private _httpClient: HttpClient) { }

  public get(params?: HttpParams): Observable<Flooring[]> {
    return this._httpClient.get<Flooring[]>('https://localhost:7259/Flooring', { params: params });
  }
}
