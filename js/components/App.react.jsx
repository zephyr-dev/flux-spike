var React = require('react');
var indexStore = require('../stores/index_store.js');
var detailStore = require('../stores/detail_store.js')
var appActions = require('../actions/app_actions.js');

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
    var items = this.state.list;
    return(
      <ul>
        {items.map(function(item) {
          return(
            <li key={item.id} onClick={this.handleClick.bind(this, item.id)}>
              {item.title}
            </li>
          );
        }, this)}
      </ul>
    )
  },

  handleClick: function(id) {
    console.log(id);
  },
  _onChange: function() {
    this.setState({
      list: appStore.getList(),
      currentItem: detailStore.currentItem()
    });
  }
});

module.exports = App;
