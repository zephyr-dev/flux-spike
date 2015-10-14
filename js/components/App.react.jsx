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
        <h1>OUR WEIRD REACT SPIKE</h1>
        <div className="main-container">
          <div className="row">
            <div className="col-md-3">
              <ItemIndex list={this.state.list} select={this.handleSelect} />
            </div>
            <div className="col-md-9">
              <ItemDetail item={this.state.currentItem}
                update={this.updateCurrentItemDescription} />
            </div>
          </div>
        </div>
      </div>
    )
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
