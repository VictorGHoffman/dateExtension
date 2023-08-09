function addDateFunctions() {
    Date.prototype.getCurrentDate = function () {
        return this.toJSON().substring(0, 10)
    }

    Date.prototype.getCurrentHour = function () {
        let hour = new Date(this)
        hour.setHours(hour.getHours() - (hour.getTimezoneOffset() / 60))
        return hour.toJSON().substring(11, 19)
    }

    Date.prototype.addDate = function (addedTime, unit = 'day') {
        switch (unit) {
            case 'month':
                return new Date(this.setMonth(this.getMonth() + addedTime)).toJSON().substring(0, 10)
            case 'year':
                return new Date(this.setYear(this.getFullYear() + addedTime)).toJSON().substring(0, 10)
            default:
                return new Date(this.setDate(this.getDate() + addedTime)).toJSON().substring(0, 10)
        }
    }

    Date.prototype.addHour = function (addedTime, unit = 'hour') {
        switch (unit) {
            case 'minute':
                return new Date(this.setMinutes(this.getMinutes() + addedTime)).toJSON().substring(11, 19)
            case 'second':
                return new Date(this.setSeconds(this.getSeconds() + addedTime)).toJSON().substring(11, 19)
            default:
                return new Date(this.setHours(this.getHours() + addedTime)).toJSON().substring(11, 19)
        }
    }

    Date.prototype.compareDate = function (secondDate) {
        if (secondDate instanceof Date == false) {
            secondDate = new Date(secondDate)
        }

        if (secondDate.getSeconds() == 0 && secondDate.getMilliseconds() == 0) {
            let initialDate = new Date(secondDate.getTime());

            secondDate.setHours(this.getHours())
            secondDate.setMinutes(this.getMinutes())
            secondDate.setSeconds(this.getSeconds())
            secondDate.setMilliseconds(this.getMilliseconds())

            secondDate.setDate(initialDate.getUTCDate());
        }

        if (this.getTime() > secondDate.getTime()) {
            return 1
        } else if (this.getTime() == secondDate.getTime()) {
            return 0
        } else {
            return -1
        }
    }

    Date.prototype.isWeekDay = function () {
        const weekDay = this.getDay()
        if (weekDay == 5 || weekDay == 6) {
            return false
        }
        return true
    }

    Date.prototype.nextWorkingDay = function () {
        while (!getWeekDay(this)) {
            this.addDate(1)
        }
        return this;
    }
}
module.exports = addDateFunctions;