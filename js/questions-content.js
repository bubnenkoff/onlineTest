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
																														}
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
																														}
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
]



   