let word = "Hello";
// let new_word = "";

// let i=0;
// let j = word.length-1;

// while(j>=0)
// {
//     new_word = new_word+word[j];
//     j--;
// }

// console.log(new_word); 

const output = word.split('').reduce((acc,curr) => {
    acc = curr+acc;
    return acc;
},"");

console.log(output);