import { AttComponentsPage } from './app.po';

describe('att-components App', () => {
  let page: AttComponentsPage;

  beforeEach(() => {
    page = new AttComponentsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
