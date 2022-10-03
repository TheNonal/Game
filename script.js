var getRandomNumber = function(size){ //Функция для случайного числа
    return Math.floor(Math.random() * size); //Возврат случайного числа от 0 до 399
}

var getDistance = function (event, target){ //Функция для расстояния до клада
    var diffX = event.offsetX - target.x;
    var diffY = event.offsetY - target.y; 
    return Math.sqrt((diffX * diffX) + (diffY * diffY)); //Теорема Пифагора для нахождения расстояния между двумя точками
};
var getDistanceHint = function(distance){ //Функция для вывода подсказок о расстоянии до клада
    if (distance < 10){
        return "Обожжешься!";
    }
    else if (distance < 20){
        return "Очень горячо";
    }
    else if (distance < 40){
        return "Горячо";
    }
    else if (distance < 80){
        return "Тепло";
    }
    else if (distance < 120){
        return "Прохладно";
    }
    else if (distance < 160){
        return "Холодно";
    }
    else if (distance < 320){
        return "Очень холодно";
    }
    else if (distance < 640){
        return "Оооооооооооооочень холодно!";
    }
    else{
        return "Замерзнешь!";
    }
};

var width = 400;
var height = 400;
var clicks = 0;
var lim= 50;

//var hot = ("Горячо, осталось "  + " кликов");
//var cold = ("Холодно, осталось " + " кликов");

var target = { //Функция выбора случайной точки на карте, в которой будет клад
    x: getRandomNumber(width),
    y: getRandomNumber(height)
}

$("#map").click(function(event){ //Обработчик события, клик мышкой по карте
    clicks++;
    var distance = getDistance(event , target);//Вычисление расстояния до цели
    var distanceHint = getDistanceHint(distance);//Вычисление какую именно подсказку выдать игроку

    if(clicks > lim){
        alert("Слишком много кликов, клад уже не найти")
        location.reload();
    }

    if(distance < 40 && distance > 20){
        var a = lim - clicks;
        alert("Горячо, осталось кликов " + a);
    }

    if(distance < 160 && distance > 120){
        var a = lim - clicks;
        alert("Холодно, осталось кликов " + a);
    }

    $("#distance").text(distanceHint); //Если distance будет меньше 8, то будет выведено сообщение о победе

    if (distance < 8){ 
        alert("Клад найден! Сделано кликов " + clicks);
        location.reload();
    }
});





