import { ServerConfigModule } from './server-config.module';

describe('ServerConfigModule', () => {
  let serverConfigModule: ServerConfigModule;

  beforeEach(() => {
    serverConfigModule = new ServerConfigModule();
  });

  it('should create an instance', () => {
    expect(serverConfigModule).toBeTruthy();
  });
});
