import { EventHandler, Property, Event, compile, EmitType, KeyboardEvents, append } from '@syncfusion/ej2-base';import { attributes, isNullOrUndefined, getUniqueID, formatUnit, isUndefined, getValue } from '@syncfusion/ej2-base';import { Animation, AnimationModel, Browser, KeyboardEventArgs, NotifyPropertyChanges } from '@syncfusion/ej2-base';import { addClass, removeClass, setStyleAttribute, closest, prepend, detach, classList, isBlazor } from '@syncfusion/ej2-base';import { Popup, isCollide, createSpinner, showSpinner, hideSpinner } from '@syncfusion/ej2-popups';import { IInput, Input, InputObject, FloatLabelType } from '@syncfusion/ej2-inputs';import { incrementalSearch } from '../common/incremental-search';import { DropDownBase, dropDownBaseClasses, SelectEventArgs, FilteringEventArgs, PopupEventArgs } from '../drop-down-base/drop-down-base';import { FocusEventArgs, ResultData, BeforeOpenEventArgs } from '../drop-down-base/drop-down-base';import { FieldSettingsModel } from '../drop-down-base/drop-down-base-model';import { DropDownListModel } from '../drop-down-list';import { DataManager, Query, Predicate } from '@syncfusion/ej2-data';import { SortOrder } from '@syncfusion/ej2-lists';
import {ChangeEventArgs} from "./drop-down-list";
import {DropDownBaseModel} from "../drop-down-base/drop-down-base-model";

/**
 * Interface for a class DropDownList
 */
export interface DropDownListModel extends DropDownBaseModel{

    /**
     * Sets CSS classes to the root element of the component that allows customization of appearance.

     */
    cssClass?: string;

    /**
     * Specifies the width of the component. By default, the component width sets based on the width of 
     * its parent container. You can also set the width in pixel values.



     */
    width?: string | number;

    /**
     * Specifies the height of the popup list.  
     * > For more details about the popup configuration refer to 
     * [`Popup Configuration`](../../drop-down-list/getting-started#configure-the-popup-list) documentation.



     */
    popupHeight?: string | number;

    /**
     * Specifies the width of the popup list. By default, the popup width sets based on the width of 
     * the component.
     * > For more details about the popup configuration refer to 
     * [`Popup Configuration`](../../drop-down-list/getting-started#configure-the-popup-list) documentation.



     */
    popupWidth?: string | number;

    /**
     * Specifies a short hint that describes the expected value of the DropDownList component.

     */
    placeholder?: string;

    /**
     * Accepts the value to be displayed as a watermark text on the filter bar. 

     */
    filterBarPlaceholder?: string;

    /**
     * Allows additional HTML attributes such as title, name, etc., and
     * accepts n number of attributes in a key-value pair format.
     * 
     * {% codeBlock src="dropdownlist/html-attributes-api/index.ts" %}{% endcodeBlock %}
     * 
     * {% codeBlock src="dropdownlist/html-attributes-api/index.html" %}{% endcodeBlock %}
     *

     */
    htmlAttributes?: { [key: string]: string; };

    /**
     * Accepts the external `Query`
     * that execute along with data processing.
     * 
     * {% codeBlock src="dropdownlist/query-api/index.ts" %}{% endcodeBlock %}
     * 
     * {% codeBlock src="dropdownlist/query-api/index.html" %}{% endcodeBlock %}
     * 

     */
    query?: Query;

    /**
     * Accepts the template design and assigns it to the selected list item in the input element of the component.
     * For more details about the available template options refer to 
     * [`Template`](../../drop-down-list/templates) documentation.
     * 
     * We have built-in `template engine`
     * which provides options to compile template string into a executable function.
     * For EX: We have expression evolution as like ES6 expression string literals.

     */
    valueTemplate?: string;

    /**
     * Accepts the template design and assigns it to the header container of the popup list.
     * > For more details about the available template options refer to [`Template`](../../drop-down-list/templates) documentation.

     */
    headerTemplate?: string;

    /**
     * Accepts the template design and assigns it to the footer container of the popup list.
     * > For more details about the available template options refer to [`Template`](../../drop-down-list/templates) documentation.

     */
    footerTemplate?: string;

    /**
     * When allowFiltering is set to true, show the filter bar (search box) of the component.
     * The filter action retrieves matched items through the `filtering` event based on
     * the characters typed in the search TextBox.
     * 
     * If no match is found, the value of the `noRecordsTemplate` property will be displayed.
     * > For more details about the filtering refer to [`Filtering`](../../drop-down-list/filtering) documentation.
     * 
     * {% codeBlock src="dropdownlist/allow-filtering-api/index.ts" %}{% endcodeBlock %}
     * 
     * {% codeBlock src="dropdownlist/allow-filtering-api/index.html" %}{% endcodeBlock %}

     */
    allowFiltering?: boolean;

    /**
     * When set to true, the user interactions on the component are disabled.

     */
    readonly?: boolean;

    /**
     * Gets or sets the display text of the selected item in the component.

     */
    text?: string;

    /**
     * Gets or sets the value of the selected item in the component.


     */
    value?: number | string | boolean;

    /**
     * Gets or sets the index of the selected item in the component.
     * 
     * {% codeBlock src="dropdownlist/index-api/index.ts" %}{% endcodeBlock %}
     * 
     * {% codeBlock src="dropdownlist/index-api/index.html" %}{% endcodeBlock %}
     * 



     */
    index?: number;

    /**
     * Specifies whether to display the floating label above the input element.
     * Possible values are:
     * * Never: The label will never float in the input when the placeholder is available.
     * * Always: The floating label will always float above the input.
     * * Auto: The floating label will float above the input after focusing or entering a value in the input.
     * 
     * {% codeBlock src="dropdownlist/float-label-type-api/index.ts" %}{% endcodeBlock %}
     * 
     * {% codeBlock src="dropdownlist/float-label-type-api/index.html" %}{% endcodeBlock %}
     * 




     */
    floatLabelType?: FloatLabelType;

    /**
     * Specifies whether to show or hide the clear button. 
     * When the clear button is clicked, `value`, `text`, and `index` properties are reset to null.

     */
    showClearButton?: boolean;

    /**
     * Triggers on typing a character in the filter bar when the 
     * [`allowFiltering`](./#allowfiltering) 
     * is enabled.
     * > For more details about the filtering refer to [`Filtering`](../../drop-down-list/filtering) documentation.
     * 
     * @event

     */
    filtering?: EmitType<FilteringEventArgs>;

    /**
     * Triggers when an item in a popup is selected or when the model value is changed by user.
     * Use change event to 
     * [`Configure the Cascading DropDownList`](../../drop-down-list/how-to/cascading)
     * @event

     */
    change?: EmitType<ChangeEventArgs>;

    /**
     * Triggers when the popup before opens.
     * @event


     */
    beforeOpen?: EmitType<Object>;

    /**
     * Triggers when the popup opens.
     * @event

     */
    open?: EmitType<PopupEventArgs>;

    /**
     * Triggers when the popup is closed.
     * @event

     */
    close?: EmitType<PopupEventArgs>;

    /**
     * Triggers when focus moves out from the component.
     * @event
     */
    blur?: EmitType<Object>;

    /**
     * Triggers when the component is focused.
     * @event
     */
    focus?: EmitType<Object>;

}