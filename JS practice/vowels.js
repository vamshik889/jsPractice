//find the number of consonants in a sentence

const vowels = "aeiouAEIOU";

const consonants = (sentence)=>{
    let vowelsCount = 0;
    sentence = sentence.split(" ").join("");
    console.log(sentence)
    for(let i=0;i<sentence.length;i++){

        if(vowels.includes(sentence[i])){
            vowelsCount+=1;
        }
    }
    return sentence.length-vowelsCount;
}

let word = "i am a word "
const res = consonants(word);
console.log(res);