import { StyleRulesCallback } from '@material-ui/core';

export type NumberMutatorClassKeys =
  | 'root'
  | 'common-padding'
  | 'title-and-operator'
  | 'title'
  | 'operator'
  | 'mutator-action'
  | 'hr';

export const numberMutatorStyles: StyleRulesCallback<
  NumberMutatorClassKeys
> = (theme) => ({
  root: {
    border: '1px solid #EBECED',
    borderRadius: '5px'
  },
  'common-padding': {
    padding: 10
  },
  'title-and-operator': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    marginRight: 20
  },
  operator: {},
  'mutator-action': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '5px'
  },
  hr: {
    margin: '0px',
    background: '#EBECED',
    height: '1px',
    border: 'none'
  }
});
