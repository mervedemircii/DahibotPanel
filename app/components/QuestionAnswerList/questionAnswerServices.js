app.factory('QAService', function($http) {
    var qaFactory = {};

    var config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    var configJSON = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    qaFactory.getQA = function() {
        $http.get("http://localhost:5000/bot/58ac69c6eb29aa3a897b97ac/questionAnswers", config);
    };

    qaFactory.postQA = function(newQuestion) {
        $http.post("http://localhost:5000/bot/58ac69c6eb29aa3a897b97ac/questionAnswers", newQuestion, configJSON);
    };

    qaFactory.putQA = function(qaId, editedQuestion) {
        $http.put("http://localhost:5000/bot/58ac69c6eb29aa3a897b97ac/questionAnswers/"+qaId, editedQuestion, configJSON);
    };

    qaFactory.deleteQA = function(qaId) {
        $http.delete("http://localhost:5000/bot/58ac69c6eb29aa3a897b97ac/questionAnswers/" + qaId, config);
    };

    return qaFactory;
});