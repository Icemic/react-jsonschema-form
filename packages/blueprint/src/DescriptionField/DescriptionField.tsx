import React from "react";

import { FieldProps } from "@rjsf/core";

const DescriptionField = ({ description }: FieldProps) => {
  if (description) {
    return <p className="bp3-running-text">{description}</p>;
  }

  return null;
};

export default DescriptionField;
