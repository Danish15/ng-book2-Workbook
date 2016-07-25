import { SampleProductAppPage } from './app.po';

describe('sample-product-app App', function() {
  let page: SampleProductAppPage;

  beforeEach(() => {
    page = new SampleProductAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
