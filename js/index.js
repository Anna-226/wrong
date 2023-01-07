import '../styles/style.scss';
import burgerAndSearch from './modules/burgerAndSearch';

window.addEventListener('DOMContentLoaded', () => {
   'use strict';
   burgerAndSearch('.icon-menu', '.burger-menu', 'burger-menu__link');
   burgerAndSearch('.icons-header__item_search', '.search-block', 'search-block__button')
})