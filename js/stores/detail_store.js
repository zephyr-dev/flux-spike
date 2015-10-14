var AppDispatcher = require('../dispatcher/app_dispatcher');
var appConstants = require('../constants/app_constants');
var objectAssign = require('object-assign');
var EventEmitter = require('events');
var mockServer = require('../../mock_server.js');

var initialItem = mockServer.show(0);
var _store = {
  currentItem: initialItem,
  itemCache: {
    0: initialItem
  }
};

var detailStore = objectAssign({}, EventEmitter.prototype, {
  currentItem: function() {
    return _store.currentItem;
  },

  addChangeListener: function(cb) {
    this.on(appConstants.CHANGE_EVENT, cb);
  }
});

AppDispatcher.register(function(payload) {
  // var action = payload.action;
  // switch(action.actionType) {
    // case appConstants.ADD_ITEM:
      // detailStore.addItem(action.data);
      // detailStore.emit(appConstants.CHANGE_EVENT);
      // break;
    // default:
      // throw "Unrecognized action type: " + action.actionType;
  // }
});

module.exports = detailStore;
