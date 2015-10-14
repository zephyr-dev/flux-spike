var React = require('react');
var ItemIndex = require('../components/ItemIndex.react.js');
var ItemDetail = require('../components/ItemDetail.react.js');

var mainTemplate = function(args) {
  return(
    <div>
      <h1>OUR WEIRD REACT SPIKE</h1>
      <div className="main-container">
        <div className="row">
          <div className="col-md-3">
            <ItemIndex list={args.list} select={args.select} />
          </div>
          <div className="col-md-9">
            <ItemDetail item={args.item} update={args.update} />
          </div>
        </div>
      </div>
    </div>
  )
};

module.exports = mainTemplate;
