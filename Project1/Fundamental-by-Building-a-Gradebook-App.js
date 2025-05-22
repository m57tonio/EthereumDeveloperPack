// PASO 1:
function getAverage(scores) {
  let sum=0;
  for (let i=0;i<scores.length;i++){
      sum+= scores[i];
  }

  let average=sum/scores.length;
  return average;
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));


// PASO 2
function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}
console.log(getGrade(100)); // A++

// Paso 3
function hasPassingGrade(score) {
  const grade=getGrade(score);
  return grade === "F" ? false : true;
}
console.log(hasPassingGrade(100)); // true

// PASO 4
function studentMsg(totalScores, studentScore) {
  const classAverage = getAverage(totalScores);
  const studentGrade = getGrade(studentScore);
  const passedMessage = studentGrade !== "F" ? "You passed the course." : "You failed the course.";
  
  return 'Class average: '+classAverage+'. Your grade: '+studentGrade+'. '+passedMessage;
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37)); 