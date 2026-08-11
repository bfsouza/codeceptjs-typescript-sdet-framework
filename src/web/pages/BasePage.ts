const I: any = inject('I');

export abstract class BasePage {
  constructor(public readonly route: string) {}

  open() {
    return I.amOnPage(this.route);
  }
}
