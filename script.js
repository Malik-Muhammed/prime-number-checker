
/***************************************************
|========== VARIABLE DECLARATION====================|
| ⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇   |
****************************************************/

let answerBox = document.getElementsByClassName('answerBox')[0];

let checkerContainer = document.getElementsByClassName('checkerContainer')[0];

let number = document.querySelector('#numberBox');

// array for holding the factors
let factors = [];





/***************************************************************
|==========ATTACHING CLICK EVENT TO THE TWO BUTTONS===========|
|    ⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇   |
****************************************************************/

document.querySelector("#checkBtn").addEventListener("click", function (){
    setTimeout(checkButton,1200);
}) 


document.querySelector("#clearBtn").addEventListener("click", clearButton);


/***************************************************************
|==========DEFINING FUNCTIONS FOR THE TWO BUTTONS==============|
|    ⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇   |
****************************************************************/

function checkButton()  { 

    

    // Extracting the number entered by the user and assigning to the variable num:

    // number checker validator
    let isPrime = true;

    let num = Number(number.value)

    console.log(num)

    // Checking if the number entered is 1:
    if (num == 1) {
    
        answerBox.innerHTML = `<p><strong>${num}</strong> is neither a prime nor a composite number</p>`

    }

    // if the number entered is greater than 1 and it is not decimal:
    else if  ( ( (num > 1) && ( (num - Math.floor(num)) == 0 ) ) ) {
        /******************************
        The for loop on this line serves as a determinant.
        HOW:
        NB: A number can only be divided by itself or 
        a particular number that is less than or equal to its half.
        💭The initializer was set to 2 because the goal is any number greater than 1.

        💭The condition statement was written in a way such that the initializer 
        gets compared with the half of the number entered by the user 
        since the greatest factor of a number apart from itself is its half.

        💭This will make the number of iterations and load on the system reduces.

        ⭕CASE 1: if the number entered by the user is 2  i.e., num = 2
        🔌condition testing : 2<=2/2 ➡❌ (false)
        Block of code to be executed if condition testing was true won't be executed.
        The next if after the "for loop" get executed since the condition in the if happens to be a truthy value

        ⭕⭕CASE 2: if the number entered by the user is 4  i.e., num = 4
        🔌condition testing : 2<=4/2 ➡✔(true)
        Block of code to be executed get executed:
        ⏹ The condition in the if statement happens to be truthy, 
        so false is then assigned to variable isPrime and no further iteration because of break keyword.

        ⏹ The else statement gets executed since the condition is false:
        🟫The for loop is for the purpose of getting the factors beneath why the number is not prime.


        ******************************/ 
        for (let i = 2; i<=num/2; i++ ) {
            
            if ( num % i == 0 ) {
               

                isPrime = false;
                console.log(num % i)
                break;
            }

        }
        

        if (isPrime == true) {
            console.log(isPrime)
            answerBox.innerHTML = `<p><strong>${num}</strong> is a Prime Number and its only two factors are 1 and <strong>${num}</strong> </p>`
        
        } 
        
        else {
            console.log(isPrime)
            for (let i = 1; i<=num/2; i++) {
                
                if (num % i == 0) {

                    factors.push(i);

                }
            }

            let editedFactors = factors.join(", ");

            answerBox.innerHTML = `<p><strong>${num}</strong> is  a Composite Number and its factors are <strong>${editedFactors} and <strong>${num}</strong> </p>`
            
            factors = [];
        }
    }


    // if the number entered is greater than zero and it is decimal
    // OR
    // if the number entered is greater than 1 and it is decimal
    else if ( ( (num > 1) && ( (num - Math.floor(num)) !== 0 ) ) ||  

        ( ( (num > 0) && (num < 1) ) && ( (num - Math.floor(num)) !== 0 ) )  )  {

        answerBox.innerHTML = `<p>${num} is a decimal number</p>`
    }

    // if the number entered is zero or nothing was entered
    else if  ((num == 0) || (num == "") ) {
        answerBox.innerHTML = `<p>Please, enter a whole number greater than zero.</p>` 
    }

    // if it was not number that was entered
    else if (isNaN(num)) {
        answerBox.innerHTML = `<p>This is not a number</p>`
    }

   else  {
    answerBox.innerHTML = `<p>${num} is a negative number</p>`
   }
}


function clearButton () {
   
    document.querySelector('#numberBox').value = '';
    answerBox.innerHTML = '';
  
}


/***************************************************************
|======================GRATITUDE===============================|
|    🙌🏾🙌🏾🙌🏾🙌🏾🙌🏾🙌🏾🙌🏾🙌🏾🙌🏾🙌🏾🙌🏾🙌🏾 🙏🏾🙏🏾🙏🏾🙏🏾🙏🏾 🙏🏾🙏🏾🙏🏾🙏🏾🙏🏾
****************************************************************/
/****************************************************************
My creator for everything.
Mr. Abisoye for the support in all angles.
BOSS TOBI for your bossy touches on how was meant to get the value and clearing the array for another entry.
GRAND DEV for making believe I can do it.
GIT LORD for making me believe my lines of code are falling in place to bring this small effort of mine into reality.

**************************************************************/