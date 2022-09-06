
var MyCalendar = function() {
    this.events = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    // If the event described by the start and end parameters doesn't result in a double booking,
    // add it to our collection of events and return true, otherwise false.

    // Do any of the registered events conflict with candidate event?
    for (let event of this.events) {
        if (event[0] < end && event[1] > start) {
            // This event's start precedes the end time of the candidate event, which indicates this event starts prior to the candidate event ending.
            // Furthermore, this event's end time follows the start time of the candidate event.

            // This event starts before the candidate event ends, and this event ends after the candidate event starts, which means a double booking.
            return false;
        }
    }
    this.events.push([start, end]);
    return true;
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */

 let myCalendar = new MyCalendar();
 let result = myCalendar.book(10, 20); // return True
 result = myCalendar.book(15, 25); // return False, It can not be booked because time 15 is already booked by another event.
 result = myCalendar.book(20, 30); 
 console.log('!');