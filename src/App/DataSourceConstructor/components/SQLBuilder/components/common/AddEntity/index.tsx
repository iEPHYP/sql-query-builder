import * as React from 'react';
import { Typography, withStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { ClassesProp } from 'App/utils/classes-prop';

import { AddEntityClassKeys, addEntityStyles } from './styles';

export type AddEntityProps = {
  showText?: boolean;
  reference: React.Ref<HTMLDivElement>;
  onClick: () => void;
} & ClassesProp<AddEntityClassKeys>;

export const AddEntity = withStyles(addEntityStyles)((({
  children,
  showText = true,
  onClick,
  reference,
  classes,
}) => {
  return (
    <div className={classes.root} onClick={onClick} ref={reference}>
      {showText && (
        <Typography variant="subtitle1" className={classes.text}>
          {children}
        </Typography>
      )}
      <AddIcon className={classes['add-icon']}>add</AddIcon>
    </div>
  );
}) as React.FC<AddEntityProps>);
