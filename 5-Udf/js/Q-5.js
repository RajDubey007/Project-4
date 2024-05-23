
ans = () => {
    let area;
    area = (b * b * (4 * a * c)) / (2 * a);
    return area;
}
let a = 40;
let b = 20;
let c = 60;

let area = ans(a, b, c);
document.querySelector("h1").innerHTML = area;



