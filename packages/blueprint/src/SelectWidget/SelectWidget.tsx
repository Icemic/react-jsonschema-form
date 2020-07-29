import React from "react";

// import MenuItem from "@material-ui/core/MenuItem";
// import TextField from "@material-ui/core/TextField";

import { WidgetProps } from "@rjsf/core";
// import { utils } from "@rjsf/core";
import {
  Select,
  MultiSelect,
  ItemRenderer,
  ItemPredicate,
} from "@blueprintjs/select";
import { Button, MenuItem } from "@blueprintjs/core";

// const { asNumber, guessType } = utils;

// const nums = new Set(["number", "integer"]);

interface IItem {
  value: any;
  label: string;
  subLabel: string;
}

/**
 * This is a silly limitation in the DOM where option change event values are
 * always retrieved as strings.
 */
// const processValue = (schema: any, value: any) => {
//   // "enum" is a reserved word, so only "type" and "items" can be destructured
//   const { type, items } = schema;
//   if (value === "") {
//     return undefined;
//   } else if (type === "array" && items && nums.has(items.type)) {
//     return value.map(asNumber);
//   } else if (type === "boolean") {
//     return value === "true";
//   } else if (type === "number") {
//     return asNumber(value);
//   }

//   // If type is undefined, but an enum is present, try and infer the type from
//   // the enum values
//   if (schema.enum) {
//     if (schema.enum.every((x: any) => guessType(x) === "number")) {
//       return asNumber(value);
//     } else if (schema.enum.every((x: any) => guessType(x) === "boolean")) {
//       return value === "true";
//     }
//   }

//   return value;
// };

const SelectWidget = ({
  // schema,
  id,
  options,
  // label,
  // required,
  disabled,
  readonly,
  value,
  multiple,
  // autofocus,
  onChange,
}: // onBlur,
// onFocus,
// rawErrors = [],
WidgetProps) => {
  const ItemSelect = multiple
    ? MultiSelect.ofType<IItem>()
    : Select.ofType<IItem>();

  const { enumOptions, enumDisabled } = options;

  // const emptyValue = multiple ? [] : "";

  const filterItem: ItemPredicate<IItem> = (query, item) => {
    return item.label.toLowerCase().indexOf(query.toLowerCase()) >= 0;
  };
  const renderItem: ItemRenderer<IItem> = (
    item,
    { handleClick, modifiers, index }
  ) => {
    if (!modifiers.matchesPredicate) {
      return null;
    }
    const disabled = Boolean(
      enumDisabled && (enumDisabled as any).indexOf(value) != -1
    );
    return (
      <MenuItem
        active={modifiers.active}
        key={index}
        label={item.subLabel}
        onClick={handleClick}
        text={item.label}
        disabled={disabled}
      />
    );
  };

  const _onChange = (item: IItem) => onChange(item.value);
  // const _onBlur = ({ target: { value } }: React.FocusEvent<HTMLInputElement>) =>
  //   onBlur(id, processValue(schema, value));
  // const _onFocus = ({
  //   target: { value },
  // }: React.FocusEvent<HTMLInputElement>) =>
  //   onFocus(id, processValue(schema, value));

  const activeItem = (enumOptions as IItem[]).find(
    item => item.value === value
  );

  return (
    <div id={id} style={{ marginBottom: 15 }}>
      <ItemSelect
        filterable={false}
        // value={typeof value === "undefined" ? emptyValue : value}
        items={enumOptions as any}
        activeItem={activeItem}
        disabled={disabled || readonly}
        // error={rawErrors.length > 0}
        onItemSelect={_onChange}
        itemPredicate={filterItem}
        itemRenderer={renderItem}
        tagRenderer={(item: IItem) => item.label}
        noResults={<MenuItem disabled={true} text="No results." />}
        // onBlur={_onBlur}
        // onFocus={_onFocus}
      >
        {activeItem ? (
          <Button
            fill
            value={activeItem.value}
            disabled={disabled}
            rightIcon="caret-down">
            {activeItem.label}
          </Button>
        ) : (
          <Button fill disabled={disabled} rightIcon="caret-down" />
        )}
      </ItemSelect>
    </div>
  );
};

export default SelectWidget;
