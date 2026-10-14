const prompt = require('prompt-sync')();



// function twenty(){
//     var ques = [2*4, 3*2, 3*7,1+2, 9+8, 5+2, 9-2, 6-5, 8-2, 3*2, 8*8, 4*2, 48/6, 4/2, 32/4, 2*3, 5-3, 6+6, 9-3, 1+1]
//     for(i=0; i<=ques.length; i++)
//         {ans = `$ques[i]`}
//     console.log(ans)
// }
pickGame();

function pickGame() {
    let choice = Number(prompt("Pick a game mode: \n 1. Max score \n 2. 3 Out"));

    if (choice === 1) {
        maxScore();
    } else if (choice === 2) {
        threeOut();
    } else {
        console.log("Please pick a valid game mode: \n 1. Max score \n 2. 3 Out");
        pickGame();
    }
}

// let math = easy(); med(); hard() ; pickDif(math)

function pickDif() {
    let choice = Number(prompt("Pick a difficulty mode: \n 1. Easy \n 2. Medium \n 3. Hard"));

    if (choice === 1) {
        return "easy";
    } else if (choice === 2) {
        return "med";
    } else if (choice === 3) {
        return "hard";
    } else {
        console.log("Please pick a valid difficulty mode: \n 1. Easy \n 2. Medium \n 3. Hard");
        pickDif();
    }
}

function maxScore() {
    let score = 0;
    let difficulty = pickDif();

    for (let i = 0; i < 21; i++) {
        let question;

        if (difficulty === "easy") {
            question = easy();
        } else if (difficulty === "med") {
            question = med();
        } else {
            question = hard();
        }

        let input = Number(prompt(question.equation));

        if (input === question.answer) {
            console.log("Correct! +10pts");
            score += 10;
        } else {
            console.log("Wrong. -5pts");
            score -= 5;
        }
    }

    console.log('Your final score is ' + score);
}

function threeOut() {
    let lives = 3;
    let score = 0;
    let difficulty = pickDif();

    for (let i = 0; i < 21 && lives > 0; i++) {
        let question;

        if (difficulty === "easy") {
            question = easy();
        } else if (difficulty === "med") {
            question = med();
        } else {
            question = hard();
        }

        let input = Number(prompt(question.equation));

        if (input === question.answer) {
            console.log("Correct! +10pts");
            score += 10;
        } else {
            lives -= 1;
            console.log("Wrong. You lost a life. " + lives + " lives remain.");
        }
    }

    console.log('Your final score is ' + score);
}

function easy() {
    let a = oneDig();
    let op = twoOper();
    let b = oneDig();
    let equation = a + op + b;
    let answer = eval(equation);

    return { equation, answer };
}

function med() {
    let place = {
        a: twoDig(),
        op: twoOper(),
        b: twoDig()
    };

    let placer = {
        a: oneDig(),
        op: randOper(),
        b: oneDig()
    };

    let chosen = Math.random() > 0.5 ? place : placer;
    let equation = chosen.a + chosen.op + chosen.b;
    let answer = eval(equation);

    return { equation, answer };
}

function hard() {
    let place = {
        a: threeDig(),
        op: twoOper(),
        b: threeDig()
    };

    let placer = {
        a: twoDig(),
        op: randOper(),
        b: twoDig()
    };

    let chosen = Math.random() > 0.5 ? place : placer;
    let equation = chosen.a + chosen.op + chosen.b;
    let answer = eval(equation);

    return { equation, answer };
}

function oneDig (){
    return Math.floor(Math.random() * 10);
}


function twoDig (){
    return Math.floor(Math.random() * 101) ;
}

function threeDig (){
    return Math.floor(Math.random() * 400) + 99 ;
}


function randOper() {
    let oper = ['+', '-', '*', '/'];
    let index = Math.floor(Math.random() * oper.length);
    return oper[index];
}

function twoOper() {
    let oper = ['+', '-'];
    let index = Math.floor(Math.random() * oper.length);
    return oper[index];
}




//     let score = 0
//     var ques = ["2*4", "3*2", "3*7","1+2", "9+8", "5+2", "9-2", "6-5", "8-2", "3*2", "8*8", "4*2", "48/6", "4/2", "32/4", "2*3", "5-3", "6+6", "9-3", "1+1"]
//     var sol = [8, 6, 21, 3, 17, 7, 7, 1, 6, 6, 64, 8, 8, 2, 8, 6, 2, 12, 6, 2]
//     for(let i=0; i<ques.length; i++){
//     let input = Number(prompt(ques[i]))
//     let ans = (sol[i])
//     if (input === 'skip')[console.log("Skip..")]
//     if (input == ans){
//         console.log("Correct! +10pts")
//         score = score + 10

//     }
//         else {console.log("Wrong. -5pts")}
//         score = score - 5
//     } 
//     console.log('Your final score is ' + score)
// }

// function threeOut(){
//     let lives = 3
//     let score = 0
//     var ques = ["2*4", "3*2", "3*7","1+2", "9+8", "5+2", "9-2", "6-5", "8-2", "3*2", "8*8", "4*2", "48/6", "4/2", "32/4", "2*3", "5-3", "6+6", "9-3", "1+1"]
//     var sol = [8, 6, 21, 3, 17, 7, 7, 1, 6, 6, 64, 8, 8, 2, 8, 6, 2, 12, 6, 2]
//     for(let i=0; i<ques.length; i++){
//     let input = Number(prompt(ques[i]))
//     let ans = (sol[i])
//     if (input == ans){
//         console.log("Correct! +10pts")
//         score = score + 10
//     }
        
//         else {
//             lives = lives - 1
//             console.log("Wrong. You lost a life. "+ lives +" lives remain.")}
//         if (lives === 0){break}
//         }
//     console.log('Your final score is ' + score)