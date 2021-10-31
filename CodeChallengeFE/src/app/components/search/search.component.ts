import { HttpParams } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Flooring } from '../../entities/flooring.entity';
import { FlooringType } from '../../entities/flooringType.entity';
import { FlooringService } from '../../services/flooring.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  formControl!: FormGroup;
  modalFormControl!: FormGroup;
  modal!: NgbModalRef;

  @Input()
  flooringTypes!: FlooringType[]

  @Output()
  exportHttpParams = new EventEmitter<HttpParams>()

  constructor(private _modalService: NgbModal,
    private _flooringService: FlooringService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.formControl = new FormBuilder().group({
      manufacturer: new FormControl(),
      type: new FormControl(),
      style: new FormControl(),
      color: new FormControl(),
      size: new FormControl()
    });
  }

  initModalForm(flooring?: Flooring): void {
    this.modalFormControl = new FormBuilder().group({
      manufacturer: new FormControl(flooring ? flooring.manufacturer : null),
      type: new FormControl(flooring ? flooring.type : null),
      style: new FormControl(flooring ? flooring.style : null),
      color: new FormControl(flooring ? flooring.color : null),
      size: new FormControl(flooring ? flooring.size : null)
    });
  }

  search(): void {
    if (this.formControl) {
      let params = new HttpParams();
      const formValue = this.formControl.value;

      for (const key in formValue) {
        if (formValue[key]) {
          params = params.append(key, formValue[key]);
        }
      }

      this.exportHttpParams.emit(params);
    }
  }

  save(): void {
    this._flooringService.save(Object.assign(new Flooring(), this.modalFormControl.value)).subscribe(() => {
      this.modal.dismiss();
    });
  }

  reset(): void {
    this.formControl.reset();
    this.exportHttpParams.emit(new HttpParams());
  }

  open(content: any) {
    this.initModalForm();
    this.modal = this._modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }
}
