import React from "react";

import { FieldProps } from "@rjsf/core";
import { Divider } from "@blueprintjs/core";

const TitleField = ({ title }: FieldProps) => (
  <>
    <h5 className="bp3-heading">{title}</h5>
    <Divider />
  </>
);

export default TitleField;
