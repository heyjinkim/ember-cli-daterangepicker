/* jshint node: true */

module.exports = {
  normalizeEntityName: function() {},
  
  afterInstall: function() {
    return this.addBowerPackagesToProject([
      { name: 'bootstrap-daterangepicker' },
      { name: 'ember-cli-moment-shim' },
      { name: 'moment' },
      { name: 'moment-timezone' }
    ]);
  }
};
