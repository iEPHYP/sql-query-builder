import * as React from 'react';
import { Typography, withStyles } from '@material-ui/core';
import { ClassesProp } from 'App/utils/classes-prop';

import { VariableItem } from '../../../../../MutateFilterPopover/SwitchMutator/VariableItem';
import { Filter } from '../../../../model';

import { SingleOperandViewClassKeys, singleOperandViewStyles } from './styles';

export type SingleOperandViewProps = {
  operand: string | number;
  variable: Filter['variables'];
} & ClassesProp<SingleOperandViewClassKeys>;

export const SingleOperandView = withStyles(singleOperandViewStyles)((({
  operand,
  variable,
  classes,
}) => {
  const operandStringified = String(operand);

  return (
    <>
      {variable && !(variable instanceof Array) ? (
        <VariableItem variable={variable} />
      ) : (
        <div className={classes.root}>
          <Typography className={classes.text}>{operandStringified}</Typography>
        </div>
      )}
    </>
  );
}) as React.FC<SingleOperandViewProps>);
