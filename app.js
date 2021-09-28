let dateOfBirth = document.querySelector('#date-of-birth');

let luckyNum = document.querySelector('#lucky-number');

let checkBtn = document.querySelector('#checkbtn');

let output = document.querySelector('#output-text');
function comparision(sum, luckyNum){
        if(sum%luckyNum == 0){
            output.innerText = "WOO!!!! YOUR BIRTHDATE IS LUCKY";
        }else{
            output.innerText = "SORRY!!! YOUR BIRTHDATE IS NOT LUCKY, BUT DON'T GO WITH THIS IT'S UPTO YOU TO MAKE EVERYDAY LUCKY AND HAPPY."
        }

}


function checkNumberHandler(){
    const dob = dateOfBirth.value;

    const sum = convertNumber(dob);

    comparision(sum, luckyNum.value);
    if(dob <= 0){
        output.innerText = "ENTER A VALID NUMBER";
    }
}

function convertNumber(dob){
    dob = dob.replaceAll('-','');
    let calc = 0;

        for (let i=0; i<dob.length; i++){
            calc = calc + Number(dob.charAt(i))
        }

    return calc;
}

checkBtn.addEventListener('click', checkNumberHandler)
    