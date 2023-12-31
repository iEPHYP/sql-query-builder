import { ClassesProp } from 'App/utils/classes-prop';
import { actionCreators, PickActionCreators } from 'store/action-creators';

import { PopoverManagerProps } from '../../../common/WithPopoverManagement';

import { CustomColumn } from './model';
import { CustomColumnItemClassKeys } from './styles';

export interface CustomColumnItemOwnProps {
  customColumn: CustomColumn;
}

export type CustomColumnItemDispatchProps = PickActionCreators<
  'removeCustomColumn' | 'updateCustomColumn'
>;

export const GIMapDispatchToProps: CustomColumnItemDispatchProps = {
  removeCustomColumn: actionCreators.removeCustomColumn,
  updateCustomColumn: actionCreators.updateCustomColumn,
};

export type CustomColumnItemProps = CustomColumnItemOwnProps & CustomColumnItemDispatchProps;

export type CustomColumnItemViewProps = {
  handleCustomColumnRemoval: (id: CustomColumn['id']) => () => void;
} & CustomColumnItemOwnProps &
  PopoverManagerProps &
  PickActionCreators<'updateCustomColumn'> &
  ClassesProp<CustomColumnItemClassKeys>;
