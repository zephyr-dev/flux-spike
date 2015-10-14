var React = require('react');
var template = require('../templates/detail_template.jsx')

var ItemDetail = React.createClass({
  getInitialState: function() {
    return { description: this.props.item.description };
  },
  componentWillReceiveProps: function(newProps) {
    this.setState({ description: newProps.item.description });
  },
  render: function() {
    var args = {
      title: this.props.item.title,
      description: this.props.item.description,
      editableDescription: this.state.description,
      handleSubmit: this.handleSubmit,
      changeDescription: this.changeDescription
    }

    return(template(args));
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
