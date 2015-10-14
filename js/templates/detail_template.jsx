var React = require('react');

var detailTemplate = function(args) {
  return(
    <section className="item-details">
      <h2>{args.title}</h2>
      <p>{args.description}</p>
      <textarea value={args.editableDescription}
        onKeyPress={args.handleSubmit}
        onChange={args.changeDescription}
        rows="4" cols="50"></textarea>
    </section>
  );
};

module.exports = detailTemplate;
