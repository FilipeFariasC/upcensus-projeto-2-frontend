import { Pipe, PipeTransform } from "@angular/core";
import { Column } from "../component";

@Pipe({
  name: 'columnValue'
})
export class TableColumnValuePipe implements PipeTransform {
    transform(value: any, column: Column): any {
      const key = column.key;
      if (!value || !value.hasOwnProperty(key)) {
        return '';
      }
      return value[key];
    }
}
