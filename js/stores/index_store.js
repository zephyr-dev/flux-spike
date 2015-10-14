var AppDispatcher = require('../dispatcher/app_dispatcher');
var appConstants = require('../constants/app_constants');
var objectAssign = require('object-assign');
var EventEmitter = require('events');
var mockServer = require('../../mock_server.js');

var _store = {
  list: mockServer.index()
};

var indexStore = objectAssign({}, EventEmitter.prototype, {
  getList: function() {
    return _store.list;
  },

  addChangeListener: function(cb) {
    this.on(appConstants.CHANGE_EVENT, cb);
  },
  addItem: function(item) {
    var oldItems = this.getList();
    var newItems = oldItems.concat(item);
    _store.list = newItems;
  }
});

module.exports = indexStore;
