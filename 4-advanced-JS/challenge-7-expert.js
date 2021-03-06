///////////////////////////////////////////
// CHALLENGE #7
// --- Expert ---

(function() {

    var Question = function (question, answers, correctAnswer) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }
    
    var qOne = new Question('What does the fox say?', ['Woof', 'Meow', 'Ring-ding-ding-ding-dingeringeding!'], 2);
    var qTwo = new Question('Is JavaScript the funniest programming language ever?', ['Yes', 'No'], 0);
    var qThree = new Question('Where should I include the link to a .js file?', ['You don\'t need to declare that', 'It\'s usual to inform it at the end of the body section', 'Inside the head tag'], 1);
    
    Question.prototype.displayQuestion = function () {
        console.log(this.question);
    
        for (var i = 0; i < this.answers.length; i++){
            console.log(i + ': ' + this.answers[i]);
        }
    }
    
    Question.prototype.checkAnswer = function(ans, callBack) {
        var sc;
        
        if (ans === this.correctAnswer) {
            console.log('Correct answer!');
            sc = callBack(true);
        } else {
            console.log('Wrong answer. Try again!');
            sc = callBack(false);
        }
        this.displayScore(sc);
    }

    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: ' + score);
        console.log('----------------------------------------------');
    }
    
    var questions = [qOne, qTwo, qThree];

    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }

    var keepScore = score();

    function nextQuestion() {
        var n = Math.floor(Math.random() * questions.length);

        questions[n].displayQuestion();
        
        var answer = prompt('Insert the correct answer number: ');

        if (answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        }
    }

    nextQuestion();

})();