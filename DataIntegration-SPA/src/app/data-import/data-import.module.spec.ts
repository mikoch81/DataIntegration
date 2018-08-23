import { DataImportModule } from './data-import.module';

describe('DataImportModule', () => {
  let dataImportModule: DataImportModule;

  beforeEach(() => {
    dataImportModule = new DataImportModule();
  });

  it('should create an instance', () => {
    expect(dataImportModule).toBeTruthy();
  });
});
