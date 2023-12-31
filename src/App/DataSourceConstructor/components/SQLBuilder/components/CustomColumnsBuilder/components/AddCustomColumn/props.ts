import { actionCreators, PickActionCreators } from 'store/action-creators';
import { PickStates } from 'store/models/State';

import { PopoverManagerProps } from '../../../common/WithPopoverManagement';

export type AddCustomColumnOwnProps = PopoverManagerProps;

export type AddCustomColumnStateProps = PickStates<'customColumns'>;

export type AddCustomColumnDispatchProps = PickActionCreators<'addCustomColumn'>;

export const AGMapDispatchToProps: AddCustomColumnDispatchProps = {
  addCustomColumn: actionCreators.addCustomColumn,
};

export type AddCustomColumnProps = AddCustomColumnStateProps & AddCustomColumnDispatchProps;

export type AddCustomColumnViewProps = AddCustomColumnOwnProps &
  AddCustomColumnStateProps &
  AddCustomColumnDispatchProps;
