import { FETCH } from '../fetch';
import ordersRoutes from '../routes/orders';

/**
 * All setup of services to external API
 */
export default {
  async getOrders() {
    const response = await FETCH('get', ordersRoutes.getOrders);
    return response;
  },
};
