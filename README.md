# permutations-in-js
This is the classic **Permutations** problem (LeetCode 46).
Since `nums.length ≤ 6`, we can safely use **backtracking**.

---

## ✅ Approach: Backtracking

We build permutations step by step:

1. Maintain a `path` (current permutation).
2. Use a `used` array to track which numbers are already included.
3. When `path.length === nums.length`, store a copy of `path`.
4. Try every unused number at each step, recurse, then backtrack.

---

## 🧠 Time & Space Complexity

* **Time:** `O(n × n!)` (number of permutations × copy cost)
* **Space:** `O(n)` recursion stack + result storage

---

## 💡 JavaScript Solution

```javascript
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
```

---

## 🔍 Example Walkthrough (nums = [1,2,3])

* Start with `[]`
* Pick `1` → `[1]`
* Pick `2` → `[1,2]`
* Pick `3` → `[1,2,3]` 
* Backtrack and continue → `[1,3,2]`, `[2,1,3]`, …

Final Output:

```
[
 [1,2,3],
 [1,3,2],
 [2,1,3],
 [2,3,1],
 [3,1,2],
 [3,2,1]
]
```

---



