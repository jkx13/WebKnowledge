## When specified, "proxy" in package.json must be a string.Instead, the type of "proxy" was "object".

setupProxy.js
```
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );
};
```