import { Variable } from 'types';
import * as uuid from 'uuid';

import { ColumnBranch } from '../../../common/ColumnSelector/ColumnItem/SelectedColumn.models';
import { Operation } from '../MutateFilterPopover/Operation';

import { LogicOperator } from './components/LogicOperatorSwitch/logic-operators';

export type NullableVariable = Variable | null;

export class Filter {
  public id: string;
  public column: ColumnBranch;
  public operation: Operation;
  public logicOperator: LogicOperator = 'and';
  public openingBracketsCount = 0;
  public closingBracketsCount = 0;
  public variables: NullableVariable | [NullableVariable, NullableVariable];

  constructor(...inits: Partial<Filter>[]) {
    Object.assign(this, ...inits);

    if (!this.id) {
      this.id = uuid();
    }
  }
}
