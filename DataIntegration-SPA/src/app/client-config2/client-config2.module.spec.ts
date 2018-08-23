import { ClientConfig2Module } from './client-config2.module';

describe('ClientConfig2Module', () => {
  let clientConfig2Module: ClientConfig2Module;

  beforeEach(() => {
    clientConfig2Module = new ClientConfig2Module();
  });

  it('should create an instance', () => {
    expect(clientConfig2Module).toBeTruthy();
  });
});
