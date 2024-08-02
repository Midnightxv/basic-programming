function bmi(height: number , weight: number) {
    let bmi = weight /  (height * height) ;

    if (bmi < 18.5) {
        return 'Underweight' ;
    } else if (bmi >= 18.5 && bmi < 22.9) {
        return 'Normal weight';
    } else if (bmi >= 23 && bmi < 24.9) {
        return 'buxom';
    } else  if (bmi >= 25 && bmi < 29.9) {
        return 'Fat';
    } else if (bmi > 30) {
        return 'Very fat'
    } else {
        return 'Error'
    }
}
console.log(bmi(1.55,55))