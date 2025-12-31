var permute = function(nums) {
    const result = [];
    const used = new Array(nums.length).fill(false);

    function backtrack(path) {
        // If a full permutation is formed
        if (path.length === nums.length) {
            result.push([...path]); // copy
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;

            // Choose
            used[i] = true;
            path.push(nums[i]);

            // Explore
            backtrack(path);

            // Un-choose (backtrack)
            path.pop();
            used[i] = false;
        }
    }

    backtrack([]);
    return result;
};
