var app = angular.module('myApp', []);
app.controller('QAControl', function($scope, $http) {
    $scope.chatData = [
        {
            "message" : "Hello. How can I help you?",
            "sender" : "msg-bot"
        }
    ];

    var config = { headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    var configJSON = { headers: {
        'Content-Type': 'application/json'
    }
    };

    $http.get("http://localhost:5000/bot/58ac69c6eb29aa3a897b97ac/questionAnswers", config)
        .then(function(response) {
            $scope.QAList = response.data.data.questionAnswers;
        });

    $scope.deleteQA = function(item) {
        var id = item.qaId;
        if(confirm("Are you sure?")) {
            $http.delete("http://localhost:5000/bot/58ac69c6eb29aa3a897b97ac/questionAnswers/"+id, config)
                .then(function() {
                    $http.get("http://localhost:5000/bot/58ac69c6eb29aa3a897b97ac/questionAnswers", config)
                        .then(function(response) {
                            $scope.QAList = response.data.data.questionAnswers;
                        });
                });
        }
    }

    $scope.openNewQA = function() {
        $scope.popupHeader = "New Question / Answer";
        $scope.qaQue = null;
        $scope.qaAns = null;
        $scope.qaIndex = -1;
        $scope.qaId = 0;
        $scope.state = !$scope.state;
        document.getElementById("qaQuestion").focus();
    }

    $scope.saveQA = function(q, a, id, index) {
        if (index === -1) {
            var newQA = {"question": q, "answer": a};

            $http.post("http://localhost:5000/bot/58ac69c6eb29aa3a897b97ac/questionAnswers", newQA, configJSON)
                .then(function(){
                    $http.get("http://localhost:5000/bot/58ac69c6eb29aa3a897b97ac/questionAnswers", config)
                        .then(function(response) {
                            $scope.QAList = response.data.data.questionAnswers;
                        });
                    $scope.state = !$scope.state;
                });
        }
        else {
            var editedQA = {"question": q, "answer": a, "qaId": id};

            $http.put("http://localhost:5000/bot/58ac69c6eb29aa3a897b97ac/questionAnswers/"+editedQA.qaId, editedQA, configJSON)
                .then(function() {
                    $http.get("http://localhost:5000/bot/58ac69c6eb29aa3a897b97ac/questionAnswers", config)
                        .then(function(response) {
                            $scope.QAList = response.data.data.questionAnswers;
                        });
                    $scope.state = !$scope.state;
                });
        }
    }

    $scope.editQA = function(cQA) {
        $scope.qaIndex = $scope.QAList.indexOf(cQA);
        $scope.qaQue = cQA.question;
        $scope.qaAns = cQA.answer;
        $scope.qaId = cQA.qaId;
        $scope.popupHeader = "Edit Question / Answer";
        $scope.state = !$scope.state;
    }

    $scope.closeNewQA = function() {
        $scope.state = !$scope.state;
    }

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