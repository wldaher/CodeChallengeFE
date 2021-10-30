import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Flooring } from '../../entities/flooring.entity';
import { FlooringService } from '../../services/flooring.service';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  dataSource!: Observable<Flooring[]>;

  constructor(private _flooringService: FlooringService) {
  }

  ngOnInit(): void {
    this.dataSource = this._flooringService.get();
  }

  search(params: HttpParams): void {
    this.dataSource = this._flooringService.get(params);
  }
}
