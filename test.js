function parseLog(entry) {
  const { author, timestamp } = /^(?<timestamp>\d+),(?<author>.+)$/.exec(
    entry,).groups;
  console.log(`${author} committed on ${new Date(
    parseInt(timestamp) * 1000,
  ).toLocaleString()}`);
}

parseLog("1560979912,Caroline"); // "Caroline committed on 6/19/2019, 5:31:52 PM"
