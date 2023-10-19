
  
function superbowlWin(array) {
    const winningYearObj = array.find(obj => obj.result === "W");
    if (winningYearObj) {
      return winningYearObj.year;
    } else {
      return "undefined";
    }
  }
  const superBowlResults = [
    { year: "2021", result: "W" },
    { year: "2022", result: "undefined" },
    { year: "2023", result: "W" },
  ];
  
  const winningYear = superbowlWin(superBowlResults);
  console.log(winningYear);