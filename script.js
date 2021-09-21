const openBtn = document.getElementById('open-modal');
const modalOverlay = document.getElementById('modal1');
const closeBtn = document.querySelector('.modal__close');

openBtn.onclick = () => {
    modalOverlay.classList.add('modal_active');

    closeBtn.addEventListener('click', hendleCloseButtonClick);
    //тут же внутри обработчика навешиваем обработчик на кнопку закрытия, т.к. она понадобится, только в случае открытия окна. При клике выполнится ф-ция hendleCloseButtonClick

    modalOverlay.addEventListener('click', hendleModalOverlayClick);
    // таким жу образом вешаем прослушиватель клика и на модальное окно, что бы оно скрывалось и по клику на поле модального окна вокруг контента модального окна

    function hendleCloseButtonClick() {
        modalOverlay.classList.remove('modal_active');
        closeBtn.removeEventListener('click', hendleCloseButtonClick);
        modalOverlay.removeEventListener('click', hendleModalOverlayClick);
    }
    // Пишем функцию hendleCloseButtonClick: она прячет модальное окно, убирая класс активности и сразу же удаляет сам же обработчик-прослушиватель с кнопки закрытия, а так же с модального окна

    function hendleModalOverlayClick (event) {
        if(event.target === modalOverlay) { // если событие(клик) был по модальному окну target === modalOverlay, то его нужно закрыть:
            hendleCloseButtonClick();
        }
    }
    // и вторую функцию. Тут нужно учесть "всплытие", чтобы она не срабатывавала по клику на "ребенка"(14 стр.)
    // Если бы модалка была бы не на все окно, а нужно было бы чтобы клик на закрытие срабатывал бы за его пределами, нужно было бы исп-ть не переменную modal, а ключевое слово window
};