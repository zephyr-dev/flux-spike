var index_templateRT = function () {
    function repeatItem1(item, itemIndex) {
        return React.createElement('li', {
            'key': item.id,
            'onClick': this.handleClick.bind(this, item.id)
        }, item.title);
    }
    return React.createElement.apply(this, [
        'ul',
        { 'className': 'item-index' },
        _.map(this.props.list, repeatItem1.bind(this))
    ]);
};