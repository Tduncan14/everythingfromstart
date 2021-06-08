

 export function isPalindrome(word: string) : boolean{


    const lowerCaseWord = word.toLowerCase()



   const reversedWord = lowerCaseWord.split('').reverse().join('')



   return lowerCaseWord === reversedWord

}



console.log(isPalindrome('level'));

console.log(isPalindrome('anna'));
