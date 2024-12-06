let input = "coding challenge one";
const vowels = ['a','e','i','o','u'];
let resultArray = [];
for(let i = 0;i < input.length;i++){
  //console.log(i);
  for(let j = 0;j < vowels.length;j++){
    //console.log(j);
    if(input[i] === vowels[j]){
      resultArray.push(input[i]);
      if(input[i] === vowels[1] || input[i] === vowels[4])
      resultArray.push(input[i]);
    }
  }
}
let resultString = resultArray.join();
console.log(resultString);