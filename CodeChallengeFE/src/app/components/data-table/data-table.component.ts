import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { EditFlooring } from '../../entities/edit-flooring.entity';
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

  dataSource!: Flooring[];
  flooringTypes!: FlooringType[];
  flooring!: Flooring;
  modal!: NgbModalRef;

  constructor(private _flooringService: FlooringService,
    private _flooringTypeService: FlooringTypeService,
    private _modalService: NgbModal  ) {
  }

  ngOnInit(): void {
    this._flooringService.get().subscribe(result => {
      this.dataSource = result;
    });
    this._flooringTypeService.get().subscribe((types) => this.flooringTypes = types);
  }

  search(params: HttpParams): void {
    this._flooringService.get(params).subscribe(result => {
      this.dataSource = result;
    });
  }

  deleteFlooring(flooring: Flooring): void {
    this._flooringService.delete(flooring.id).subscribe(() => {
      this.dataSource = this.dataSource.filter(_ => _.id != flooring.id);
    });
  }

  openModal(content: any, flooring: Flooring): void {
    this.flooring = flooring;
    this.modal = this._modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  dataSaved(flooring: Flooring): void {
    const editIndex = this.dataSource.findIndex(_ => _.id == this.flooring.id);
    this.dataSource[editIndex] = flooring;
    this.modal.dismiss();
  }
}
