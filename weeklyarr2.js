 const prompt = require('prompt-sync')();

grades = []

function addGrade(){
    let end = Number(prompt("How many grades would you like to add? "))

    for (i=0; i < end; i++){
    let input = Number(prompt("Enter grade as a percent. " ))
    grades.push(input)
    }
    return grades
}

function removeGrade(){
    let remove = Number(prompt(`Which grade to delete. \n ${grades}`))
    var resultIndex = grades.indexOf(remove)

    if (resultIndex !== -1) {
        let found = grades.splice(resultIndex, 1);
        return found
    }
    else {console.log("Grade does not exist")}
   }

function avgGrade(){
    let start = 0;
    for (const grade of grades){
        start = start + grade;
    }
    let avg = start/ grades.length
    return avg
}

function maxGrade(){
   let max = Math.max(...grades)
    return max
}


function menu(){
    while (true){
    let inp = Number(prompt(" Grade Manager  \n\n 1. Add Grade \n 2. Remove Grade \n 3. Calculate Avg \n 4. Max Grade \n 5. Show All Grades \n 6. Quit. "));
    
    if (inp === 6){
    console.log("===========Bye bye..");
    break;
    }
        
    if (inp === 5){
        for( let d = 0; d < grades.length; d++){
    console.log(`==========${d+1}. ${grades[d]}`) 
        }
    }

    else if (inp === 4){
        let max = maxGrade()
        console.log (`==========The highest score is ${max}`)
    }
    else if (inp === 3){
        let avg = avgGrade()
        console.log(`=========The class average is ${avg}`)
    }
    else if (inp === 2){
        let found = removeGrade()
        console.log(`===========Removed ${found} \n ${grades}`)}
    
    else if (inp === 1){
        addGrade()
        console.log(`==========Added.\n ${grades}`)
    }

    else {console.log(`==========Not an option \n ${inp}`)}
    }

}
menu()