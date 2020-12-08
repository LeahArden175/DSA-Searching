import React from "react";

class App extends React.Component {

state = {
  linearResult: '',
  binaryResult: ''
}

  data = [
    89,
    30,
    25,
    32,
    72,
    70,
    51,
    42,
    25,
    24,
    53,
    55,
    78,
    50,
    13,
    40,
    48,
    32,
    26,
    2,
    14,
    33,
    45,
    72,
    56,
    44,
    21,
    88,
    27,
    68,
    15,
    62,
    93,
    98,
    73,
    28,
    16,
    46,
    87,
    28,
    65,
    38,
    67,
    16,
    85,
    63,
    23,
    69,
    64,
    91,
    9,
    70,
    81,
    27,
    97,
    82,
    6,
    88,
    3,
    7,
    46,
    13,
    11,
    64,
    76,
    31,
    26,
    38,
    28,
    13,
    17,
    69,
    90,
    1,
    6,
    7,
    64,
    43,
    9,
    73,
    80,
    98,
    46,
    27,
    22,
    87,
    49,
    83,
    6,
    39,
    42,
    51,
    54,
    84,
    34,
    53,
    78,
    40,
    14,
    5,
  ];

  linearSearch = (data, num) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i] == num) {
        this.setState({ linearResult : `${num} was found in ${i + 1} tries` })
        return 
      }
      this.setState({linearResult : `${num} was not found in ${data.length} tries` })
    }
  };

  binarySearch = (data, value, start, end, count) => {
    let starter = start === undefined ? 0 : start;
    let ender = end === undefined ? data.length : end;
    let counter = count === undefined ? 0 : count

    if(starter > ender){
      return -1
    }

    const index = Math.floor((starter + ender) / 2)
    const item = data[index]

    console.log(starter, ender, value, item)

    if(item == value) {
      this.setState({binaryResult: `Found  ${value} in ${counter} tries`})
      return
    } else if (item < value) {
      counter++
      return this.binarySearch(data, value, index + 1, ender, counter)
    } else if (item > value) {
      counter++
      return this.binarySearch(data, value, starter, index - 1, counter)
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let target = event.target.numInput.value
    const sortedData = this.data.sort((a, b) => {
      return a-b
    })
    this.linearSearch(this.data, target)
    this.binarySearch(sortedData, target)
  };

  render() {
    return (
      <main className="App">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="dataInput">Number to Search</label>
          <input type="text" id="numInput" name="dataInput" />
          <button type="submit">submit</button>
        </form>
        <p>linearResult: {this.state.linearResult}</p>
        <p>binaryResult: {this.state.binaryResult}</p>
      </main>
    );
  }
}

export default App;
