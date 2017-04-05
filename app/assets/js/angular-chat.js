var app = angular.module('myChat', ["ngAnimate", "luegg.directives"]);
app.controller('ChatControl', function($scope, $http) {
    $scope.chatData = [
        {
            "message" : "Hello. How can I help you?",
            "sender" : "msg-bot"
        }
    ];

    var configJSON = { headers: {
        'Content-Type': 'application/json'
    }
    };

    $scope.askQuestion = function(q) {
        $scope.chatData.push({"message" : q, "sender" : "msg-user"});
        $scope.qAsked = null;
        var quest = {"question" : q};
        $http.post("http://localhost:5000/bot/58ac69c6eb29aa3a897b97ac/question", quest, configJSON)
            .then(function(response){
                $scope.chatData.push({"message": response.data.data.answer, "sender": "msg-bot"});
            })
            .then(function(){
                //document.getElementById("panelChat").scrollTop = document.getElementById("panelChat").scrollHeight;
            });
    }
});