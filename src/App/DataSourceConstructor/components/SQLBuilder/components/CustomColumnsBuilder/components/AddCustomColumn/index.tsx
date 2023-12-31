import * as React from 'react';
import { connect } from 'react-redux';
import { State } from 'store/models/State';

import { WithPopoverManagement } from '../../../common/WithPopoverManagement';

import {
  AddCustomColumnDispatchProps,
  AddCustomColumnProps,
  AddCustomColumnStateProps,
  AGMapDispatchToProps,
} from './props';
import { AddCustomColumn as View } from './view';

export const AddCustomColumn = connect<
  AddCustomColumnStateProps,
  AddCustomColumnDispatchProps,
  {},
  State
>(
  ({ customColumns }) => ({
    customColumns,
  }),
  AGMapDispatchToProps
)(
  class extends React.Component<AddCustomColumnProps> {
    public static ViewWithPopoverManagement = WithPopoverManagement(View);

    public render() {
      return <AddCustomColumn.ViewWithPopoverManagement {...this.props} />;
    }
  }
);
