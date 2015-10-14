var _repo = [
  { id: "0", title: "Thing 0", description: "0. Mai pen lai, suai" },
  { id: "1", title: "Thing 1", description: "This is the first thing. It is very pretty." },
  { id: "2", title: "Thing Deux", description: "Ca c'est la chose seconde, c'est tres jolie." },
  { id: "3", title: "Thing Tres", description: "Este es la cosa segunda. Es muy bonita." },
  { id: "4", title: "Thing Ourfay", description: "Isthay isay ethay ourthfay ingthay. Itay isay eryvay ettypray." },
  { id: "5", title: "Thing Go", description: "Goban no mono desu. Totemo kirei desu ne?"}
]

var mockServer = {
  index: function() {
    var summarizedItems = _repo.map(function(item) {
      return { id: item.id, title: item.title }
    });
    return summarizedItems;
  },
  show: function(id) {
    var item = _repo.find(function(item) {
      return(item.id === id);
    })
    return item;
  }
}

module.exports = mockServer;


