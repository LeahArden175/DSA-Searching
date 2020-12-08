const Queue = require('./queue')
const BST = require('./bst')

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
        return 'found book'
      } 
    }
    if (item < data) {
      return dewey(data, title, index + 1, end);
    }
    else if (item > data) {
      return dewey(data, title, start, index - 1);
    }
  }
  console.log(dewey(['book1', 'book2', 'book3'], 'book2'))
  

//DRILL 4

//in-order     14 15 19 25 27 35 79 89 90 91
//pre-order    35 25 15 14 19 27 89 79 91 90
//post-order   14 15 19 25 27 79 89 90 91 35

//post-order   5 7 6 9 11 10 8
//pre-order    8 5 7 6 9 11 10