app.controller("TestQuestions", function($scope, $http) 
	{
	
	$scope.username;
	$scope.password;

	console.log("hello1");
//	 $.post("http://127.0.0.1:8080", `{"answers_result":777}`);  	
  		$scope.minArea = 10;
    	$scope.maxArea = 90;


// DO NOT WORK!!!!
    	$scope.questions;
		$http.get('js/questions-content.json').success(function(response) {
         // $scope.questions =  response.data;
         console.log(response.data);

    });
		console.log($scope.questions);



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

       

    	var sub_answers;
       	$scope.calculateResult = function() 
       	{
       		
       		var total_result_all = new Array();    
       		var answers_result; // every single item
       		angular.forEach($scope.questions, function(question) {
          		angular.forEach(question.answers, function(_answer) {

          			if (_answer.isSelected == 1)
          			{
          				var answers_sub_puncts = []; //collect of selected sub-items

          				answers_string = {QID: question.id, AID: _answer.id};
          				console.log("answers_string: %s", _answer.id)         				
          				
          				// проверить есть ли подпункты
	               		// копи-паста обхода написанная выше, ТОЛЬКО СОСТОЯНИЕ НЕ МЕНЯЕМ УЖЕ
	               		angular.forEach(_answer, function(_subanswer) 
		                 {
		               		// до этого бегали по ансверам, теперь нужно по массиву сабансверов 
		               		//САБАНСВЕРЫ
		               		angular.forEach(_subanswer, function(_item) 
		                	{
		                 		
		                 		if (_item.isSelected == 1)
          						{
		                 			//Запишем собранные подответы (_item.id) в answers_sub_puncts
		                 			answers_sub_puncts.push(_item.id);

		                 			// console.log(answers_result.push("Subanswer id: ", _item.id));
		                 			console.log(_item.id);
		                 		}
					//			console.log(_subanswer);
		                 	});


		                 });
	               		

   			        sub_answers = {SubAID: answers_sub_puncts};
   			        // console.log("-----------");
   			        // console.log(sub_answers);
   			        // console.log("-----------");
         			
         			area_string = {MinArea: $scope.minArea, MaxArea: $scope.maxArea};
         			var total_result = new Array(); 
         			total_result.push(answers_string, sub_answers);
         			//total_result_all.push(total_result, area_string);
         			total_result_all.push(total_result);
         			
         			console.log(total_result_all);
         						

        			}
            	});


                
            });

			// При нажатии кнопки мы отправляем JSON на урл:
                $http({
                    method: 'POST',
                    url: 'http://127.0.0.1:8080/my',
                    data: total_result_all
                })
                    .success(function(data) {})

           		total_result_all.push(area_string);
  		
	      		console.log(answers_result);

       	}



    };


    // send login info to server
	$scope.sendLoginInfo = function() 
       	{
       		authdata = JSON.stringify({'username': $scope.username, 'password' : $scope.password});
            $http({
                method: 'POST',
                url: 'http://127.0.0.1:8080/login',
                data: authdata
                
            })
                .success(function(data) {})

       		console.log(authdata);

       	}

    
});


