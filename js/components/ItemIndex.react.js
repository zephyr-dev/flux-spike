var React = require('react');
var template = require('../templates/index_template.rt')

var ItemIndex = React.createClass({
  render:  template,
  handleClick: function(id) {
    this.props.select(id);
  }
});

module.exports = ItemIndex;
