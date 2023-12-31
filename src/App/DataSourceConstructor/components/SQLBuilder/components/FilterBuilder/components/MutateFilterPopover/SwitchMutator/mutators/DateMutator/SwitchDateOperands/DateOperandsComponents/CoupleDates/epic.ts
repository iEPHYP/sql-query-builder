import { emitEmptyAction } from 'App/DataSourceConstructor/components/SQLBuilder/redux/action-creators';
import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { raiseGlobalError } from 'store/global-error/action';
import { Epic } from 'store/models/Epic';

import {
  changeCanSaveFilterState,
  ChangeCanSaveFilterStateAction,
} from '../../../../../../redux/can-save-filter/action';

import { CoupleDateOperation } from './model';

export const coupleDatesVariablesValidityWatcherEpic: Epic<ChangeCanSaveFilterStateAction> = (
  action$,
  state$
) =>
  action$.pipe(
    ofType<ChangeCanSaveFilterStateAction>('CHANGE_CAN_SAVE_FILTER_STATE'),
    map(() => {
      const { canSaveFilter, operation, pickedVariables } = state$.value;

      if (canSaveFilter && operation instanceof CoupleDateOperation) {
        for (let i = 0; i < operation.operands.length; i++) {
          const singleDateOperands = operation.operands[i];

          if (
            singleDateOperands.dateType === 'Variable date' &&
            pickedVariables instanceof Array &&
            !pickedVariables[i]
          ) {
            return changeCanSaveFilterState(false);
          }
        }
      }

      return emitEmptyAction();
    }),
    catchError((err) => {
      console.error(err && err.xhr && err.xhr.response);

      return of(
        raiseGlobalError("Couldn't resolve multiple variables validity on date between operator")
      );
    })
  );
