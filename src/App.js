import React, { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };

    // NOT NEEDED AS FUNCTION IS DEFINED AS ARROW.  this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;
    let filteredMonsters = monsters.filter(m =>
      m.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <header className="Monsters">
        <h1>Monsters d00d</h1>
          <SearchBox
            placeholder="Search monsters"
            handleChange={this.handleChange} />
          <CardList monsters={filteredMonsters} />
        </header>
      </div>);
  }
}

export default App;
