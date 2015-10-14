var React = require('react');

var indexTemplate = function(args) {
  return(
    <ul className="item-index">
      {args.items.map(function(item) {
        return(
          <li key={item.id} onClick={args.handleClickConstructor(item.id)}>
            {item.title}
          </li>
        )
      })}
    </ul>
  );
};

module.exports = indexTemplate;
