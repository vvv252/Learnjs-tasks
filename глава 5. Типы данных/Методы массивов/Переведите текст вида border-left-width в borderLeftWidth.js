'use strict';

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';

function camelize(str) {
    return str.split('-').map((item, ind) => ind == 0 ? item : (item[0].toUpperCase() + item.slice(1))).join('');
}