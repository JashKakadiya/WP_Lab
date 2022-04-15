let person = prompt("Enter String", ""); 

let finalString = person.replaceAll(' ', ''); 

document.write(validatePalin(`${finalString}`)); 

 

function validatePalin(str) {   

    

 

    for (let i = 0; i < str.length / 2; i++) {   

   

        if (str[i] !== str[str.length - 1 - i]) {   

            return( 'It is not a palindrome');   

        }   

    }   

    return( 'It is a palindrome');   

} 

 