module.exports = {
  servers: {
    one: {
      // TODO: set host address, username, and authentication method
      host: '40.67.211.11',
      username: 'doganbirol13',
      // pem: './path/to/pem'
      password: '7cd8VVvv7cd8VVvv'
      // or neither for authenticate from ssh-agent
    }
  },

  app: {
    // TODO: change app name and path
    name: 'testpanoramajlltur2',
    path: '.',

    servers: {
      one: {},
    },

    buildOptions: {
      serverOnly: true,
    },

    env: {
      // TODO: Change to your app's url
      // If you are using ssl, it needs to start with https://
      PORT: 80,
      ROOT_URL: 'http://testpanoramajlltur2.westeurope.cloudapp.azure.com',
      MONGO_URL: 'mongodb://doganbirol13:7cd8VVvv@ds263837.mlab.com:63837/heroku_ddzblm8n'
    },

    docker: {
      // change to 'abernix/meteord:base' if your app is using Meteor 1.4 - 1.5
      image: 'abernix/meteord:node-8.4.0-base',
    },

    // Show progress bar while uploading bundle to server
    // You might need to disable it on CI servers
    enableUploadProgressBar: true
  }


  // (Optional)
  // Use the proxy to setup ssl or to route requests to the correct
  // app when there are several apps

  // proxy: {
  //   domains: 'mywebsite.com,www.mywebsite.com',

  //   ssl: {
  //     // Enable Let's Encrypt
  //     letsEncryptEmail: 'email@domain.com'
  //   }
  // }
};
