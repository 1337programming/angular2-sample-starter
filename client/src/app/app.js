require('es6-shim');
require('./boot.ts');

if (module.hot) {
  module.hot.accept();
}
