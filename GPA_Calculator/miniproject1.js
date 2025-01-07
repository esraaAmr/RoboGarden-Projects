function calculateGPA(arr) {
    var total = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 'A') {
            total += 100;
        } else if (arr[i] === 'B') {
            total += 80;
        } else if (arr[i] === 'C') {
            total += 70;
        } else {
            console.log(`Invalid grade: ${arr[i]}`);
        }
    }

    var average = total / arr.length;

    var alphabetGPA;
    if (average >= 90) {
        alphabetGPA = 'A';
    } else if (average >= 75) {
        alphabetGPA = 'B';
    } else {
        alphabetGPA = 'C';
    }

    document.write(`Your GPA is ${alphabetGPA}`);
}

calculateGPA(['A', 'B', 'C']);
