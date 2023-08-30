Date.prototype.getCurrentDate = function () {
  return this.toJSON().substring(0, 10);
};

Date.prototype.getCurrentHour = function () {
  let hour = new Date(this);
  hour.setHours(hour.getHours() - hour.getTimezoneOffset() / 60);
  return hour.toJSON().substring(11, 19);
};

Date.prototype.addDate = function (addedTime, unit = "day") {
  let date = new Date(this);
  switch (unit) {
    case "month":
      return new Date(date.setMonth(date.getMonth() + addedTime));
    case "year":
      return new Date(date.setYear(date.getFullYear() + addedTime));
    default:
      return new Date(date.setDate(date.getDate() + addedTime));
  }
};

Date.prototype.addTime = function (addedTime, unit = "hour") {
  let date = new Date(this);
  switch (unit) {
    case "minute":
      return new Date(date.setMinutes(date.getMinutes() + addedTime));
    case "second":
      return new Date(date.setSeconds(date.getSeconds() + addedTime));
    default:
      return new Date(date.setHours(date.getHours() + addedTime));
  }
};

Date.prototype.compareDate = function (secondDate) {
  if (secondDate instanceof Date == false) {
    secondDate = new Date(secondDate);
  }

  if (secondDate.getSeconds() == 0 && secondDate.getMilliseconds() == 0) {
    let initialDate = new Date(secondDate.getTime());

    secondDate.setHours(this.getHours());
    secondDate.setMinutes(this.getMinutes());
    secondDate.setSeconds(this.getSeconds());
    secondDate.setMilliseconds(this.getMilliseconds());

    secondDate.setDate(initialDate.getUTCDate());
  }

  if (this.getTime() > secondDate.getTime()) {
    return 1;
  } else if (this.getTime() == secondDate.getTime()) {
    return 0;
  } else {
    return -1;
  }
};

Date.prototype.isWeekDay = function () {
  const weekDay = this.getDay();
  if (weekDay == 5 || weekDay == 6) {
    return false;
  }
  return true;
};

Date.prototype.nextWorkingDay = function () {
  while (!getWeekDay(this)) {
    this.addDate(1);
  }
  return this;
};
