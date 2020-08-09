import { FETCH } from '../fetch';
import ordersRoutes from '../routes/orders';

export default {
  async getOrders() {
    const response = await FETCH('get', ordersRoutes.getOrders);
    return response;
  },
};
