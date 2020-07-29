import React from "react";

import { FieldTemplateProps } from "@rjsf/core";
import { FormGroup, Colors } from "@blueprintjs/core";

const FieldTemplate = ({
  id,
  children,
  displayLabel,
  label,
  disabled,
  required,
  rawErrors = [],
  rawHelp,
  rawDescription,
}: FieldTemplateProps) => {
  const labelInfo = (
    <>
      {required && <span style={{ color: Colors.RED2 }}>* </span>}
      {rawDescription && <small>{rawDescription}</small>}
    </>
  );

  return (
    <FormGroup
      disabled={disabled}
      labelFor={id}
      label={displayLabel ? label : ""}
      labelInfo={labelInfo}
      helperText={
        <div>
          {rawHelp && <p>{rawHelp}</p>}
          {rawErrors.length > 0 && (
            <ul className="bp3-list" style={{ color: Colors.RED2 }}>
              {rawErrors.map((error, i: number) => {
                return (
                  <li key={i} style={{ color: Colors.RED2 }}>
                    <p className="bp3-ui-text" id={id}>
                      {error}
                    </p>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      }>
      {children}
    </FormGroup>
  );
};

export default FieldTemplate;
