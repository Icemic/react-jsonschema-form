import React from "react";

import { WidgetProps } from "@rjsf/core";
import { utils } from "@rjsf/core";
import { Checkbox } from "@blueprintjs/core";

const { schemaRequiresTrueValue } = utils;

const CheckboxWidget = (props: WidgetProps) => {
  const {
    schema,
    id,
    value,
    disabled,
    readonly,
    label,
    autofocus,
    onChange,
    onBlur,
    onFocus,
  } = props;

  // Because an unchecked checkbox will cause html5 validation to fail, only add
  // the "required" attribute if the field value must be "true", due to the
  // "const" or "enum" keywords
  const required = schemaRequiresTrueValue(schema);

  const _onChange = ({
    target: { checked },
  }: React.ChangeEvent<HTMLInputElement>) => onChange(checked);
  const _onBlur = ({ target: { value } }: React.FocusEvent<HTMLInputElement>) =>
    onBlur(id, value);
  const _onFocus = ({
    target: { value },
  }: React.FocusEvent<HTMLInputElement>) => onFocus(id, value);

  return (
    <Checkbox
      id={id}
      checked={typeof value === "undefined" ? false : value}
      required={required}
      disabled={disabled || readonly}
      autoFocus={autofocus}
      onChange={_onChange}
      onBlur={_onBlur}
      onFocus={_onFocus}
      label={label}
    />
  );
};

export default CheckboxWidget;
