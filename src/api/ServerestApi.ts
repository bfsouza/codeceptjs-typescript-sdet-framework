import { ServerestUser, LoginCredentials } from './ApiTypes';

const I: any = inject('I');

class ServerestApi {
  async listUsers() {
    return I.sendGetRequest('/usuarios');
  }

  async listProducts() {
    return I.sendGetRequest('/produtos');
  }

  async listCarts() {
    return I.sendGetRequest('/carrinhos');
  }

  async registerUser(user: ServerestUser) {
    return I.sendPostRequest('/usuarios', user);
  }

  async login(credentials: LoginCredentials) {
    return I.sendPostRequest('/login', credentials);
  }
}

export = new ServerestApi();
