
// create a function cheak the minimum number

function minNumber(num){
    let minNum = num[0]
    
    for(let i of num){
      if(minNum < num[i])               //cheak condition
        minNum = num[i]                 //set the value of minNum
     }
    
  return minNum;
  }
  let numbers = [100, 15, 54, 20,24]     //numbers array
  console.log(minNumber(numbers))