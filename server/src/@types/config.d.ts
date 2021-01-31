import config from 'config';

interface IExtendedConfig {
  jwt: {
    secret: string;
  };
  db: {
    user: string;
    password: string;
    db: string;
  };
  github: {
    clientId: string;
    secret: string;
  };
  server: {
    port: number;
  };
}

declare module 'config' {
  interface IConfig extends IExtendedConfig {}
}
