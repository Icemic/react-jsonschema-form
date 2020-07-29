import React from "react";

import { WidgetProps } from "@rjsf/core";
import { TextArea } from "@blueprintjs/core";

type CustomWidgetProps = WidgetProps & {
  options: any;
};

const TextareaWidget = ({
  id,
  placeholder,
  value,
  required,
  disabled,
  autofocus,
  readonly,
  onBlur,
  onFocus,
  onChange,
  options,
}: // rawErrors = [],
CustomWidgetProps) => {
  const _onChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLTextAreaElement>) =>
    onChange(value === "" ? options.emptyValue : value);
  const _onBlur = ({
    target: { value },
  }: React.FocusEvent<HTMLTextAreaElement>) => onBlur(id, value);
  const _onFocus = ({
    target: { value },
  }: React.FocusEvent<HTMLTextAreaElement>) => onFocus(id, value);

  return (
    <TextArea
      id={id}
      fill
      placeholder={placeholder}
      disabled={disabled || readonly}
      value={value || options.emptyValue || ''}
      required={required}
      autoFocus={autofocus}
      rows={options.rows || 5}
      // error={rawErrors.length > 0}
      onChange={_onChange}
      onBlur={_onBlur}
      onFocus={_onFocus}
    />
  );
};

export default TextareaWidget;
