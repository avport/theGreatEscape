"use strict";
const mainRoom = {
  template: `
  <section ng-repeat="question in $ctrl.questions">
    <h3>{{question.question}}</h3>
    <p ng-repeat = "answer in question.answers">
      <input type = "radio" ng-click = "$ctrl.guess(answer.correct)"> {{ answer.answer }}
      </p>
 
  </section>

    <h1>You're doing a great job! Keep it up!</h1>
  
  `,

  controller: ["TriviaService", function(TriviaService) {
    const vm = this;
    let counter = 0; 

   TriviaService.getQuestions().then((response) => {
     console.log(response);
     vm.questions = response 
     return response
   });
  

 
   
  vm.guess = (correct) => {
    console.log(correct); 
    
    if (!correct) {
      console.log("wrong");
    } else if(correct && counter < 5) {
      counter++;
      console.log(counter); 
      } 

    if (counter === 5) {
      console.log("winner");
    }
    }
    
  
}]
}

angular.module("app").component("mainRoom", mainRoom);