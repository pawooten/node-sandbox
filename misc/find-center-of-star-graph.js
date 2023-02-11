/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
  const firstLeft = edges[0][0], firstRight = edges[0][1], secondLeft = edges[1][0], secondRight = edges[1][1];
  if (firstLeft === secondLeft || firstLeft === secondRight) {
    return firstLeft;
  }  else {
    return firstRight;
  }
};

const  edges = [[1,2],[5,1],[1,3],[1,4]];
const result = findCenter(edges);
console.log('!');