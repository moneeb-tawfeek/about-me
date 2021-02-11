
'use strict';

let score = 0;
function getUsername() {
    let userName = prompt("what's your name?");
    return userName;
}
function greetTheUser(userName) {
    return alert('welcome ' + userName + ' nice to meet you, we are going to have fun together and play a guessing game')
}
////////////////////////////////////////////////////////////////////////////
function askQuestionOne() {
    let work = prompt('is i am a pharmacist ?');
    work = work.toLowerCase();
    if ((work === 'yes') || (work === 'y')) {
        alert('good jop, that is true')
        return score++;
    } else if ((work === 'no') || (work === 'n')) {
        return alert('your answer is false ');
    }

}

function askQuestionTwo() {
    let food = prompt('is my favorites food mansaf  ?').toLowerCase();
    if ((food === 'yes') || (food === 'y')) {
        alert('good jop, that is true');
        return score++;
    } else if ((food === 'no') || (food === 'n')) {
        return alert('your answer is false  ');
    }
}

function askQuestionThree() {

    let graduation = prompt('is i graduated from university of jordan  ?').toLowerCase();
    if ((graduation === 'yes') || (graduation === 'y')) {
        return alert('your answer is false');
    } else if ((graduation === 'no') || (graduation === 'n')) {
        alert(' good jop, that is true ')
        return score++;
    }
}

function askQuestionFour() {
    let single = prompt('is i am single  ?').toLowerCase();
    if ((single === 'yes') || (single === 'y')) {
        alert(' that is true');
        return score++;
    } else if ((single === 'no') || (single === 'n')) {
        return alert('your answer is false  ')
    }
}





function askQuestionFive() {

    let ages = alert('let\'s play a guessing game, you have to guess celebrities  ages   ')
    let age1 = prompt('how old is mo salah  ?');
    let ans = true;

    for (let i = 0; i < 4; i = i + 1) {
        if ((age1 < 30) && (age1 > 25)) {
            alert(' that is closly true , he is in the 3ed decad');
            score++
            ans = true
            break;
        } else {
            age1 = prompt('your answer is false ,guess it again  ')
            ans = false

        }

    }
    if (ans == false) {
        alert('the true answer is 28');
    }
    return score;
}




function askQuestionSix() {
    let bag = ['phone', 'charger', 'tissue', 'key', 'spare facemask', 'perfume'];

    for (let i = 0; i < 6; i = i + 1) {
        let ans1 = prompt('guess what i have in my bag')
        // bag[0]
        // bag[1]
        //bag[2]

        for (let j = 0; j < bag.length; j++) {
            console.log(bag[j]);
            console.log(ans1);

            if (ans1 === bag[j]) {
                console.log('inside if');
                alert('that is true and here is all thing in my bag :phone', 'charger', 'tissue', 'key', 'spare facemask', 'perfume')
                ans1 = true
                score++;
                break;



            }



        }
        if (ans1 === true) {
            break;

        }

    }
    return score;
}

let userName = getUsername();
greetTheUser(userName);
askQuestionOne();
askQuestionTwo();
askQuestionThree();
askQuestionFour();
askQuestionFive();
askQuestionSix();

alert('your score is ' + score + ' of 6')



