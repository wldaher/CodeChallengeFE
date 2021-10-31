import { Color } from './color.entity';
import { Flooring } from './flooring.entity';
import { Manufacturer } from './manufacturer.entity';
import { Style } from './style.entity';
import { Type } from './type.entity';

export class EditFlooring {
  id: number | undefined;
  manufacturerId: number | undefined;
  typeId: number | undefined;
  styleId: number | undefined;
  colorId: number | undefined;
  type: Type | undefined;
  manufacturer: Manufacturer | undefined;
  color: Color | undefined;
  style: Style | undefined;
  size!: string;
}
