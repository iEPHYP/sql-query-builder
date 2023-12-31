import * as React from 'react';
import { connect } from 'react-redux';
import { State } from 'store/models/State';

import { NearDateOperation } from './SwitchDateOperands/DateOperandsComponents/NearDate/model';
import {
  DateMutatorDispatchProps,
  DateMutatorOwnProps,
  DateMutatorProps,
  DateMutatorStateProps,
  DateMutatorViewProps,
  DMMapDispatchToProps,
} from './props';
import { getDateOperationVia } from './utils';
import { DateMutator as View } from './view';

export const DateMutator = connect<
  DateMutatorStateProps,
  DateMutatorDispatchProps,
  DateMutatorOwnProps,
  State
>(({ operation }) => {
  const dateOperation = operation.type === 'Date' ? operation : new NearDateOperation();
  const { operator } = dateOperation;

  return {
    operator,
    operation: dateOperation,
  };
}, DMMapDispatchToProps)(
  class extends React.Component<DateMutatorProps> {
    public handleOperatorSelect: DateMutatorViewProps['handleSelect'] = (operator) => {
      const { operation, setOperation, setPickedVariables } = this.props;

      if (operation.operator !== operator) {
        setOperation(getDateOperationVia(operator));
        setPickedVariables(null);
      }
    };

    public render() {
      return <View handleSelect={this.handleOperatorSelect} {...this.props} />;
    }
  }
);
