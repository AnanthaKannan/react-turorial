const words = ["stick", "most", "key", "vein", "yes",
 "package", "tube", "target", "elm", "spy"];
const arr = [
  ["P", "S", "U", "W", "H", "A", "T", "S"],
  ["L", "P", "A", "C", "K", "A", "G", "E"],
  ["N", "Y", "O", "L", "R", "D", "V", "L"],
  ["F", "I", "N", "G", "E", "Z", "B", "M"],
  ["I", "R", "E", "H", "Q", "N", "J", "O"],
  ["A", "T", "B", "V", "G", "Y", "E", "S"],
  ["J", "D", "U", "W", "U", "E", "S", "T"],
  ["P", "S", "T", "I", "C", "K", "E", "Y"]
];

let lenth = arr[0].length;
let lerftCross;
for(let i=0; i < lenth; i++){
    // console.log("mydata", i);
    Array(i+1).fill('').forEach((val, index) =>{
        console.log(i, index)
    });
}

let vartical = []
arr[0].forEach((arra, index) =>{
  arr.forEach((inarr) =>{
    vartical.push(inarr[index]);
  });
});
// console.log(conertString(vartical))

let horizontal = [];
arr.forEach((arra) =>{
   horizontal = conertString(arr)
  });
//  console.log(horizontal)

function conertString(arra){
 return arra.toString().replace(/,/g,'');
}