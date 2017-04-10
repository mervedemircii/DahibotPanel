app.factory('chatService', function($http) {
    var chatFactory = {};

    var configJSON = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    chatFactory.postQuestion = function(askedQuestion) {
        $http.post("http://localhost:5000/bot/58ac69c6eb29aa3a897b97ac/question", askedQuestion, configJSON);
    };

    return chatFactory;
});