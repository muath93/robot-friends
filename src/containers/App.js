import React, { Component } from 'react';
import CardList from '../components/cardList';
import SearchBox from '../components/searchBox';
import AddUsers from '../components/addUsers';
import Scroll from '../components/scroll';
import './App.css';
class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: '',
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

    AddUser = (e) => {
        e.preventDefault();
        const { robots } = this.state;
        const id = robots.length + 1;
        let { name, email } = e.target;
        name = name.value
        email = email.value

        if (!name && !email) {
            console.log('errooor');

        }
        else {
            this.setState({
                robots: [...robots, ...[{
                    id,
                    name,
                    email
                }]]
            })
            e.target.reset();
        }
    }

    render() {
        const { robots, searchField } = this.state;
        const filtterd = robots.filter(robot => {
            return robot.name.toLowerCase()
                .includes(searchField.toLowerCase());
        })
        return (!robots.length) ? <h1>Loading</h1> :
            (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox Searchchange={this.onSearchChange} />
                    <AddUsers AddUser={this.AddUser} />
                    <Scroll>
                        <CardList robots={filtterd} />
                    </Scroll>
                </div>
            )
    }
}
export default App;