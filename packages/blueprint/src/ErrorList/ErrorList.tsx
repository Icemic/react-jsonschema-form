import React from "react";

import { ErrorListProps } from "@rjsf/core";
import { Callout, Colors } from "@blueprintjs/core";

const ErrorList = ({ errors }: ErrorListProps) => (
  <Callout intent="danger">
    <h6 className="bp3-heading">Errors</h6>
    <ul
      className="bp3-list"
      style={{
        color: Colors.RED2,
      }}>
      {errors.map((error, i: number) => {
        return (
          <li
            key={i}
            style={{
              color: Colors.RED2,
            }}>
            <p className="bp3-ui-text">{error.stack}</p>
          </li>
        );
      })}
    </ul>
  </Callout>
);

export default ErrorList;
