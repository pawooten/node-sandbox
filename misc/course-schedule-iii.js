/**
 * @param {number[][]} courses
 * @return {number}
 */
 var scheduleCourse = function(courses) {
    // Determine the highest number of courses that can be taken (and completed).
    // User may start a course whenever they please, but must not be enrolled in more than two courses simultaneously.
    // It may be useful to sort the courses in order from the course which must be completed the earliest to the course whose deadline is furthest away.
    // Perhaps recursive: find the best schedule prior to the last deadline, prior to the 2nd to last deadline, etc. 

    // Sort the course list by deadline
};