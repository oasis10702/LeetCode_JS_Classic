// Given an array of meeting time intervals consisting of start and end
// times [s1, e1], [s2, e2], ... , determine if a person could attend all meetings.
// ---------------------------
// canAttendMeetings([[0, 30], [5, 10], [15, 20]]) --> false
// canAttendMeetings([[7, 10], [2, 4]]) --> true

const canAttendMeetings = (intervals) => {
  const starts = [];
  const ends = [];

  // Fill up starts and ends
  for (let i = 0; i < intervals.length; i++) {
    const subArray = intervals[i];
  }
};

module.exports = canAttendMeetings;
