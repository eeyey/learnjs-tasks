function byField(fieldName) {
  return (a, b) => a[fieldName] - b[fieldName];
}
