
  

//define function superbowlwin
function superbowlWin(array) {
    const winningYearObj = array.find(obj => obj.result === "W");
    //put conditional statement
    if (winningYearObj) {
        //return the winning year
      return winningYearObj.year;
    } else {
      return "undefined";
    }
  }
  //put an array
  const superBowlResults = [
    { year: "2021", result: "W" },
    { year: "2022", result: "undefined" },
    { year: "2023", result: "W" },
  ];
  
  const winningYear = superbowlWin(superBowlResults);
  console.log(winningYear);