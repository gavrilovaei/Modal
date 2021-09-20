const btn = document.getElementById('open-modal');
const modal = document.getElementById('modal1');
const closeBtn = document.querySelector('.modal__close');

btn.onclick = () => {
    modal.classList.add('modal_active');

    closeBtn.addEventListener('click', closeModal);
    //тут же внутри обработчика навешиваем обработчик на кнопку закрытия, т.к. она понадобится, только в случае открытия окна. При клике выполнится ф-ция closeModal

    modal.addEventListener('click', hideModal);
    // таким жу образом вешаем прослушиватель клика и на модальное окно, что бы оно скрывалось и по клику на поле модального окна вокруг контента модального окна

    function closeModal() {
        modal.classList.remove('modal_active');
        closeBtn.removeEventListener('click', closeModal);
        modal.removeEventListener('click', hideModal);
    }
    // Пишем функцию closeModal: она прячет модальное окно, убирая класс активности и сразу же удаляет сам же обработчик-прослушиватель с кнопки закрытия, а так же с модального окна

    function hideModal (event) {
        if(event.target === modal) { // если событие(клик) был по модальному окну target === modal, то его нужно закрыть:
            closeModal();
        }
    }
    // и вторую функцию. Тут нужно учесть "всплытие", чтобы она не срабатывавала по клику на "ребенка"(14 стр.)
    // Если бы модалка была бы не на все окно, а нужно было бы чтобы клик на закрытие срабатывал бы за его пределами, нужно было бы исп-ть не переменную modal, а ключевое слово window
};