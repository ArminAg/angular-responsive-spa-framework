import { AngularResponsiveSpaFrameworkPage } from './app.po';

describe('angular-responsive-spa-framework App', () => {
  let page: AngularResponsiveSpaFrameworkPage;

  beforeEach(() => {
    page = new AngularResponsiveSpaFrameworkPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
