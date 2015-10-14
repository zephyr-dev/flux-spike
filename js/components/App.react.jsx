var React = require('react');
var indexStore = require('../stores/index_store.js');
var detailStore = require('../stores/detail_store.js')
var appActions = require('../actions/app_actions.js');

var ItemIndex = require('./ItemIndex.react.jsx');
var ItemDetail = require('./ItemDetail.react.jsx');

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
    return(
      <div>
        <ItemIndex list={this.state.list} select={this.handleSelect} />
        <ItemDetail item={this.state.currentItem} />
      </div>
    )
  },

  handleSelect: function(id) {
    appActions.selectItem(id);
  },
  _onChange: function() {
    this.setState({
      list: indexStore.getList(),
      currentItem: detailStore.currentItem()
    });
  }
});

module.exports = App;
