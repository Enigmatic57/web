function askQuestion() {
    var p = prompt('What would the safest move for Black be if e5?');
    if (p != null) {
        document.getElementById('question').innerHTML = "nd7";
    }

    alert('Note: Will be covered on the next page')
}

function askQuestionp2() {
    var p = prompt('How would you respond to e5 in this position?');
    if (p != null) {
        document.getElementById('question').innerHTML = "xe5";
    }

    alert('xe5 trades queens and removes castling rights.')
}