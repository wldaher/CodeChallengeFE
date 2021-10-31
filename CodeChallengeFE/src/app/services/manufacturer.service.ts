import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Manufacturer } from '../entities/manufacturer.entity';

@Injectable({
  providedIn: 'root'
})
export class ManufacturerService {
  constructor(private _httpClient: HttpClient) { }

  public get(): Observable<Manufacturer[]> {
    return this._httpClient.get<Manufacturer[]>('https://localhost:7259/Manufacturer');
  }
}
