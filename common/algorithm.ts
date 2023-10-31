/**
 * @param {number[]} sequence
 * @return {number}
 */
export interface RangeIndex {
    x1: number;
    x2: number;
}
export function findLengthOfLIS<T>(sequence: T[], callbackfn: (value: T) => any = (e) => e): RangeIndex {
    let nums = sequence;
    let dp = new Array(nums.length).fill(1);
    let longest = 1;
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (callbackfn(nums[j]) < callbackfn(nums[i])) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
                longest = Math.max(longest, dp[i]);
            }
        }
    }

    const res: RangeIndex = { x1: 0, x2: 1 }
    dp.forEach((d, i) => {
        if (d == longest) {
            res.x1 = i - longest;
            res.x2 = i;
        }
    });
    return res
};

export function profit(prices: number[] = [],
    cmp: (a: number, b: number) => boolean = (a, b) => a < b):RangeIndex {
    let left = 0; // Buy
    let right = 1; // sell
    let max_profit = 0;
    let res: RangeIndex = { x1: 0, x2: 1 }
    while (right < prices.length) {
        if (cmp(prices[left], prices[right])) {
            let profit = prices[right] - prices[left]; // our current profit
            if (cmp(max_profit, profit)) {
                res = { x1: left, x2: right };
                max_profit = profit;
            }
           
        } else {
            left = right;
        }
        right++;
    }
    return res;
};