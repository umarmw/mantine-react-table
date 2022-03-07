import { matchSorter } from 'match-sorter';
import { MRT_Row } from '.';

export const fuzzyFilterFN = (
  rows: MRT_Row[],
  id: string,
  filterValue: string | number,
) =>
  matchSorter(rows, filterValue.toString().trim(), {
    keys: [`values.${id}`],
    sorter: (rankedItems) => rankedItems,
  });

fuzzyFilterFN.autoRemove = (val: any) => !val;

export const containsFilterFN = (
  rows: MRT_Row[],
  id: string,
  filterValue: string | number,
) =>
  rows.filter((row) =>
    row.values[id]
      .toString()
      .toLowerCase()
      .trim()
      .includes(filterValue.toString().toLowerCase().trim()),
  );

containsFilterFN.autoRemove = (val: any) => !val;

export const startsWithFilterFN = (
  rows: MRT_Row[],
  id: string,
  filterValue: string | number,
) =>
  rows.filter((row) =>
    row.values[id]
      .toString()
      .toLowerCase()
      .trim()
      .startsWith(filterValue.toString().toLowerCase().trim()),
  );

startsWithFilterFN.autoRemove = (val: any) => !val;

export const endsWithFilterFN = (
  rows: MRT_Row[],
  id: string,
  filterValue: string | number,
) =>
  rows.filter((row) =>
    row.values[id]
      .toString()
      .toLowerCase()
      .trim()
      .endsWith(filterValue.toString().toLowerCase().trim()),
  );

endsWithFilterFN.autoRemove = (val: any) => !val;

export const equalsFilterFN = (
  rows: MRT_Row[],
  id: string,
  filterValue: string | number,
) =>
  rows.filter(
    (row) =>
      row.values[id].toString().toLowerCase().trim() ===
      filterValue.toString().toLowerCase().trim(),
  );

equalsFilterFN.autoRemove = (val: any) => !val;

export const notEqualsFilterFN = (
  rows: MRT_Row[],
  id: string,
  filterValue: string | number,
) =>
  rows.filter(
    (row) =>
      row.values[id].toString().toLowerCase().trim() !==
      filterValue.toString().toLowerCase().trim(),
  );

notEqualsFilterFN.autoRemove = (val: any) => !val;

export const emptyFilterFN = (
  rows: MRT_Row[],
  id: string,
  _filterValue: string | number,
) => rows.filter((row) => !row.values[id].toString().toLowerCase().trim());

emptyFilterFN.autoRemove = (val: any) => !val;

export const notEmptyFilterFN = (
  rows: MRT_Row[],
  id: string,
  _filterValue: string | number,
) => rows.filter((row) => !!row.values[id].toString().toLowerCase().trim());

notEmptyFilterFN.autoRemove = (val: any) => !val;

export const defaultFilterFNs = {
  contains: containsFilterFN,
  empty: emptyFilterFN,
  endsWith: endsWithFilterFN,
  equals: equalsFilterFN,
  fuzzy: fuzzyFilterFN,
  notEmpty: notEmptyFilterFN,
  notEquals: notEqualsFilterFN,
  startsWith: startsWithFilterFN,
};