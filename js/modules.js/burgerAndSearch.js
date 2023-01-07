const burgerAndSearch = (btnSelector, windowSelector, closeTrigger) => {
   const burgerBtn = document.querySelector(btnSelector),
         window = document.querySelector(windowSelector);

   burgerBtn.addEventListener('click', () => {
      window.classList.toggle('active');
      document.body.style.overflow = 'hidden';
   });
   document.addEventListener('click', (e) => {
      let target = e.target;
      console.log(target);
      if (target && target.classList.contains(windowSelector.slice(1)) || target && target.classList.contains(closeTrigger)) {
         window.classList.remove('active');
         document.body.style.overflow = 'auto';
      }
   });
   document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
         window.classList.remove('active');
         document.body.style.overflow = 'auto';
      }
   });
};

export default burgerAndSearch;