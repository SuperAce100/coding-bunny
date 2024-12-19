---
id: 1
title: Two Sum
dueDate: 2024-12-20
date: 2024-12-20
description: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
---

## Problem Statement

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order. 

**Example 1:**

```javascript
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

**Example 2:**

```javascript
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

**Example 3:**

```javascript
Input: nums = [3,3], target = 6
Output: [0,1]
```

**Constraints:**
- `2 <= nums.length <= 104`
- `-109 <= nums[i] <= 109`
- `-109 <= target <= 109`
- Only one valid answer exists.

**Follow-up:** Can you come up with an algorithm that is less than O(n²) time complexity?

**Solution:**

```js
function twoSum(nums: number[], target: number): number[] {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        
        map.set(nums[i], i);
    }
    
    return []; // No solution found
}
```
