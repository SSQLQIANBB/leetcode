/*
 * @lc app=leetcode.cn id=62 lang=javascript
 * @lcpr version=30100
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(x, y) {
  if (x === 1 || y === 1) return 1;
  
  const m = x - 1, n = y - 1;
  const arr = new Array(x).fill(new Array(y).fill(0));

  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      if (i === 0 || j === 0) arr[i][j] = 1;
      else {
        arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
      }
    }
  }
  
  return arr[m][n]
};

// @lc code=end



/*
// @lcpr case=start
// 3\n7\n
// @lcpr case=end

// @lcpr case=start
// 3\n2\n
// @lcpr case=end

// @lcpr case=start
// 7\n3\n
// @lcpr case=end

// @lcpr case=start
// 3\n3\n
// @lcpr case=end

 */

