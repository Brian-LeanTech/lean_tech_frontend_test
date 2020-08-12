// eslint-disable-next-line import/prefer-default-export
export const update = (state, id, city) => {
  const newData = state.data.slice();
  newData[newData.findIndex((order) => order.shipmentId === id)].origin.city = city;
  return {
    ...state,
    data: newData,
  };
};
