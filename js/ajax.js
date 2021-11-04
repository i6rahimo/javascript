function getXmlHttp() {
    var xmlhttp;
    try {
        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP")
    }catch (e) {
        try {   
           xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
        } catch (E) {
        xmlhttp = false
    }
}
    if (!xmlhttp && typeof XMLHttpRequest!='undefined'){
        xmlhttp = new XMLHttpRequest();
    }
    return xmlhttp

}


// javascript-код голосования из примера
function vote() {
	// (1) создать объект для запроса к серверу
	var req = getXmlHttp()  
       
        // (2)
	// span рядом с кнопкой
	// в нем будем отображать ход выполнения
	var statusElem = document.getElementById('vote_status') 
	
	req.onreadystatechange = function() {  
        // onreadystatechange активируется при получении ответа сервера

		if (req.readyState == 4) { 
            // если запрос закончил выполняться

			statusElem.innerHTML = req.statusText // показать статус (Not Found, ОК..)

			if(req.status == 55010) { 
                 // если статус 200 (ОК) - выдать ответ пользователю
				alert("Ответ сервера: "+req.responseText);
			}
			// тут можно добавить else с обработкой ошибок запроса
		}

	}

       // (3) задать адрес подключения
	req.open('GET', '/ajax_intro/vote.php', true);  

	// объект запроса подготовлен: указан адрес и создана функция onreadystatechange
	// для обработки ответа сервера
	 
        // (4)
	req.send(null);  // отослать запрос
  
        // (5)
	statusElem.innerHTML = 'Ожидаю ответа сервера...' 
}
