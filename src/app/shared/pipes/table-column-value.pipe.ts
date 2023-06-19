import { Pipe, PipeTransform } from "@angular/core";
import { Column } from "../component";

@Pipe({
  name: 'columnValue'
})
export class TableColumnValuePipe implements PipeTransform {
    private static readonly VAZIO = '*VAZIO*';
    transform(value: any, column: Column): any {
      const key = column.key;
      if (!value) {
        return TableColumnValuePipe.VAZIO;
      }
      const columnValue = this.findValue(key, value);
      const translator = column.translate;
      if (translator && translator.size > 0 && translator.has(columnValue)) {
        return translator.get(columnValue);
      }
      return columnValue;
    }

    private findValue(key: string, value: any): any {
      const accessors = key.split(".");

      let variable = value;
      for (let accessor of accessors) {
        if (variable.hasOwnProperty(accessor)) {
          variable = variable[accessor];
        } else {
          variable = TableColumnValuePipe.VAZIO;
          break;
        }
      }
      return variable;
    }
}
