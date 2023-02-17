function formatDate(date) {
  let d = Date.now() - +date;

  if (d < 1000) {
    return 'прямо сейчас';
  } else if (d / 1000 < 60) {
    return `${Math.floor(d / 1000)} сек назад`;
  } else if (d / 60000 < 60) {
    return `${Math.floor(d / 60000)} мин назад`;
  }

  const dd = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  const mm = date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth();
  const yy = date.getFullYear().toString().slice(2);

  const h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  const m =
    date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();

  return `${dd}.${mm}.${yy} ${h}:${m}`;
}
