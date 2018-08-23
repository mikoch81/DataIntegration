import { TestVersioningLIBModule } from './test-versioning-lib.module';

describe('TestVersioningLIBModule', () => {
  let testVersioningLIBModule: TestVersioningLIBModule;

  beforeEach(() => {
    testVersioningLIBModule = new TestVersioningLIBModule();
  });

  it('should create an instance', () => {
    expect(testVersioningLIBModule).toBeTruthy();
  });
});
