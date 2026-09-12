const appWindow = document.querySelector('.app-window');
const weekDays = document.querySelectorAll('.week-day');

weekDays.forEach((day) => {
  day.addEventListener('click', () => {
    weekDays.forEach((item) => item.classList.remove('selected'));
    day.classList.add('selected');
    const dateLabel = document.querySelector('.app-date');
    dateLabel.textContent = day.classList.contains('selected') ? `${day.querySelector('span').textContent}, ${day.querySelector('b').textContent} sep` : 'Miércoles, 18 sep';
  });
});

appWindow.addEventListener('mouseenter', () => {
  appWindow.style.transform = 'rotate(0deg) translateY(-4px)';
});
appWindow.addEventListener('mouseleave', () => {
  appWindow.style.transform = 'rotate(2.2deg)';
});
