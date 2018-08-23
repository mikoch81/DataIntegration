import { TestVersioningModule } from './test-versioning.module';

describe('TestVersioningModule', () => {
  let testVersioningModule: TestVersioningModule;

  beforeEach(() => {
    testVersioningModule = new TestVersioningModule();
  });

  it('should create an instance', () => {
    expect(testVersioningModule).toBeTruthy();
  });
});
