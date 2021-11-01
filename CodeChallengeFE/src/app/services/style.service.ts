import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Style } from '../entities/style.entity';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StyleService {
  baseUrl = environment.baseUrl + '/Style';

  constructor(private _httpClient: HttpClient) { }

  public get(): Observable<Style[]> {
    return this._httpClient.get<Style[]>(this.baseUrl);
  }
}
