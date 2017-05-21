const env = process.env.NODE_ENV;
const common = {
  port: 8880,
  jwtSecret: 'Z7pp7Lgn5FEKeX2QfGOqwe0k0uCZNX9RLuW7yzAL',
};
const config = {
  develop: {
    mongodb: {
      host: '127.0.0.1',
      database: 'example'
    },
    redis: {
      host: '127.0.0.1',
      port: '6379'
    }
  },
  production: {
    mongodb: {
      host: '127.0.0.1',
      database: 'example-production'
    },
    redis: {
      host: '127.0.0.1',
      port: '6379',
      db: null
    }
  },
  test: {
    mongodb: {
      host: '127.0.0.1',
      database: 'example-test'
    },
    redis: {
      host: '127.0.0.1',
      port: '6379',
      db: null
    }
  }
};
export default Object.assign(common, config[env]);