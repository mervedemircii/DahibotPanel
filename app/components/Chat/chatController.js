app.controller('chatController', function ($scope) {

    $scope.chatData = [{
        "message" : "Hello. What can I do for you?",
        "sender" : "msg-bot"
    }];

    $scope.askQuestion = function(q) {
        $scope.chatData.push({"message" : q, "sender" : "msg-user"});
        $scope.qAsked = null;
        var quest = {"question" : q};
        chatService.postQuestion(quest)
            .then(function(response){
                $scope.chatData.push({"message": response.data.data.answer, "sender": "msg-bot"});
            })
    }
});