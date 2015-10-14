var AppDispatcher = require('../dispatcher/app_dispatcher');
var appConstants = require('../constants/app_constants');

var appActions = {
  addItem: function(item) {
    AppDispatcher.handleViewAction({
      actionType: appConstants.ADD_ITEM,
      data: item
    });
  }
  // functions trigger the dispatcher to handle certain actions
};

module.exports = appActions;
