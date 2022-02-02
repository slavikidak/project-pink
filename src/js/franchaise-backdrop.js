var modal = document.getElementById('franchiseModal');

var franchiseBtn = document.getElementsByClassName('franchiseBtn');
var close = document.getElementsByClassName('franchiseclose')[0];
/*
А это в цикле прокруциваем те элементы которыми мы открываем модал окно
и обработчик события который открывет окно
*/
for (var i = 0; i < franchiseBtn.length; i++) {
  franchiseBtn[i].addEventListener('click', function() {
    openModalWindow();
  })
}
// это обработчик события, который в нутри этой функции выполнят ту функцию 
//которая закрывает окно модальное
close.addEventListener('click', function() {
  closeModalWindow();
})

//это функция, которая открывает окно
function openModalWindow() {
  modal.style.display = "block";
}

//это функция, которая закрывает окно
function closeModalWindow() {
  modal.style.display = "none";
}
