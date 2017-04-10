app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'app/components/QuestionAnswerList/questionAnswer.html',
            controller : 'QAController'
        })
        .when('/chat', {
            templateUrl : 'app/components/Chat/chat.html',
            controller : 'chatController'
        })
        .when('/questionanswer', {
            templateUrl : 'app/components/QuestionAnswerList/questionAnswer.html',
            controller : 'QAController'
        })
});