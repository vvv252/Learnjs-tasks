'use strict';

function formatDate(date) {
    let ms = new Date() - date;
    if (ms < 1000) {
        return 'прямо сейчас';
    }

    let seconds = Math.floor(ms / 1000);
    if (seconds < 60) {
        return seconds + ' сек. назад';
    }

    let minutes = Math.floor(ms / 60000);
    if (minutes < 60) {
        return minutes + ' мин. назад';
    }

    let returnDate = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    returnDate += '.' + (date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth());
    returnDate += '.' + (date.getFullYear().toString().substr(-2));
    returnDate += ' ' + (date.getHours() < 10 ? '0' + date.getHours() : date.getHours());
    returnDate += ':' + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
    
    return returnDate;
}

alert(formatDate(new Date(new Date - 1))); // "прямо сейчас"

alert(formatDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"

alert(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert(formatDate(new Date(new Date - 86400 * 1000)));