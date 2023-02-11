var RecentCounter = function() {
    this.requests = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.requests.push(t);
    let intervalStart = t - 3000;
    return this.requests.filter(requestTime => requestTime >= intervalStart ).length;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

var obj = new RecentCounter();
var result = obj.ping(1);
result = obj.ping(100);
result = obj.ping(3001);
result = obj.ping(3002);

console.log('!');
