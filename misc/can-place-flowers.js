/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
 var canPlaceFlowers = function(flowerbed, n) {
     if (n === 0) {
         return true;
     }
     // handle the special case of a one plot flowerbed which is empty and only one plot was requested.
    if (flowerbed.length === 1 && n === 1) {
        return flowerbed[0] === 0;
    }
  // some of the plots are planted, some are not. flowers cannot be planted in adjacent plots
  // return true if there are n or more plots available to plant in without violating then no-adjacent plots rule.

  let availablePlots = 0, index = 0;
  // handle the edge cases of the first and last plot
  if (flowerbed[0] === 0 && flowerbed[1] === 0) {
      // The first plot is available to plant. Increment the counter and mark it as occupied.
      availablePlots += 1;      
      flowerbed[0] = 1;
      // The 3rd plot should be the next to examine, since we can't plant next to the plot we just occupied.
      index = 2;
  }
  if (flowerbed[flowerbed.length - 1] === 0 && flowerbed[flowerbed.length - 2] === 0) {
      // The last plot is available to plant. Increment the counter and mark it as occupied.
      availablePlots += 1;
      flowerbed[flowerbed.length - 1] = 1;
  }
  // iterate over the flowerbed looking for available plots until we count enough to satisfy the n request or reach the end of the flowerbed 
  while (index < flowerbed.length - 2 && availablePlots < n) {
      if (flowerbed[index] === 0 && flowerbed[index - 1] === 0 && flowerbed[index + 1] === 0 ) {
          // This plot is available to plant because it is unoccupied and so are its left and right neighbors.
          availablePlots += 1;
          flowerbed[index] = 1;
          index += 1;
      }
      index += 1;
  }
  return availablePlots >= n;
};
const flowerbed = [0,0,1,0,0], n = 1;
const result = canPlaceFlowers(flowerbed, n);
console.log('!');