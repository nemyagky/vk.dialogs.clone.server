// const PRODUCTION = process.env.NODE_ENV === 'production';
const config = {
   mongodb: {
      url: "mongodb://localhost:27017/vk-server"
   },
   server: {
      // tslint:disable-next-line: no-bitwise
      port: +process.env.PORT | 3000,
      url: "localhost"
   }
};

export default config;
