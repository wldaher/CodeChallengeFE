import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FlooringType } from '../entities/flooringType.entity';

@Injectable({
  providedIn: 'root'
})
export class FlooringTypeService {
  constructor(private _httpClient: HttpClient) { }

  public get(): Observable<FlooringType[]> {
    return this._httpClient.get<FlooringType[]>('https://localhost:7259/Type');
  }
}
