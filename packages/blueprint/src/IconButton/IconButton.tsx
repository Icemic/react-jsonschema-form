import React from "react";

import { Button, IButtonProps } from "@blueprintjs/core";

type IconButtonProps = IButtonProps & {
  icon: "remove" | "plus" | "arrow-up" | "arrow-down";
  tabIndex?: number;
  style?: any;
};

const IconButton = (props: IconButtonProps) => {
  const { icon, className, ...otherProps } = props;
  return <Button icon={icon} {...otherProps} small />;
};

export default IconButton;
