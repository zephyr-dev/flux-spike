var React = require('react');

var ItemIndex = React.createClass({
  render: function() {
    var items = this.props.list;
    function listItemForItem(item) {
      return(
        <li key={item.id} onClick={this.handleClick.bind(this, item.id)}>
          {item.title}
        </li>
      );
    }

    return(
      <ul>{items.map(listItemForItem, this)}</ul>
    );
  },

  handleClick: function(id) {
    this.props.select(id);
  }
});

module.exports = ItemIndex;
