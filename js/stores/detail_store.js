var AppDispatcher = require('../dispatcher/app_dispatcher');
var appConstants = require('../constants/app_constants');
var objectAssign = require('object-assign');
var EventEmitter = require('events');
var mockServer = require('../../mock_server.js');

var _store = {
  currentItem: mockServer.show("0"),
  itemCache: {}
};

var detailStore = objectAssign({}, EventEmitter.prototype, {
  currentItem: function() {
    return _store.currentItem;
  },

  selectItem: function(data) {
    var id = data.id;
    var currentItem = this.currentItem();

    // cache removed item
    _store.itemCache[currentItem.id] = currentItem;

    // check cache for new item
    cachedItem = _store.itemCache[id];
    if(cachedItem) {
      _store.currentItem = cachedItem;
    } else {
      var newItem = mockServer.show(id);
      _store.currentItem = newItem;
    }
  },

  addChangeListener: function(cb) {
    this.on(appConstants.CHANGE_EVENT, cb);
  }
});

AppDispatcher.register(function(payload) {
  var action = payload.action;
  switch(action.actionType) {
    case appConstants.SELECT_ITEM:
      detailStore.selectItem(action.data);
      detailStore.emit(appConstants.CHANGE_EVENT);
      break;
    default:
      throw "Unrecognized action type: " + action.actionType;
  }
});

module.exports = detailStore;
