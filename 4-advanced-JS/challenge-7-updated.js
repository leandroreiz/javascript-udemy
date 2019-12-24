///////////////////////////////////////////
// CHALLENGE #7
// --- Let's build a fun quiz game in the console ---

(function() {
    var Question = function (question, answers, correctAnswer) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }
    
    var qOne = new Question('What does the fox say?', ['Woof', 'Meow', 'Ring-ding-ding-ding-dingeringeding!'], 2);
    var qTwo = new Question('Is JavaScript the funniest programming language ever?', ['Yes', 'No'], 0);
    var qThree = new Question('Where should I include the link to a .js file?', ['You don\'t need to declare that', 'It\'s usual to inform it at the end of the body section', 'Inside the head tag'], 1);
    
    var questions = [qOne, qTwo, qThree];
    
    var n = Math.floor(Math.random() * questions.length);
    
    Question.prototype.displayQuestion = function () {
        console.log(this.question);
    
        for (var i = 0; i < this.answers.length; i++){
            console.log(i + ': ' + this.answers[i]);
        }
    }
    
    Question.prototype.checkAnswer = function(ans) {
        if (ans === this.correctAnswer) {
            console.log('Correct answer!');
        } else {
            console.log('Wrong answer!');
        }
    }
    
    questions[n].displayQuestion();
    
    var answer = parseInt(prompt('Insert the correct answer number: '));
    
    questions[n].checkAnswer(answer);
})();