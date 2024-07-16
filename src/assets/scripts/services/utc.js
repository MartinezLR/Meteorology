app.factory('$utc', [function () {

    const day = function () {
        let day = new Date().getDate();
        return day < 10 ? `0${day}` : day;
    }

    const month = function () {
        let month = new Date().getMonth() + 1;
        return month < 10 ? `0${month}` : month;
    }

    const year = function () {
        let year = new Date().getFullYear();
        return year
    }

    const completeDate = function () {
        datefull = `${day()}/${month()}/${year()}`
        return datefull
    }

    const hours = function () {
        let hours = new Date().getHours();
        hours = hours % 12;
        hours = hours ? hours : 12;
        return hours < 10 ? `0${hours}` : hours;
    }

    const minutes = function () {
        let minutes = new Date().getMinutes();
        return minutes < 10 ? `0${minutes}` : minutes;
    }

    const periods = function () {
        let ampm = new Date().getHours() >= 12 ? 'PM' : 'AM';
        return ampm
    }

    const completeTime = function () {
        let time = `${hours()}:${minutes()} ${periods()}`
        return time;
    }

    const refreshTime = function () {
        var time = new Date().toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: "America/Sao_Paulo" });
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
        refreshTime: refreshTime
    }
}]);