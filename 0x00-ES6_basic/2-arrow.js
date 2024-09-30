export default function getNeighborhoodsList() {
  const self = this;
  self.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];
  self.addNeighborhood = (newNeighborhood) => {
    self.sanFranciscoNeighborhoods.push(newNeighborhood);
    return self.sanFranciscoNeighborhoods;
  };
}

