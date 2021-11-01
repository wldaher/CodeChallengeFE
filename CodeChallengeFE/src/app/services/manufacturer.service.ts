import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Manufacturer } from '../entities/manufacturer.entity';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ManufacturerService {
  baseUrl = environment.baseUrl + '/Manufacturer';

  constructor(private _httpClient: HttpClient) { }

  public get(): Observable<Manufacturer[]> {
    return this._httpClient.get<Manufacturer[]>(this.baseUrl);
  }
}
