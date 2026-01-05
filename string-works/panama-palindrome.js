//panama palindrome

function ispalindromeword(word) {

    let newword = word.toLowerCase().replaceAll(" ", "")


    let reversedstring = ""


    for (let i = newword.length - 1; i >= 0; i--) {

        reversedstring += newword[i]
    }

    return reversedstring == newword


}
console.log(ispalindromeword("A MAN A plan a canal panama"));


