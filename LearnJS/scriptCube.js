  //создание функции cube
        (function() {
                //создание переменной для работы с раскруткой
                var rotateY = 0,
                    rotateX = 0;
                    translateZ = 0;
                //СОБЫТИЕ нажатия на клавишу 
                document.onkeydown = function(e) {
                    if (e.keyCode === 65) {
                        rotateY -= 10
                    } else if (e.keyCode === 87) {
                        rotateX += 10
                    } else if (e.keyCode === 68) {
                        rotateY += 10
                    } else if (e.keyCode === 83) {
                        rotateX -= 10
                    } else if (e.keyCode === 88/*X*/) {
                        translateZ += 60
                    } else if (e.keyCode === 90/*Z*/) {
                        translateZ -= 60
                    }
                    //Метод querySelector() возвращает первый элемент, который соответствует одному или более CSS селекторам.(чтото тпа  DOCGETID)
                    document.querySelector('.cube').style.transform = 
                    'rotateY(' + rotateY + 'deg)'+
                    'rotateX(' + rotateX + 'deg)'+
                    'translateZ(' + translateZ + 'px)'+
                    'translateZ(' + translateZ + 'px)';     
                        


            }
        })();

