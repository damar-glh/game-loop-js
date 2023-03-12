let maximum = parseInt(prompt('Masukan nilai maksimal!'));
while(!maximum){
    maximum = parseInt(prompt('Masukan nilai maksimal!'));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let gues = parseInt(prompt('Isi tebakan pertamamu!'));
let attempts = 1;

while( parseInt(gues) !== targetNum){
    attempts++;
    if (gues > targetNum){
        gues = prompt('Terlalu tinggi! tebak lagi : ');
    } else{
        gues = prompt('Terlalu rendah! Tebak lagi : ');
    }
}

alert(`Selamat tebakan anda benar!! , Dengan percobaan sebanyak ${attempts} kali`);
