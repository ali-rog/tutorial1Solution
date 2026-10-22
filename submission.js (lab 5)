//Tutorial 4
//Task 1: Variable Scope

function summarizeGrades(assignments) {
  let sum = 0;
  const count = assignments.length;
 
  const LATE_PENALTY_PER_DAY = 20;

  //delares a vairable for the last assignemt to be updated in the loop
  let assignment;

  for (let i = 0; i < count; i++) {
    assignment = assignments[i];
    let grade = assignment.grade;

    if (assignment.daysLate > 0) {
      const latePenalty = assignment.daysLate * LATE_PENALTY_PER_DAY;
      grade = grade - latePenalty >= 0 ? grade - latePenalty: 0;
    }
    sum += grade;
  }
  
  const lastGraded = assignment;
  return { average: sum/count, lastGraded: lastGraded.id};
}
 

//Task 2: Closures
let letterCounter = function (letter, ignoreCapitalization) {
    
    let counter = function(word){
        let target = letter

        if (ignoreCapitalization){
            word = word.toLowerCase()
            target = target.toLowerCase()
        }

        return word.split(target).length - 1
    }

    return counter
}


function makeCharacter(characterName){
   
   let farmingSkill = 0
   let fishingSkill = 0

    
    let levelUp = function (skill){
        if (skill === "farming" && farmingSkill < 10){
            farmingSkill++
        }
        if (skill === "fishing" && fishingSkill < 10){
            fishingSkill++
        }
    }

  
    let showSkill = function (skill){
        if (skill === "farming"){
            return farmingSkill
        }
        if (skill === "fishing"){
            return fishingSkill
        }
    }

    return {
        name: characterName,
        levelUp,
        showSkill
    }
}
