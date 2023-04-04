const eraseOverlapIntervals = (intervals) => {
  if (intervals.length === 0) return 0;

  let count = 0;

  intervals.sort((a, b) => a[0] - b[0]);

  let end = intervals[0][1];
};

module.exports = eraseOverlapIntervals;
