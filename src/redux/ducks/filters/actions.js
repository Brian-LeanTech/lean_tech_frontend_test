import * as types from './types';

export const filtersAdd = (data) => ({
  type: types.FILTERS_ADD,
  data,
});

export const filterDelete = (data) => ({
  type: types.FILTERS_DELETE,
  data,
});
