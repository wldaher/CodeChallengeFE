import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { zip } from 'rxjs';
import { Color } from '../../entities/color.entity';
import { EditFlooring } from '../../entities/edit-flooring.entity';
import { Flooring } from '../../entities/flooring.entity';
import { FlooringType } from '../../entities/flooringType.entity';
import { Manufacturer } from '../../entities/manufacturer.entity';
import { Style } from '../../entities/style.entity';
import { ColorService } from '../../services/color.service';
import { FlooringService } from '../../services/flooring.service';
import { FlooringTypeService } from '../../services/flooringType.service';
import { ManufacturerService } from '../../services/manufacturer.service';
import { StyleService } from '../../services/style.service';

@Component({
  selector: 'edit-flooring',
  templateUrl: './edit-flooring.component.html',
  styleUrls: ['./edit-flooring.component.css']
})
export class EditFlooringComponent implements OnInit {

  formControl!: FormGroup;
  manufacturerGroup!: FormGroup;
  typeGroup!: FormGroup;
  colorGroup!: FormGroup;
  styleGroup!: FormGroup;
  flooringTypes: FlooringType[] = [];
  manufacturers: Manufacturer[] = [];
  colors: Color[] = [];
  styles: Style[] = [];

  showManufacturers = true;
  showColors = true;
  showStyles = true;
  showTypes = true;

  @Input()
  flooring!: Flooring;

  @Output()
  saveEvent = new EventEmitter<any>();

  constructor(private _flooringTypeService: FlooringTypeService,
    private _manufacturerService: ManufacturerService,
    private _colorService: ColorService,
    private _styleService: StyleService,
    private _flooringService: FlooringService) { }

  ngOnInit(): void {
    zip(this._flooringTypeService.get(), this._manufacturerService.get(), this._colorService.get(), this._styleService.get())
      .subscribe(result => {
        this.flooringTypes = result[0];
        this.manufacturers = result[1];
        this.colors = result[2];
        this.styles = result[3];

        this.initForm();
      });
  }

  initForm(): void {
    this.formControl = new FormBuilder().group({
      manufacturer: new FormGroup({
        name: new FormControl()
      }),
      type: new FormGroup({
        name: new FormControl()
      }),
      style: new FormGroup({
        name: new FormControl(),
        styleKey: new FormControl()
      }),
      color: new FormGroup({
        name: new FormControl(),
        colorNumber: new FormControl()
      }),
      id: new FormControl(this.flooring?.id),
      manufacturerId: new FormControl(this.flooring ? this.manufacturers.filter(_ => _.name == this.flooring.manufacturer)[0].id : null),
      typeId: new FormControl(this.flooring ? this.flooringTypes.filter(_ => _.name == this.flooring.type)[0].id : null),
      styleId: new FormControl(this.flooring ? this.styles.filter(_ => _.name == this.flooring.style)[0].id : null),
      colorId: new FormControl(this.flooring ? this.colors.filter(_ => _.name == this.flooring.color)[0].id : null),
      size: new FormControl(this.flooring?.size)
    });
  }

  toggleManufacturer() {
    this.showManufacturers = !this.showManufacturers;
    if (!this.showManufacturers) {
      this.formControl.get('manufacturer')?.reset();
    }
  }

  toggleColor() {
    this.showColors = !this.showColors;
    if (!this.showColors) {
      this.formControl.get('color')?.reset();
    }
  }

  toggleStyle() {
    this.showStyles = !this.showStyles;
    if (!this.showStyles) {
      this.formControl.get('style')?.reset();
    }
  }

  toggleType() {
    this.showTypes = !this.showTypes;
    if (!this.showTypes) {
      this.formControl.get('type')?.reset();
    }
  }

  save(): void {
    let flooring = Object.assign(new EditFlooring(), this.formControl.value);

    if (flooring.typeId) {
      flooring.type = null;
    }
    if (flooring.manufacturerId) {
      flooring.manufacturer = null;
    }
    if (flooring.colorId) {
      flooring.color = null;
    }
    if (flooring.styleId) {
      flooring.style = null;
    }

    this._flooringService.save(flooring).subscribe(result => {
      this.saveEvent.emit(result);
    });
  }
}
