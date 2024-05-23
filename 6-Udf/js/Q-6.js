ans = () => {
    let area;
    area = a * a + 2 * a * b + b * b;
    return area;
}

let a = 80;
let b = 30;

let area = ans(a, b);
document.querySelector("h2").innerHTML = area;



