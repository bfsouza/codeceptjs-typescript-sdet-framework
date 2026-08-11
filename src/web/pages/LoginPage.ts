import { BasePage } from './BasePage';

const I: any = inject('I');

class LoginPage extends BasePage {
  constructor() {
    super('/');
  }

  seeLoginForm() {
    I.see('Login', 'h1');
    I.seeElement('#email');
    I.seeElement('#password');
    I.see('Entrar', 'button');
    I.see('Cadastre-se', 'a');
  }
}

export = new LoginPage();
