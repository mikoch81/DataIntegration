import { DataSetConfigModule } from './data-set-config.module';

describe('DataSetConfigModule', () => {
  let dataSetConfigModule: DataSetConfigModule;

  beforeEach(() => {
    dataSetConfigModule = new DataSetConfigModule();
  });

  it('should create an instance', () => {
    expect(dataSetConfigModule).toBeTruthy();
  });
});
