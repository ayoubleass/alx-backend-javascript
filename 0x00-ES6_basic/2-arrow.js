export default function getNeighborhoodsList() {

  this.addNeighborhood = (newNeighborhood) => {
    return ['SOMA', 'Union Square'].concat(newNeighborhood);
  };
}

