


function ispangram(word) {



    let ispangram = true



    let alphabets = "abcdefghijklmnopqrstuvwxyz"


    for(let ch of alphabets) {
        if (word.indexOf(ch) == -1) {
            ispangram = false

            break
        }
    }

    return pangramword
}
    console.log(ispangram);