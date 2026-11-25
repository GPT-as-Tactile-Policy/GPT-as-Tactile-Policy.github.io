(() => {
  'use strict';
  document.querySelectorAll('[data-benchmark]').forEach(section => {
    const choices = [...section.querySelectorAll('.task-choice')];
    const players = [...section.querySelectorAll('[data-task-index]')];
    choices.forEach(button => button.addEventListener('click', () => {
      const index = Number(button.dataset.index);
      players.forEach((player, i) => {
        if (i !== index) player.querySelector('video').pause();
        player.hidden = i !== index;
      });
      choices.forEach((item,i) => item.setAttribute('aria-pressed',String(i===index)));
    }));
  });
})();
