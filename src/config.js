const env = process.env.NODE_ENV;
const common = {
  port: 8880,
  jwtSecret: 'Z7pp7Lgn5FEKeX2QfGOqwe0k0uCZNX9RLuW7yzAL'
};
const config = {
  develop: {
    mongodb: {
      host: '127.0.0.1',
      database: 'example'
    }
  },
  production: {
    mongodb: {
      host: '127.0.0.1',
      database: 'example-production'
    }
  },
  test: {
    mongodb: {
      host: '127.0.0.1',
      database: 'example-test'
    }
  }
};
export default Object.assign(common, config[env]);