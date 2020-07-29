import { StatelessComponent } from "react";

import { withTheme, FormProps } from "@rjsf/core";

import Theme from "../Theme";

const Form:
  | React.ComponentClass<FormProps<any>>
  | StatelessComponent<FormProps<any>> = withTheme(Theme);

export default Form;
