import * as React from 'react';
import { withStyles } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import RemoveIcon from '@material-ui/icons/Clear';
import { ClassesProp } from 'App/utils/classes-prop';

import { RemoveButtonClassKeys, removeButtonStyles } from './styles';

export type RemoveButtonProps = {
  onClick: SvgIconProps['onClick'];
} & ClassesProp<RemoveButtonClassKeys>;

export const RemoveButton = withStyles(removeButtonStyles)((({ onClick, classes: { root } }) => {
  return <RemoveIcon className={root} onClick={onClick} />;
}) as React.FC<RemoveButtonProps>);
