const form = document.querySelector('form');
const button = document.querySelector('button');
let $day = document.getElementById('day');
let $month = document.getElementById('month');

button.addEventListener('click', getBirthday);
form.addEventListener('submit', getBirthday);


// Setting the date of my birthday
function getBirthday(ev) {
    ev.preventDefault();
    let myBirthday = {
        day: $day.value,
        month: $month.value
    };

    // Creating a date for today
    const today = new Date();
    let day = today.getDate(); // Extracting the value of the present day
    let month = today.getMonth(); // Extracting the value of the present month
    let year = today.getFullYear(); // extracting the value of the present year

    // Function that return 0 or 1 depending when was your birthday after or before of today
    function zeroOne() {
        if(myBirthday.month-1 == month && myBirthday.day >= day) {
            return 0;
        } else if (myBirthday.month-1 > month) {
            return 0;
        } else if(myBirthday.month-1 == month && myBirthday.day < day) {
            return 1;
        } else if(myBirthday.month-1 < month) {
            return 1;
        }
    }
    // Create a date of yout next birthday
    const nextBirthday = new Date(`${myBirthday.month} ${myBirthday.day}, ${today.getFullYear() + zeroOne()}`);

    // This function return the numbers of days depending the month
    function daysOfTheMonth(month) {
        if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
            return 31;
        } else if (month == 2) {
            return 28;
        } else {
            return 30;
        }
    }
    // Initialization of the day's counter
    let daysCounter = 0;
    
    for(let k = 0; k <= 1; k++){ // This is for years
        // Condition that reset the variable month
        if(k > 0){
            month = 0
        }
        for(let i = month+1; i <= 12; i++){ // This is for months
            month++;
            for( let j = day; j <= daysOfTheMonth(month); j++){  // this is for days of months          
                let newDay = new Date(`${i} ${j}, ${2021 + k}`); // creating a new day from today
                // Condition that reset the variable "day" when the month don't have any more days
                if(day == daysOfTheMonth(month)){
                    day = 0;
                }            
                // Condition to compare the new day with my birthday
                if(newDay.getDate() == nextBirthday.getDate() && newDay.getMonth() == nextBirthday.getMonth() && newDay.getFullYear() == nextBirthday.getFullYear()) {
                    if(daysCounter == 0) {
                        console.log('Congratulation today is your Birthday!!');
                    } else {
                        const container = document.querySelector('p');
                        container.innerHTML = `It's missing ${daysCounter} days for your Birthday!!!`
                        daysCounter = 0;
                    }
                }
                day++; // Adding 1 to the variable day
                daysCounter++; // Adding 1 to the day's counter
            }
        }  
    }    
}
