
// create a function last word capital of the sentence

const reverseTitleCase = (sentence) => {
    let lowerCase = sentence.toLowerCase()          //sentence change lowercase
    let covertArr = lowerCase.split(" ")            //and then convert to array

    for(let word of covertArr){
        let first = word[word.length - 1].toUpperCase()         // last word capital using length-1
        let second = word.slice(0, word.length - 1)             // last word leave remaing part on the slice
        let final =  second + first;                            //and now add
        console.log(final)
    }

}
console.log(reverseTitleCase("hello there how are you"))        