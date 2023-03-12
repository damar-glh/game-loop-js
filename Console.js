let maximum = parseInt(prompt('Masukan nilai maksimal!'));
while(!maximum){
    maximum = parseInt(prompt('Masukan nilai maksimal!'));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);
