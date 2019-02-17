import React, { Component } from 'react';
import CardList from '../components/cardList';
import SearchBox from '../components/searchBox';
import Scroll from '../components/scroll';
import './App.css';
class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => this.setState({ robots: users }))
    }

    onSearchChange = (e) => {
        this.setState({ searchField: e.target.value })
    }
    render() {
        const filtterd = this.state.robots.filter(robot => {
            return robot.name.toLowerCase()
                .includes(this.state.searchField.toLowerCase());
        })
        if (this.state.robots.length === 0) {
            return <h1>Loading</h1>
        }
        else {
            return (

                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox Searchchange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filtterd} />
                    </Scroll>
                </div>
            )
        }
    }
}
export default App;