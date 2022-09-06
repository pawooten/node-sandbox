const getTree = function(values) {
    let treeLevels = [[{val: values.shift(), left: null, right: null }]];
    while (values.length > 0) {
        // The last level of the tree needs it's children attached, peak rather than pop
        let parentNodes = treeLevels.slice(-1)[0];
        let childNodes = [];
        parentNodes.forEach(parent => {
            let leftValue = values.shift(), rightValue = values.shift();
            if (leftValue != null) {
                leftValue = { val: leftValue, left: null, right: null };
                childNodes.push(leftValue);
            }
            parent.left = leftValue;

            if (rightValue != null) {
                rightValue = { val: rightValue, left: null, right: null };
                childNodes.push(rightValue);
            }
            parent.right = rightValue;
        });
        treeLevels.push(childNodes);
    }
    return treeLevels[0][0];
}

const getList = function(values) {
    const length = values.length;
    const root = { val: values[0], next: null };
    let current = root;
    for (let index = 1; index < length; index++) {
        current.next = { val: values[index], next: null };
        current = current.next;
    }
    return root;
}

const getNTree = function(values, n) {
    
    // The first value in the array becomes the root of the n-ary tree.
    let treeLevels = [[{val: values.shift(), children: [] }]];
    while (values.length > 0) {
        // Retrieve a reference to the nodes on the previous level of the tree.
        let parentNodes = treeLevels.slice(-1)[0];
        let childNodes = [], count, currentValue;

        // Iterate over the nodes of the previous level of the tree.
        parentNodes.forEach(parent => {
            if (parent === null) {
                // Skip to the next non-null parent.
                return;
            }

            // Retrieve up to n children (null counts as a child).
            count = n;
            while (count > 0) {
                currentValue = values.shift();
                if (currentValue === null) {
                    // Push null rather than { val: null, children: [] } when we encounter a null in the source values
                    parent.children.push(null);
                } else {
                    // Instantiate a node to represent this non-null value and push it to it's siblings.
                    parent.children.push({ val: currentValue, children: [] });
                }
                count--;
            }
            childNodes = childNodes.concat(parent.children);
        });
        treeLevels.push(childNodes);
    }
    return treeLevels[0][0];
}
