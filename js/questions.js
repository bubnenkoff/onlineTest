app.controller("TestQuestions", function($scope) 
	{
		$scope.questions =
		[
				{
					"id": 1, 
					"question": "Каков уровень Вашей организации?", 
						"answers": [
									{
										"id" : 1,
										"answer":	"Федеральные органы исполнительной власти",
										"isSelected" : 0
									}, 
									{	"id" : 2,
										 "answer": "Региональные органы исполнительной власти",
										 "isSelected" : 0
									}, 
									{	 "id" : 3,
										 "answer": "Местные административные органы управления",
										 "isSelected" : 0
									}, 
									{	 "id" : 4,
										 "answer": "Некоммерческие организации",
										"isSelected" : 0
									}, 
									{	 "id" : 5,
										 "answer": "Частное лицо",
										 "isSelected" : 0
									}, 
									{	 "id" : 6,
										 "answer": "Другое",
										 "isSelected" : 0
									}
								 ],
						"MaxAllowedChoice" : 1,
						"isEnabled" : false,
						"NowSelected" : 0
				},

				{
					"id": 2, 
					"question": "Какая главная область использования Вами данных ДЗЗ?", "answers": [
																										{
																											"id" : 1,
																											"answer": "Сельское хозяйство",
																											"subanswers":
																													[
																														{
																															"id":1,
																															"subanswer": "Растеневодство",
																															"subisSelected" : 0
																														},
																														{
																															"id":2,
																															"subanswer": "Животноводство",
																															"subisSelected" : 0
																														},
																													],
																											"isSelected" : 0
																										}, 
																										{
																											"id" : 2,
																											"answer": "Лесное хозяйство",
																											"subanswers":
																													[
																														{
																															"id":1,
																															"subanswer": "Вырубки",
																															"subisSelected" : 0
																														},
																														{
																															"id":2,
																															"subanswer": "Состояние лесонасаждений",
																															"subisSelected" : 0
																														},
																													],																											
																											"isSelected" : 0
																										},

																										{
																											"id": 3,
																											"answer": "Землепользование",
																											"isSelected" : 0
																										}
																									  ],
					"MaxAllowedChoice" : 1,
					"isEnabled" : true,
					"NowSelected" : 0
				},

				{
					"id": 3, "question": "What is your name?", "answers": [
																			{"id": 1, "answer" : "Dima", "isSelected" : 0}, 
																			{"id": 2, "answer": "Roma", "isSelected" : 0}, 
																			{"id": 3, "answer": "Masha", "isSelected" : 0}],
					"MaxAllowedChoice" : 1,
					"isEnabled" : true,
					"NowSelected" : 0,
					"foo":"TESTTEST"
				},
				{
					"id": 4, "question": "Where do you live?", "answers": ["Moscow", "London", "Minsk"],
					"isEnabled" : true,
					"MaxAllowedChoice" : 2,
					"NowSelected" : 0
				}
		],



    // При нажатии кнопки мы передадим в функцию answer и содержащий его question
    $scope.setChoice = function(answer, question) {
            
            // Меняем состояние кнопки на противоположное
            answer.isSelected = !answer.isSelected;


            // Обьявим счетчик отмеченных кнопок
            var _select_count = 0;
            
            // Запустим цикл для подсчета отмеченных кнопок
            angular.forEach(question.answers, function(_answer) {
                if (_answer.isSelected) {
                    _select_count++;
                }
            });

            
            if (_select_count >= 1) {
                // Если количество отмеченных кнопок достигло максимально возможного значения
                
                // Запустим цикл по всем ответам текущего вопроса
                angular.forEach(question.answers, function(_answer) {
                    if (!_answer.isSelected) {
                        // Все оставшиеся неотмеченными кнопки задисейблим
                        _answer.isDisabled = true;
                    }
                });
            } else {
                // Если количество отмеченных кнопок меньше максимально возможного значения
                angular.forEach(question.answers, function(_answer) {
                    if (_answer.isDisabled) {
                        // Уберем дисейбл с кнопки если он у нее был
                        _answer.isDisabled = false;
                    }
                });
            }
                 
       
       	$scope.calculateResult = function() 
       	{
       		angular.forEach($scope.questions, function(question) {
          		angular.forEach(question.answers, function(answer) {
          			if (answer.isSelected == 1)
          			{
          				console.log("question ID: ", question.id, "; Answer ID: ", answer.id);
          			}
            	});
                
            });

       	}
        


    };


    
});


