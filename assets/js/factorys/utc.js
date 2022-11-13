app.factory('$utc', [function () {

    const date = new Date();

    const day = function () {
        let day = date.getDate();
        return day < 10 ? `0${day}` : day;
    }

    const month = function () {
        let month = date.getMonth() + 1;
        return month < 10 ? `0${month}` : month;
    }

    const year = function () {
        let year = date.getFullYear();
        return year
    }

    const completeDate = function () {
        datefull = `${day()}/${month()}/${year()}`
        return datefull
    }

    const hours = function () {
        let hours = date.getHours();
        hours = hours % 12;
        hours = hours ? hours : 12;
        return hours
    }

    const minutes = function () {
        let minutes = date.getMinutes();
        return minutes < 10 ? `0${minutes}` : minutes;
    }

    const periods = function () {
        let ampm = date.getHours() >= 12 ? 'PM' : 'AM';
        return ampm
    }

    const completeTime = function () {
        let time = `${hours()}:${minutes()} ${periods()}`
        return time;
    }

    return {
        day: day,
        month: month,
        year: year,
        completeDate: completeDate,
        hours: hours,
        minutes: minutes,
        periods: periods,
        completeTime: completeTime,
    }
}]);