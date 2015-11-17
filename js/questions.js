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
										"isSelected" : 1
									}, 
									{	"id" : 2,
										 "answer": "Региональные органы исполнительной власти",
										 "isSelected" : 1
									}, 
									{	 "id" : 3,
										 "answer": "Местные административные органы управления",
										 "isSelected" : 1
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
																											"answer": "Personal",
																											"isSelected" : 0
																										}, 
																										{
																											"id" : 2,
																											"answer": "Goverment",
																											"isSelected" : 0
																										},

																										{
																											"id": 3,
																											"answer": "Organization",
																											"isSelected" : 0
																										}
																									  ],
					"MaxAllowedChoice" : 2,
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

		$scope.maxCheckedValues = 1,

		$scope.$watch("questions", function(newVal, oldVal)
		{
			angular.forEach($scope.questions, function(question)
				{
					angular.forEach(question.answers, function(answer)
					{

						if (answer.isSelected >= 2) // if we move back to zero we should decrement NowSelected
						{
							 answer.isSelected = 0;
						}

					});
				});

		}, true);	

	
	});

