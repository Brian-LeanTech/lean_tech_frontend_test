import { FETCH } from '../fetch';
import authRoutes from '../routes/routeExample';

class GetLogin {
  async foo(payload) {
    this.response = await FETCH('get', authRoutes.login, payload);
    return this.response;
  }
}

export default GetLogin;
