function largestRectangleArea(heights) {    
    let mono_stack = [];
    let res = 0;
    heights.push(0);
    let n = heights.length;
    for(let i = 0; i < n; i++) {
        let v = heights[i];
        while(mono_stack.length !== 0 && heights[mono_stack[mono_stack.length-1]] > v) {
            let height = heights[mono_stack.pop()];
            let length = i;
            if(mono_stack.length !== 0) {
                length = i - mono_stack[mono_stack.length-1] - 1;
            }
            res = Math.max(res, height*length);
        }
        mono_stack.push(i);
    }
    return res;
};
const heights = [2,1,5,6,2,3];
const result = largestRectangleArea(heights);
console.log('!');