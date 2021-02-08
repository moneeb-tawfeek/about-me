
let userName = prompt("what's your name?");
console.log(userName);
alert('welcome ' + userName + ' nice to meet you, we are going to have fun together and play a guessing game')

let work = prompt('is i am a pharmacist ?');
work = work.toLowerCase();
if ((work === 'yes') || (work === 'y')) {
    alert('good jop, that is true');
} else if ((work === 'no') || (work === 'n')) {
    alert('your answer is false ')
}
console.log(work);

let food = prompt('is my favorites food mansaf  ?').toLowerCase();
if ((food === 'yes') || (food === 'y')) {
    alert('good jop, that is true');
} else if ((food === 'no') || (food === 'n')) {
    alert('your answer is false  ')
}
console.log(food);

let graduation = prompt('is i graduated from university of jordan  ?').toLowerCase();
if ((graduation === 'yes') || (graduation === 'y')) {
    alert('your answer is false');
} else if ((graduation === 'no') || (graduation === 'n')) {
    alert(' good jop, that is true ')
}
console.log(graduation);

let single = prompt('is i am single  ?').toLowerCase();
if ((single === 'yes') || (single === 'y')) {
    alert(' that is true');
} else if ((single === 'no') || (single === 'n')) {
    alert('your answer is false  ')
}
console.log(single);