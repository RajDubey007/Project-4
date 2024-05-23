
triangle = (l, b) => {
    let area;
    area = (l * b) / 2
    return area;
}

let l = 18;
let b = 50;

let area = triangle(l , b);

document.getElementById("Triangle").innerHTML = area;