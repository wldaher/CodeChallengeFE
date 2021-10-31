import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Flooring } from '../../entities/flooring.entity';
import { FlooringType } from '../../entities/flooringType.entity';
import { FlooringService } from '../../services/flooring.service';
import { FlooringTypeService } from '../../services/flooringType.service';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  dataSource!: Observable<Flooring[]>;
  flooringTypes!: FlooringType[];

  constructor(private _flooringService: FlooringService,
    private _flooringTypeService: FlooringTypeService) {
  }

  ngOnInit(): void {
    this.dataSource = this._flooringService.get();
    this._flooringTypeService.get().subscribe((types) => this.flooringTypes = types);
  }

  search(params: HttpParams): void {
    this.dataSource = this._flooringService.get(params);
  }
}
