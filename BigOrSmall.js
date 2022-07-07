



function bigOrSmall(arr) {
    const answers = [];
    for(let i =0; i< arr.length; i++){
        if (arr[i] <= 100) {
            answers.push('small');
        }
        else {
            answers.push('big');
        }
    }
    return answers
}

console.log(bigOrSmall([1,99,42,69,102,-10,159,352]))