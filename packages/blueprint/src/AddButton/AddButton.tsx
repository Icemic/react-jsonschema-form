import React from 'react';

import { AddButtonProps } from '@rjsf/core';

import { Button } from '@blueprintjs/core'

const AddButton: React.FC<AddButtonProps> = (props: any) => (
  <Button icon={'plus'} {...props} color="secondary" />
);

export default AddButton;
