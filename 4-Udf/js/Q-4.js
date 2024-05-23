
rectangle = (l, h) => {
    let area;
    area = l * h
    return area;
}

let l = 12;
let h = 18;

let area = rectangle(l, h);

document.getElementById("rectangle").innerHTML = area;