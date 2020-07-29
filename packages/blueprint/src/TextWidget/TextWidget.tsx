import React from "react";

import { WidgetProps } from "@rjsf/core";
import { InputGroup as TextField, HTMLInputProps } from "@blueprintjs/core";

export type TextWidgetProps = WidgetProps & HTMLInputProps;

const TextWidget = ({
  defaultValue,
  id,
  required,
  readonly,
  disabled,
  type,
  label,
  value,
  onChange,
  onBlur,
  onFocus,
  autofocus,
  options,
  schema,
  uiSchema,
  rawErrors = [],
  formContext,
  ...textFieldProps
}: TextWidgetProps) => {
  const _onChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    onChange(value === "" ? options.emptyValue : value);
  const _onBlur = ({ target: { value } }: React.FocusEvent<HTMLInputElement>) =>
    onBlur(id, value);
  const _onFocus = ({
    target: { value },
  }: React.FocusEvent<HTMLInputElement>) => onFocus(id, value);

  return (
    <TextField
      id={id}
      fill
      // label={displayLabel ? label || schema.title : false}
      autoFocus={autofocus}
      required={required}
      disabled={disabled || readonly}
      name={name}
      type={type || (schema.type as string)}
      value={value || value === 0 ? value : ""}
      // error={rawErrors.length > 0}
      onChange={_onChange}
      onBlur={_onBlur}
      onFocus={_onFocus}
      defaultValue={defaultValue as string}
      {...textFieldProps}
    />
  );
};

export default TextWidget;
