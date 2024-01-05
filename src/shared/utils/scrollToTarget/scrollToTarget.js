/**
 * @function scrollToTarget
 * @param {*} target
 * @param {number} interval
 * @param {number} gap
 */

export const scrollToTarget = (target, interval = 20, gap = 50) => {
  const offset = window.scrollY + target.getBoundingClientRect().top;
  const initialOffset = window.scrollY;

  const scrollHeight = offset - initialOffset;

  const scrollStep = Math.PI / interval;
  const cosParametr = scrollHeight / 2;
  let previousScrollMargin = 0;
  let scrollCount = 0;
  let scrollMargin = 0;
  let signChanged = false;

  const scrollInterval = setInterval(() => {
    if ((window.scrollY < offset - gap || window.scrollY > offset) && !signChanged) {
      scrollCount += 1;
      scrollMargin = cosParametr - cosParametr * Math.cos(scrollCount * scrollStep);

      if (previousScrollMargin) {
        signChanged = Math.abs(scrollMargin) < Math.abs(previousScrollMargin);
      };

      window.scrollTo(0, initialOffset + scrollMargin - gap);
      previousScrollMargin = scrollMargin;
    } else {
      clearInterval(scrollInterval);
    }
  }, 20);
};

// Получение смещения элемента: Сначала функция получает смещение(offset) элемента относительно верхней части страницы и возвращает позицию элемента на странице
// initialOffset предоставляет информацию о текущем положении прокрутки страницы вверх или вниз относительно её начальной точки

// Расчет высоты скролла: Затем вычисляется высота, на которую нужно прокрутить страницу, чтобы добраться до указанного элемента

// Установка параметров прокрутки: Для плавности прокрутки используется метод интерполяции значений Math.cos,
// который плавно изменяет прокручиваемую высоту от начальной до конечной точки.

// Прокрутка страницы: Внутри интервальной функции(setInterval) происходит пошаговая прокрутка страницы к элементу.
// Она продолжается до тех пор, пока текущая позиция прокрутки не достигнет смещения или его близких значений.

// Остановка прокрутки: Как только страница доскролливается до необходимого места,
// интервал прокрутки очищается(clearInterval), и прокрутка завершается.
