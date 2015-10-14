var React = require('react');
var template = require('../templates/detail_template.rt')

var ItemDetail = React.createClass({
  render: template,

  getInitialState: function() {
    return { description: this.props.item.description };
  },
  componentWillReceiveProps: function(newProps) {
    this.setState({ description: newProps.item.description });
  },

  handleSubmit: function(e) {
    if(e.key === 'Enter') {
      e.preventDefault();
      this.props.update(this.state.description);
    }
  },

  changeDescription: function(e) {
    this.setState({ description: e.currentTarget.value });
  }
});

module.exports = ItemDetail;
