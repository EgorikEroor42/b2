let a = 1;
let b = 2;
let c = true;
d = a + b;
if (a === 1 && b === 2 && c){
    console.log("Hell Yes");
    console.log("Hell No");
}
let e = "Hello"
switch (e){
    case "Hello":console.log("Hello");break;
    default:console.log("Bye");
}
let f = [5, "Yes", 0, true];
f[3]=false;
console.log(f[3]);
let g = [[5, true, "42"], [9, false, "Op"],[0, true, "d"]];
console.log(g[0],g[1]);
for (let g = 0; g < 10; g++){
    console.log(g);
}
for (let i = 0; i < 50; i+=2){
    if(i===26)
        break;
    console.log(i);
}