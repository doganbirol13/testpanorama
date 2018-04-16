import { WebApp } from 'meteor/webapp';

// Listen to incoming HTTP requests, can only be used on the server
WebApp.rawConnectHandlers.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    return next();
  });

  // Listen to incoming HTTP requests, can only be used on the server