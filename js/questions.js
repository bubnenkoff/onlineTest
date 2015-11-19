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
						"isEnabled" : true,
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
					"MaxAllowedChoice" : 3,
					"isEnabled" : true,
					"NowSelected" : 0
				},

				{
					"id": 3, "question": "What is your name?", "answers": [
																			{"id": 1, "answer" : "Dima", "isSelected" : 0}, 
																			{"id": 2, "answer": "Roma", "isSelected" : 0}, 
																			{"id": 3, "answer": "Masha", "isSelected" : 0}],
					"MaxAllowedChoice" : 2,
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

            
            if (_select_count >= question.MaxAllowedChoice) {
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
                 

     $scope.setSubChoice = function(question, answer, suba) {
            
    //         // Меняем состояние кнопки на противоположное
            suba.isSelected = !suba.isSelected;

            // Запустим цикл для подсчета отмеченных кнопок
            angular.forEach(question.answers, function(_answer) {
                if (_answer.isSelected) // только для выделенных кнопок идем и смотрим их subanswers и subisSelected (0 или 1)
                {	
                    _select_count++;

              		
	                 angular.forEach(_answer, function(_subanswer) 
	                 {
	               		// до этого бегали по ансверам, теперь нужно по массиву сабансверов 

	               		angular.forEach(_subanswer, function(_item) 
	                	{
	                 		//console.log(_item.subanswer);
	                 		// suba - это данные из кнопки которые мы сюда передаем
	                 		suba.subisSelected = !suba.subisSelected; // меняем состояние
							//console.log(suba);
	                 	});


	                 });
        		}	

            });


            }

       
       	$scope.calculateResult = function() 
       	{
       		angular.forEach($scope.questions, function(question) {
          		angular.forEach(question.answers, function(_answer) {

          			if (_answer.isSelected == 1)
          			{
          				

          				// проверить есть ли подпункты
	               		// копи-паста обхода написанная выше, ТОЛЬКО СОСТОЯНИЕ НЕ МЕНЯЕМ УЖЕ

	               		angular.forEach(_answer, function(_subanswer) 
		                 {
		               		// до этого бегали по ансверам, теперь нужно по массиву сабансверов 

		               		angular.forEach(_subanswer, function(_item) 
		                	{
		                 		//console.log(_item.subanswer);
								//console.log(_item);
		                 	});


		                 });
	               		console.log("question ID: ", question.id, "; Answer ID: ", _answer.id);	

          			}
            	});
                
            });

       	}
        


    };


    
});


