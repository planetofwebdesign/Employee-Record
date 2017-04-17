import { EmployeeRecordPage } from './app.po';

describe('employee-record App', () => {
  let page: EmployeeRecordPage;

  beforeEach(() => {
    page = new EmployeeRecordPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
