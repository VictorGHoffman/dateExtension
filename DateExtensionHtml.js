Date.prototype.getCurrentDate = function () {
  return this.toJSON().substring(0, 10);
};

Date.prototype.getCurrentHour = function () {
  let hour = new Date(this);
  hour.setHours(hour.getHours() - hour.getTimezoneOffset() / 60);
  return hour.toJSON().substring(11, 19);
};

Date.prototype.format = function (format) {
  let date = new Date(this);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  return format
    .replace("yyyy", year)
    .replace("MM", month.toString().padStart(2, "0"))
    .replace("dd", day.toString().padStart(2, "0"))
    .replace("HH", hour.toString().padStart(2, "0"))
    .replace("mm", minute.toString().padStart(2, "0"))
    .replace("ss", second.toString().padStart(2, "0"));
};

Date.prototype.addTime = function (unit) {
  let date = new Date(this);
  for (let key in unit) {
    switch (key) {
      case "year":
        date.setFullYear(date.getFullYear() + unit[key]);
        break;
      case "month":
        date.setMonth(date.getMonth() + unit[key]);
        break;
      case "day":
        date.setDate(date.getDate() + unit[key]);
        break;
      case "hour":
        date.setHours(date.getHours() + unit[key]);
        break;
      case "minute":
        date.setMinutes(date.getMinutes() + unit[key]);
        break;
      case "second":
        date.setSeconds(date.getSeconds() + unit[key]);
        break;
    }
  }
  return date;
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
