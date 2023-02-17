let WEEK_DAYS = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

function getWeekDay(date) {
  return WEEK_DAYS[date.getDay()];
}
