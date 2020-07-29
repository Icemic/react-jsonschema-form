import React from "react";

import { WidgetProps } from "@rjsf/core";
import { InputGroup } from "@blueprintjs/core";

const UpDownWidget = ({
  id,
  required,
  readonly,
  disabled,
  value,
  defaultValue,
  onChange,
  onBlur,
  onFocus,
  autofocus,
}: WidgetProps) => {
  const _onChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => onChange(value);
  const _onBlur = ({ target: { value } }: React.FocusEvent<HTMLInputElement>) =>
    onBlur(id, value);
  const _onFocus = ({
    target: { value },
  }: React.FocusEvent<HTMLInputElement>) => onFocus(id, value);

  return (
    <InputGroup
      id={id}
      fill
      autoFocus={autofocus}
      required={required}
      type="number"
      disabled={disabled || readonly}
      name={name}
      defaultValue={defaultValue as string}
      value={value ? value : ""}
      onChange={_onChange}
      onBlur={_onBlur}
      onFocus={_onFocus}
    />
  );
};

export default UpDownWidget;
