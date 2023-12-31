import { ChangeEvent } from 'react';
import { Column } from 'App/DataSourceConstructor/schemas';
import { ClassesProp } from 'App/utils/classes-prop';
import { GetExcludedFieldsOf } from 'App/utils/type-filters';
import { actionCreators, PickActionCreators } from 'store/action-creators';
import { PickStates } from 'store/models/State';
import { Variable } from 'types';

import { CheckedSelectProps } from '../../CheckedSelect/props';
import { VariableItemProps } from '../../VariableItem';
import { MutatorProps } from '../props';

import { EnumsPickerProps } from './EnumsPicker/props';
import { StringOperator } from './operators';
import { StringOperation } from './StringOperation';
import { StringMutatorClassKeys } from './styles';

export type StringMutatorOwnProps = MutatorProps;

export type StringMutatorStateProps = GetExcludedFieldsOf<
  Pick<StringOperation, 'type'>,
  StringOperation
> & {
  operation: StringOperation;
  enums: Column['enums'];
} & PickStates<'pickedVariables'>;

export type StringMutatorDispatchProps = PickActionCreators<'setOperation' | 'setPickedVariables'>;
const { setOperation, setPickedVariables } = actionCreators;
export const SMMapDispatchToProps: StringMutatorDispatchProps = {
  setOperation,
  setPickedVariables,
};

export type StringMutatorProps = StringMutatorOwnProps &
  StringMutatorStateProps &
  StringMutatorDispatchProps;

export interface StringMutatorHandlers {
  handleOperatorSelect: CheckedSelectProps<StringOperator>['onSelect'];
  handleOperandChange: (operands: string) => void;
  handleTextFieldChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleCaseSensitivityChange: () => void;
  handleVariableSelect: EnumsPickerProps['onVariableSelect'];
  handleVariableClick: VariableItemProps['onVariableClick'];
}

export type StringMutatorViewProps = StringMutatorOwnProps &
  StringMutatorStateProps &
  StringMutatorHandlers &
  ClassesProp<StringMutatorClassKeys>;
