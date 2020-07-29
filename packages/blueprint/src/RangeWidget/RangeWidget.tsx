import React from "react";

import { WidgetProps, utils } from "@rjsf/core";
import { Slider } from "@blueprintjs/core";

const { rangeSpec } = utils;

const RangeWidget = ({
  value,
  readonly,
  disabled,
  // onBlur,
  // onFocus,
  // options,
  schema,
  onChange,
  // required,
  label,
  id,
}: WidgetProps) => {
  let sliderProps = { value, label, id, ...rangeSpec(schema) };

  // const _onBlur = ({ target: { value } }: React.FocusEvent<HTMLInputElement>) =>
  //   onBlur(id, value);
  // const _onFocus = ({
  //   target: { value },
  // }: React.FocusEvent<HTMLInputElement>) => onFocus(id, value);

  return (
    <Slider
      disabled={disabled || readonly}
      onChange={onChange}
      // onBlur={_onBlur}
      // onFocus={_onFocus}
      labelRenderer={true}
      stepSize={sliderProps.step}
      labelStepSize={sliderProps.max! - sliderProps.min!}
      {...sliderProps}
    />
  );
};

export default RangeWidget;
