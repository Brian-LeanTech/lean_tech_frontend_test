import ServiceExample from './services/ServiceExample';

class API {
  constructor() {
    this.exampleService = new ServiceExample();
  }
}

export default new API();
