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

  console.log(BST.preOrder());
  console.log(BST.inOrder());
  console.log(BST.postOrder());
}

main();

//DRILL 6

function ranking() {
  let officers = new BinarySearchTree();

  officers.insert("picard", 5);
  officers.insert("riker", 3);
  officers.insert("worf", 2);
  officers.insert("laforge", 4);
  officers.insert("sec-officer", 1);
  officers.insert("data", 6);
  officers.insert("crusher", 8);
  officers.insert("selar", 7);

  console.log(rank(officers));
}

ranking();

//DRILL 8

function maxProfit(data) {
    if (data.length < 2) {
      return 'Not enough data'
    }
    let currMaxProf = data[0] - data[1]
    let dayToBuy = 0
  
    for(let i = 0; i < data.length; i++) {
      let profit = data[i - 1] - data[i]
      if(profit > currMaxProf) {
        currMaxProf = profit
        dayToBuy = i - 1
      }
    }
    return `Buy on day '${dayToBuy}' for a profit of '${currMaxProf}'`
  }
  
  function main() {
    let weekOne = [
      128, 97, 121, 123, 98, 97, 105
    ]
    console.log(maxProfit(weekOne))
  }
  
  main()