const Queue = require("./queue");
const BST = require("./bst");

//DRILL 3

function dewey(data, title, start, end) {
  start = start === undefined ? 0 : start;
  end = end === undefined ? data.length : end;

  if (start > end) {
    return -1;
  }
  const index = Math.floor((start + end) / 2);
  const item = data[index];

  for (let i = 0; i < data.length; i++) {
    if (data[i] == title) {
      return "found book";
    }
  }
  if (item < data) {
    return dewey(data, title, index + 1, end);
  } else if (item > data) {
    return dewey(data, title, start, index - 1);
  }
}
console.log(dewey(["book1", "book2", "book3"], "book2"));

//DRILL 4

//in-order     14 15 19 25 27 35 79 89 90 91
//pre-order    35 25 15 14 19 27 89 79 91 90
//post-order   14 15 19 25 27 79 89 90 91 35

//post-order   5 7 6 9 11 10 8
//pre-order    8 5 7 6 9 11 10

//DRILL 5

function main() {
  let BST = new BST();
  BST.insert("25", 25);
  BST.insert("15", 15);
  BST.insert("50", 50);
  BST.insert("10", 10);
  BST.insert("24", 24);
  BST.insert("35", 35);
  BST.insert("70", 70);
  BST.insert("04", 04);
  BST.insert("12", 12);
  BST.insert("18", 18);
  BST.insert("31", 31);
  BST.insert("44", 44);
  BST.insert("66", 90);
  BST.insert("90", 90);
  BST.insert("22", 22);

  console.log(BST.preOrder())
  console.log(BST.inOrder())
  console.log(BST.postOrder())
}

main()