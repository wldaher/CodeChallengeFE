import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Color } from '../entities/color.entity';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  constructor(private _httpClient: HttpClient) { }

  public get(): Observable<Color[]> {
    return this._httpClient.get<Color[]>('https://localhost:7259/Color');
  }
}
