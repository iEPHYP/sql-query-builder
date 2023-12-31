import * as React from 'react';
import { connect } from 'react-redux';
import { State } from 'store/models/State';

import { setRowLimit } from './redux/action';
import {
  RowLimitBuilderDispatchProps,
  RowLimitBuilderProps,
  RowLimitBuilderStateProps,
  RowLimitBuilderViewProps as ViewProps,
} from './props';
import { RowLimitBuilder as View } from './view';

export const RowLimitBuilder = connect<
  RowLimitBuilderStateProps,
  RowLimitBuilderDispatchProps,
  {},
  State
>(
  ({ rowLimit }) => ({
    rowLimit,
  }),
  {
    setRowLimit,
  }
)(
  class extends React.Component<RowLimitBuilderProps> {
    public onRowLimitChange: ViewProps['onRowLimitChange'] = (rowLimit) => () => {
      this.props.setRowLimit(rowLimit);
    };

    public render() {
      return <View {...this.props} onRowLimitChange={this.onRowLimitChange} />;
    }
  }
);
