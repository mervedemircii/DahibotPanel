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

    $scope.saveNewQA = function(q, a) {
        var newQA = {"question": q, "answer": a, "qaId": "1"};
        $scope.QAList.push(newQA);
    }
});