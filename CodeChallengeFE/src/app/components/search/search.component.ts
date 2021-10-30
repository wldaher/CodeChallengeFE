import { HttpParams } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  formControl!: FormGroup;

  @Output()
  exportHttpParams = new EventEmitter<HttpParams>()

  constructor() { }

  ngOnInit(): void {
    this.formControl = this.initForm();
  }

  initForm(): FormGroup {
    return new FormBuilder().group({
      manufacturer: new FormControl(),
      type: new FormControl(),
      style: new FormControl(),
      color: new FormControl(),
      size: new FormControl()
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

  reset(): void {
    this.formControl.reset();
    this.exportHttpParams.emit(new HttpParams());
  }
}
