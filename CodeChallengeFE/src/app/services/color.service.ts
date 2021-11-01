import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Color } from '../entities/color.entity';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  baseUrl = environment.baseUrl + '/Color';

  constructor(private _httpClient: HttpClient) { }

  public get(): Observable<Color[]> {
    return this._httpClient.get<Color[]>(this.baseUrl);
  }
}
