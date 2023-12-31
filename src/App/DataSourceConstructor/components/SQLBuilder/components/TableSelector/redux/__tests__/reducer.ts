import { Table } from 'App/DataSourceConstructor/schemas';
import { testInitialAndCurrentState } from 'App/DataSourceConstructor/test-utils/store/reducers';

import { selectTable } from '../action';
import { selectedTable as reducer } from '../reducer';

describe('selectedTable reducer', () => {
  testInitialAndCurrentState(reducer, null, new Table());

  it('should return table instance when appropriate action provided', () => {
    const table = new Table();

    expect(reducer(null, selectTable(table))).toEqual(table);
  });
});
