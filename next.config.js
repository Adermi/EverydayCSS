const withLess = require('next-with-less');

module.exports = withLess({
  lessLoaderOptions: {},
  lessOptions: {
    javascriptEnabled: true,
  },
});
