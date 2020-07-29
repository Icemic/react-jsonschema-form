import React from "react";

// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormLabel from "@material-ui/core/FormLabel";
// import Radio from "@material-ui/core/Radio";
// import RadioGroup from "@material-ui/core/RadioGroup";

import { WidgetProps } from "@rjsf/core";
import { RadioGroup, Radio } from "@blueprintjs/core";

const RadioWidget = ({
  id,
  schema,
  options,
  value,
  // required,
  disabled,
  readonly,
  onChange,
}: // onBlur,
// onFocus,
WidgetProps) => {
  const { enumOptions, enumDisabled } = options;

  const _onChange = ({
    currentTarget: { value },
  }: React.FormEvent<HTMLInputElement>) =>
    onChange(
      schema.type == "boolean"
        ? value !== "false"
        : schema.type == "number"
        ? Number(value)
        : value
    );

  // const _onBlur = ({ target: { value } }: React.FocusEvent<HTMLInputElement>) =>
  //   onBlur(id, value);
  // const _onFocus = ({
  //   target: { value },
  // }: React.FocusEvent<HTMLInputElement>) => onFocus(id, value);

  const inline = options ? options.inline : false;

  return (
    <RadioGroup
      selectedValue={value}
      inline={inline as boolean}
      onChange={_onChange}
      // onBlur={_onBlur}
      // onFocus={_onFocus}
    >
      {(enumOptions as any).map((option: any, i: number) => {
        const itemDisabled =
          enumDisabled && (enumDisabled as any).indexOf(option.value) != -1;

        return (
          <Radio
            id={`${id}_${i}`}
            label={option.label}
            value={option.value}
            key={i}
            disabled={disabled || itemDisabled || readonly}
          />
        );
      })}
    </RadioGroup>
  );
};

export default RadioWidget;
