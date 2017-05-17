import { HinataPage } from './app.po';

describe('hinata App', function() {
  let page: HinataPage;

  beforeEach(() => {
    page = new HinataPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
