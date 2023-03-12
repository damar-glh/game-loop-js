let maximum = parseInt(prompt('Enter the maximum value!'));
while(!maximum){
    maximum = parseInt(prompt('Enter the maximum value!'));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let gues = parseInt(prompt('Fill in your first guess!'));
let attempts = 1;

while( parseInt(gues) !== targetNum){
    attempts++;
    if (gues > targetNum){
        gues = prompt('Too high! guess again:');
    } else{
        gues = prompt('Too low! Guess again :');
    }
}

alert(`Congratulations, you guessed right!! , With as many trials ${attempts} time`);
