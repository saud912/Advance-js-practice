// ******** Advance js Excercise ***********

          // Question 1
// Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

const array = [1,2,3,5,6,7,1,1,2,3,9,0,5,4,12,3,1,2,];
const sortedArray = array.sort(function(a,b){
  return a-b;
});

let emptyArray = [];
let newArray = [];

sortedArray.forEach((value,i)=>{
  if(value === sortedArray[i+1]){
    emptyArray.push(value);
  }else if (value === sortedArray[i-1]){
    emptyArray.push(value);
    newArray.push(emptyArray);
    emptyArray = [];
  }

});
console.log(newArray);




// Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]


const targetArray = [1,1,2,3,4,5,8,7,6,4,4,5];
const emptyTargetArray = [];

const check = ((array,target)=>{
  for(i=0; i<array.length;i++){
    for(j=i+1; j<array.length; j++){
      if(array[i] + array[j] === target){
        emptyTargetArray.push(array[i], array[j])
      }
    }
    return emptyTargetArray;
  }

});

console.log(check(targetArray,7));


// Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.


const convert = (color) => {

if(color.includes("#")){
      let hexInput = color.replace("#","");
      if(hexInput.length === 6) {
            const r = parseInt(hexInput.substr(0,2),16);
            const g = parseInt(hexInput.substr(2,2),16);
            const b = parseInt(hexInput.substr(4,2),16);

            const rgb = "rgb(" + r + ", " + g + ", " + b + ")";

            return rgb;
        }else{
            return "Uupss!! Wrong HEX color format. Please try again. Start with #, and then enter six signs from: 0123456789abcdef, e.g. #1a67bd";
        }
  } else if(color.includes("rgb")){
          let rgbInput = color.replace("rgb(","").replace(")","").split(",");
          let hex = [];
          let rIn = parseInt(rgbInput[0]);
          let gIn = parseInt(rgbInput[1]);
          let bIn = parseInt(rgbInput[2]);
          if(rIn<=255 && rIn>=0 && gIn<=255 && gIn>=0 && bIn<=255 && bIn>=0){
              rIn = rIn.toString(16);
              gIn = gIn.toString(16);
              bIn = bIn.toString(16);

              hex = "#" + rIn + gIn + bIn;
              return hex;
          }else{
              return "Uupss!! Wrong RGB color format. Please try again. You need to use this format rgb(0,255,255) and numbers need to be from 0 to 255";
          }
    }else {
        alert("Wrong color format. Please enter RGB (e.g rgb(222,21,0)) or HEX (e.g. #ad98fe) color format.")
}

}

console.log(convert("#1a67bd"));
