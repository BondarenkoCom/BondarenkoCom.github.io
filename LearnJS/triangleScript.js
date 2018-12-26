 //создание функции Triangle
        (function() {
                //создание переменной для работы с раскруткой
                var RotateY = 0,
                    RotateX = 0;
                    ZoomZ = 0;
                //СОБЫТИЕ нажатия на клавишу 
                document.onkeydown = function(e) {
                    if (e.keyCode === 85 ) {
                        RotateY -= 10
                    } else if (e.keyCode === 74 ) {
                        RotateX += 10
                    } else if (e.keyCode === 72 ) {
                        RotateY += 10
                    } else if (e.keyCode === 75  ) {
                        RotateX -= 10
                    }
                    //Метод querySelector() возвращает первый элемент, который соответствует одному или более CSS селекторам.(чтото тпа  DOCGETID)
                    document.querySelector('.triangle').style.transform = 
                    'RotateY(' + RotateY + 'deg)'+
                    'RotateX(' + RotateX + 'deg)';    
                        


            }
        })();