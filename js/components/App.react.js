var React = require('react');
var indexStore = require('../stores/index_store.js');
var detailStore = require('../stores/detail_store.js')
var appActions = require('../actions/app_actions.js');

var template = require('../templates/main_template.jsx')

var App = React.createClass({
  getInitialState: function() {
    return({ 
      list: indexStore.getList(),
      currentItem: detailStore.currentItem()
    })
  },
  componentDidMount: function() {
    indexStore.addChangeListener(this._onChange);
    detailStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    indexStore.removeChangeListener(this._onChange);
    detailStore.addChangeListener(this._onChange);
  },
  render: function() {
    var args = {
      list: this.state.list,
      item: this.state.currentItem,
      select: this.handleSelect,
      update: this.updateCurrentItemDescription
    }

    return(template(args));
  },

  handleSelect: function(id) {
    appActions.selectItem(id);
  },
  updateCurrentItemDescription: function(description) {
    appActions.updateCurrentItemDescription(description);
  },
  _onChange: function() {
    this.setState({
      list: indexStore.getList(),
      currentItem: detailStore.currentItem()
    });
  }
});

module.exports = App;
