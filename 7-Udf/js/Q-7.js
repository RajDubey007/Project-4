convert = (fah) => {
    let a;
    a = (fah - 32) / 1.8;
    return a;
}

fah = 70;
let ce = convert(fah);

document.querySelector("h2").innerHTML = ce;



