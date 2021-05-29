class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();
    //write code to change the background color here
    background("blue");
    
    //call getContestantInfo( ) here
    Contestent.getPlayerInfo();
    if(allContestants !== undefined) {
      var display_Answers = 230;
      fill("black");
      textSize(20);
      text("*NOTE: Contestent who answered correct are highlited in green color!", 130, 230);

    for(var plr in allContestents) {
      debugger;
      var correctAns = "2";
      //write code to show a heading for showing the result of Quiz
      textSize(30);
      fill("black");
      text("Result Of The Quiz Is - ", 340, 50);
      text("-----------------------", 320, 65);
      
      if(correctAns === allContestants[plr].answer)
        fill("green");
        else
          fill("red");

          display_Answers+=30;
          textSize(20);
          text(allContestents[plr].name+": "+allContestents[plr].answer, 250, display_answers);
        
    }
  }

    
  }

}
