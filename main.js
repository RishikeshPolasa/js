let a = () => {
  const arr[] = [1, 2, 3];
  return arr.reduce((acc, ele) => acc + ele, 0);
};
let b = 5;
let c = a + b;
console.log(c);

//first changes
function sum(a,b){
    return a+b;
}

const res=sum(2,5);
console.log(res);
