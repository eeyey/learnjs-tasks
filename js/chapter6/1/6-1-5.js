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
  if (list.next) printList1(list.next);
  console.log(list.value);
}

function printList2(list) {
  const arr = [];
  let curr = list;

  while (curr) {
    arr.push(curr.value);
    curr = curr.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}
