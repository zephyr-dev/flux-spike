var React = require('react');
var template = require('../templates/index_template.jsx')

var ItemIndex = React.createClass({
  render: function() {
    var that = this;
    var args = { 
      items: this.props.list,
      handleClickConstructor: function (id) {
        return that.handleClick.bind(that, id);
      }
    }

    return(template(args));

  },

  handleClick: function(id) {
    this.props.select(id);
  }
});

module.exports = ItemIndex;
