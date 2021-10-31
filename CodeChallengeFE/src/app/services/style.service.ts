import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Style } from '../entities/style.entity';

@Injectable({
  providedIn: 'root'
})
export class StyleService {
  constructor(private _httpClient: HttpClient) { }

  public get(): Observable<Style[]> {
    return this._httpClient.get<Style[]>('https://localhost:7259/Style');
  }
}
