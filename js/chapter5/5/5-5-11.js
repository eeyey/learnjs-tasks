function getAverageAge(users) {
  return users.reduce((sum, user) => sum + user.age, 0) / users.length;
}
