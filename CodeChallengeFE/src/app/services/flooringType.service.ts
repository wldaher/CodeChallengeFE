import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FlooringType } from '../entities/flooringType.entity';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FlooringTypeService {
  baseUrl = environment.baseUrl + '/Type';

  constructor(private _httpClient: HttpClient) { }

  public get(): Observable<FlooringType[]> {
    return this._httpClient.get<FlooringType[]>(this.baseUrl);
  }
}
