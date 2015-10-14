var AppDispatcher = require('../dispatcher/app_dispatcher');
var appConstants = require('../constants/app_constants');

var appActions = {
  selectItem: function(id) {
    AppDispatcher.handleViewAction({
      actionType: appConstants.SELECT_ITEM,
      data: { id: id }
    });
  }
  // functions trigger the dispatcher to handle certain actions
};

module.exports = appActions;
