// Хранить прочитанные сообщения в WeakMap или WeakSet
const readedMessages = new WeakMap();

function readMessage(message) {
  readedMessages.set(message, new Date());
}
