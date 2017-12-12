import { DvpWebPage } from './app.po';

describe('dvp-web App', function() {
  let page: DvpWebPage;

  beforeEach(() => {
    page = new DvpWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
