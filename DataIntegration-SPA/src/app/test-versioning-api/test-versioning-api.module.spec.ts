import { TestVersioningAPIModule } from './test-versioning-api.module';

describe('TestVersioningAPIModule', () => {
  let testVersioningAPIModule: TestVersioningAPIModule;

  beforeEach(() => {
    testVersioningAPIModule = new TestVersioningAPIModule();
  });

  it('should create an instance', () => {
    expect(testVersioningAPIModule).toBeTruthy();
  });
});
