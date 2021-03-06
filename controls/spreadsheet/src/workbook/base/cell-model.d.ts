import { extend, Property, ChildProperty, Complex } from '@syncfusion/ej2-base';import { SheetModel, getRowsHeight, getColumnsWidth } from './index';import { CellStyleModel, HyperlinkModel, CellStyle, wrapEvent, ValidationModel } from '../common/index';import { getRow } from './row';import { RowModel } from './row-model';import { Workbook } from './workbook';import { getSheet } from './sheet';

/**
 * Interface for a class Cell
 */
export interface CellModel {

    /**
     * Defines the value of the cell which can be text or number.
     * @default ''
     */
    value?: string;

    /**
     * Defines the formula or expression of the cell.
     * @default ''
     */
    formula?: string;

    /**
     * Specifies the index of the cell.
     * @default 0
     * @asptype int
     */
    index?: number;

    /**
     * Specifies the number format code to display value in specified number format.
     * @default 'General'
     */
    format?: string;

    /**
     * Specifies the cell style options.
     *  ```html
     * <div id='Spreadsheet'></div>
     * ```
     * ```typescript
     * let spreadsheet: Spreadsheet = new Spreadsheet({
     *      sheets: [{
     *       ...
     *            rows: [{
     *                  cells: [{ value: '12', index: 2,  style: { fontWeight: 'bold', fontSize: 12, fontStyle: 'italic', textIndent: '2pt' 
     *                         backgroundColor: '#4b5366', color: '#ffffff' } }]
     *                  }]
     *            }]
     *  });
     * spreadsheet.appendTo('#Spreadsheet');
     * ```
     * @default {}
     */
    style?: CellStyleModel;

    /**
     * Specifies the hyperlink of the cell.
     * @default ''
     */
    hyperlink?: string | HyperlinkModel;

    /**
     * Wraps the cell text to the next line, if the text width exceeds the column width.
     * @default false
     */
    wrap?: boolean;

    /**
     * Specifies the validation of the cell.
     * @default ''
     */
    validation?: ValidationModel;

}