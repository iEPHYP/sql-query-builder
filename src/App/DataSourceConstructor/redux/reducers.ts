import { ReducersMapObject } from 'redux';

import { SQLBuilderReducers } from '../components/SQLBuilder/redux/reducers';
import { SQLGeneratorReducers } from '../components/SQLGenerator/redux/reducer';

import { databaseSchema } from './database-schema/reducer';
import { tables } from './tables/reducer';
import { DataSourceConstructorState } from './state';

export const DataSourceConstructorReducers: ReducersMapObject<DataSourceConstructorState, any> = {
  databaseSchema,
  tables,
  ...SQLBuilderReducers,
  ...SQLGeneratorReducers,
};
