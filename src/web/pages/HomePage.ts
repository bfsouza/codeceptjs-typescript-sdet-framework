import { BasePage } from './BasePage';

const I: any = inject('I');

class HomePage extends BasePage {
  constructor() {
    super('/');
  }

  verifyTitle() {
    return I.seeInTitle('Front - ServeRest');
  }
}

export = new HomePage();
