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
										"answer":	"Федеральные органы исполнительной власти"
									}, 
									{	"id" : 2,
										 "answer": "Региональные органы исполнительной власти"
									}, 
									{	 "id" : 3,
										 "answer": "Местные административные органы управления"
									}, 
									{	 "id" : 4,
										 "answer": "Некоммерческие организации"
									}, 
									{	 "id" : 5,
										 "answer": "Частное лицо"
									}, 
									{	 "id" : 6,
										 "answer": "Другое"
									}
								 ]
				},

				{
					"id": 2, 
					"question": "Какая главная область использования Вами данных ДЗЗ?", "answers": [
																										{
																											"id" : 1,
																											"answer": "Personal"
																										}, 
																										{
																											"id" : 2,
																											"answer": "Goverment"
																										},

																										{
																											"id": 3,
																											"answer": "Organization"
																										}
																									  ]
				},

				{
					"id": 3, "question": "What is your name?", "answers": ["Dima", "Roma", "Masha"]
				},
				{
					"id": 4, "question": "Where do you live?", "answers": ["Moscow", "London", "Minsk"]
				}
		]
	
	});

app.controller("Colorized", function($scope)
{
	// $scope.changeColor = function()
	// {
		$scope.color = "btn btn-success";
	// }
}
	);
