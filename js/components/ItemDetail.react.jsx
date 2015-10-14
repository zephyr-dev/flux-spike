var React = require('react');

var ItemDetail = React.createClass({
  getInitialState: function() {
    return { description: this.props.item.description };
  },
  componentWillReceiveProps: function(newProps) {
    this.setState({ description: newProps.item.description });
  },
  render: function() {
    return(
      <section className="item-details">
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.description}</p>
        <textarea value={this.state.description}
          onKeyPress={this.handleSubmit}
          onChange={this.changeDescription}
          rows="4" cols="50"></textarea>
      </section>
    )
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
