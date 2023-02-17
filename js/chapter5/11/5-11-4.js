function getDateAgo(date, days) {
  const prevDate = new Date(date);

  prevDate.setDate(prevDate.getDate() - days);

  return prevDate.getDate();
}
