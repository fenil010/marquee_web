isAdmin = true;
checkEvenOdd(10);
checkIsAdminOrNot(isAdmin);

function checkEvenOdd(number) {
    if (number % 2 === 0) {
        console.log("${value} is Even");
    } else {
        console.log("${number} is Odd");
    }
}

function checkIsAdminOrNot(value) {
    if (value === true) {
        console.log("user is Admin");
    } else {
        console.log("user is Not Admin");
    }
}   


let age = 19;
let hasLicense = true;
userCanDriveOrNot(age, hasLicense);

function userCanDriveOrNot(age, license) {
  if (age >= 18) {
    if (license === true) {
      console.log('### User can DRIVE ###');
    } else {
      console.log('### User cannot DRIVE ###');
    }
  } else {
    console.log('### User cannot DRIVE ###');
  }
}

