import * as React from 'react';
import { withStyles } from '@material-ui/core';

import { SQLGeneratorViewProps } from './props';
import { sqlGeneratorStyles as styles } from './styles';

export const SQLGenerator = withStyles(styles)((({ sqlQuery, classes: { root, title, query } }) => (
  <div className={root}>
    <span className={title}>SQL Query for this question</span>
    <div className={query}>{sqlQuery}</div>
  </div>
)) as React.FC<SQLGeneratorViewProps>);
