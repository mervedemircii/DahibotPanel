var app = angular.module('myApp', ["ngAnimate"]);
app.controller('QAControl', function($scope) {
    $scope.QAList = [
        {
            "question": "How are you",
            "answer": "Fine thanks.",
            "qaId": "58d8fb62eb29aa1c4a301b37"
        },
        {
            "question": "What is your name?",
            "answer": "My name is Robot",
            "qaId": "58d8fb62eb29aa1c4a301b38"
        },
        {
            "question": "What time is it?",
            "answer": "It is 12 o'clock.",
            "qaId": "58d8fb62eb29aa1c4a301b39"
        },
        {
            "question": "What is the price?",
            "answer": "Just 15$",
            "qaId": "58d8fb62eb29aa1c4a301b40"
        }
    ];

    $scope.deleteQA = function(item) {
        var index = $scope.QAList.indexOf(item);
        if(confirm("Are you sure?")) {
            $scope.QAList.splice(index, 1);
        }
    }

    $scope.addNewQA = function() {
        $scope.popupHeader = "New Question / Answer";
        $scope.qaQue = null;
        $scope.qaAns = null;
        $scope.qaIndex = -1;
        $scope.qaId = 0;
        $scope.state = !$scope.state;
    }

    $scope.saveQA = function(q, a, id, index) {
        if (index === -1) {
            var newQA = {"question": q, "answer": a, "qaId": "1"};
            $scope.QAList.push(newQA);
            $scope.state = !$scope.state;
        }
        else {
            var editedQA = {"question": q, "answer": a, "qaId": id};
            $scope.QAList[index] = editedQA;
            $scope.state = !$scope.state;
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
});