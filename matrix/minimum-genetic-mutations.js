/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
 var minMutation = function(start, end, bank) {
    // Return the minimum number of mutations needed to mutate from start to end, return -1 if there is no such mutation.

    const keeper = { record: Number.MAX_VALUE, target: end, bank: new Set(bank), visitedMutations: new Set() };
    mutate(start, 0, keeper);
    if (keeper.record === Number.MAX_VALUE) {
        return -1;
    }
    return keeper.record;
};

const mutate = (current, mutationCount, keeper) => {
    keeper.visitedMutations.add(current);
    // Does our current mutation match the target?
    if (current === keeper.target) {
        // We've reached the target. Did we get here faster than previously?
        keeper.record = Math.min(keeper.record, mutationCount);
    }
    let mutation;
    let currentGenes = current.split(''), length = currentGenes.length;
    for (let index = 0; index < length; index++) {
        currentGenes = current.split('');
        switch (currentGenes[index]) {
            case 'A':
                // This gene is A, so only mutate to C, G and T
                for (const newGene of ['C', 'G', 'T']) {
                    currentGenes[index] = newGene;
                    mutation = currentGenes.join('');
                    if (keeper.bank.has(mutation) && !keeper.visitedMutations.has(mutation)) {
                        // This mutation is valid and hasn't been visited yet!
                        mutate(mutation, mutationCount + 1, keeper);
                    }    
                }
                break;
            case 'C':
                // This gene is C, so only mutate to A, G and T
                for (const newGene of ['A', 'G', 'T']) {
                    currentGenes[index] = newGene;
                    mutation = currentGenes.join('');
                    if (keeper.bank.has(mutation) && !keeper.visitedMutations.has(mutation)) {
                        // This mutation is valid and hasn't been visited yet!
                        mutate(mutation, mutationCount + 1, keeper);
                    }    
                }
                break;
            case 'G':
                // This gene is G, so only mutate to A, C and T
                for (const newGene of ['A', 'C', 'T']) {
                    currentGenes[index] = newGene;
                    mutation = currentGenes.join('');
                    if (keeper.bank.has(mutation) && !keeper.visitedMutations.has(mutation)) {
                        // This mutation is valid and hasn't been visited yet!
                        mutate(mutation, mutationCount + 1, keeper);
                    }    
                }
                break;
            case 'T':
                // This gene is T, so only mutate to A, C, and G
                for (const newGene of ['A', 'C', 'G']) {
                    currentGenes[index] = newGene;
                    mutation = currentGenes.join('');
                    if (keeper.bank.has(mutation) && !keeper.visitedMutations.has(mutation)) {
                        // This mutation is valid and hasn't been visited yet!
                        mutate(mutation, mutationCount + 1, keeper);
                    }    
                }
                break;
        }
    }
};

const start = "AACCGGTT", end = "AACCGGTA", bank = ["AACCGGTA"];
const result = minMutation(start, end, bank);
console.log('!');