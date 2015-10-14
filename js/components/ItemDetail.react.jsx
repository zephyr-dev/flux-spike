var React = require('react');

var ItemDetail = React.createClass({
  render: function() {
    return(
      <section>
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.description}</p>
      </section>
    )
  }
});

module.exports = ItemDetail;
