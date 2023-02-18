let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printList1(list) {
  console.log(list.value);
  if (list.next) printList1(list.next);
}

function printList2(list) {
  let curr = list;

  while (curr) {
    console.log(curr.value);
    curr = curr.next;
  }
}
