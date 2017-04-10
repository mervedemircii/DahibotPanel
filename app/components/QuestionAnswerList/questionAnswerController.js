app.controller('QAController', function($scope, QAService) {
    $scope.getQAList = function() {
        QAService.getQA()
            .then(function(response) {
                $scope.QAList = response.data.data.questionAnswers;
            });
    };

    $scope.deleteQA = function(item) {
        if(confirm("Are you sure?")) {
            QAService.deleteQA(item.qaId)
                .then(function() {
                    getQAList();
                });
        }
    };

    $scope.saveQA = function(q, a, id, index) {
        if (index === -1) {
            var newQA = {"question": q, "answer": a};

            QAService.postQA(newQA)
                .then(function(){
                    getQAList()
                        .then(function() {
                            $scope.state = !$scope.state;
                        });
                });
        }
        else {
            var editedQA = {"question": q, "answer": a, "qaId": id};

            QAService.putQA(editedQA.qaId, editedQA)
                .then(function() {
                    getQAList()
                        .then(function() {
                            $scope.state = !$scope.state;
                        });
                });
        }
    };

    /* --- Question-Answer Button Show-Hide --- */
    $scope.hoverIn = function(){
        $scope.isHovered = true;
    };

    $scope.hoverOut = function(){
        $scope.isHovered = false;
    };

    /* --- Question-Answer Panel Open-Close --- */
    $scope.openNewQA = function() {
        $scope.popupHeader = "New Question / Answer";
        $scope.qaQue = null;
        $scope.qaAns = null;
        $scope.qaIndex = -1;
        $scope.qaId = 0;
        $scope.state = !$scope.state;
        document.getElementById("qaQuestion").focus();
    };

    $scope.openEditQA = function(cQA) {
        $scope.qaIndex = $scope.QAList.indexOf(cQA);
        $scope.qaQue = cQA.question;
        $scope.qaAns = cQA.answer;
        $scope.qaId = cQA.qaId;
        $scope.popupHeader = "Edit Question / Answer";
        $scope.state = !$scope.state;
    };

    $scope.closeQA = function() {
        $scope.state = !$scope.state;
    };

});