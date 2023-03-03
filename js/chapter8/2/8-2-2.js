function Obj() {}

Obj.prototype = null;

const obj = new Obj();

console.log(obj.constructor);
