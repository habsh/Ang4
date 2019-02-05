import { TestJenkins1Page } from './app.po';

describe('test-jenkins1 App', function() {
  let page: TestJenkins1Page;

  beforeEach(() => {
    page = new TestJenkins1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
