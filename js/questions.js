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
						"allowMultipleChoice" : true,
						"isEnabled" : true
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
																									  ],
					"allowMultipleChoice" : true,
					"isEnabled" : true
				},

				{
					"id": 3, "question": "What is your name?", "answers": [
																			{"id": 1, "answer" : "Dima"}, 
																			{"id": 2, "answer": "Roma"}, 
																			{"id": 3, "answer": "Masha"}],
					"allowMultipleChoice" : false,
					"isEnabled" : true
				},
				{
					"id": 4, "question": "Where do you live?", "answers": ["Moscow", "London", "Minsk"],
					"isEnabled" : true
				}
		],

		$scope.maxCheckedValues = 1,
		 // console.log($scope.questions[1].question);
		 // console.log($scope.questions[1].question);

		$scope.$watchCollection("questions", function(newVal, oldVal)
			{
				for (var key in $scope.questions)
				{
					if($scope.questions.hasOwnProperty(key))
					{
						console.log($scope.questions[key]);
					}
				}
				 
			}

			)
	
	});

app.controller("MultipleChoiceCtrl", function($scope)
{
	// $scope.changeColor = function()
	// {
		$scope.color = "btn btn-success";
	// }
}
	);
