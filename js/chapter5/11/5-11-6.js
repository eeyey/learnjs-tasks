function getSecondsToday() {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  return Math.floor((+now - +today) / 1000);
}
