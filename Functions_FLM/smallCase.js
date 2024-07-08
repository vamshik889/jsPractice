    // Checking if the given character is uppercase or lowercase

    function checkCase(character) {
        if (character.length > 1) {      //checking the length of the character whether it is 1 or not
            console.log("Please enter a single character.");
            return;
        } 
        else if (typeof character === "string") {
            let upperCase = character.toUpperCase();
            let lowerCase = character.toLowerCase();

            if (character === upperCase && character === lowerCase) {   //check for special character
                console.log("Please enter an alphabet character, not a special character."); //Similarly, '@'.toUpperCase() is '@' and '@'.toLowerCase() is also '@'. Therefore, for non-alphabetic characters, the condition character === upperCase && character === lowerCase will be true.
                return;
            } else if (character !== upperCase){
                return true;  //returns true if the given character is small letter
            }
            else{
                return false; //returns false if the given character is capital letter
            }
        } else {
            console.log("Please enter a valid character.");
            return;
        }
    }

    let testChar = "L";
    let result = checkCase(testChar);

    if (result === true) {
        console.log("Given character is a small letter:", testChar);
    } else if (result === false) {
        console.log("Given character is a capital letter:", testChar);
    }
