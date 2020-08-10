import * as types from './types';

export const filtersUpdate = (data) => ({
  type: types.FILTERS_UPDATE,
  data,
});

export const filterDelete = (data) => ({
  type: types.FILTERS_DELETE_ALL,
  data,
});
