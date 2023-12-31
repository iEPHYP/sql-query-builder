import { fireEvent, getByText, queryByText, wait } from 'react-testing-library';
import { expandMoreIconPlaceholder } from '__tests__/utils/mock-placeholders';
import { tablesMock } from 'App/DataSourceConstructor/redux/tables/tables.mock';
import { Column, Table } from 'App/DataSourceConstructor/schemas';
import { getByText$, regex } from 'App/DataSourceConstructor/test-utils/utils';

export const selectAColumn = (
  column: Column,
  {
    tables = tablesMock,
    expand = false,
    container = document.body,
  }: {
    tables?: Table[];
    expand?: boolean;
    container?: HTMLElement | null;
  } = {}
): {
  foreignColumns: Column[];
  foreignColumnsPanel: HTMLElement | null;
} => {
  if (expand) {
    const foreignColumnPanel = getByText$(
      container as HTMLElement,
      regex(`${column.name}.*${expandMoreIconPlaceholder}`)
    );

    const expandButton = queryByText(foreignColumnPanel, regex(expandMoreIconPlaceholder));
    if (!expandButton) {
      throw new Error(`column '${column.name}' is not foreign column`);
    }
    fireEvent.click(expandButton);

    if (!column.foreignTableName) {
      throw new Error(`column '${column.name}' is not foreign column`);
    }

    const table = tables.find((t) => t.name === column.foreignTableName);
    if (!table) {
      throw new Error(`table '${column.foreignTableName}' is not found`);
    }

    return {
      foreignColumnsPanel: foreignColumnPanel.nextElementSibling as HTMLElement,
      foreignColumns: table.columns,
    };
  }

  fireEvent.click(getByText(container as HTMLElement, column.name));

  return {
    foreignColumnsPanel: null,
    foreignColumns: [],
  };
};
