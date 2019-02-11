import React, { Component } from 'react';

import axios from '../axios-unsplash'

import SearchUsers from '../Components/SearchUsers';
import ShowPhotoGrid from '../Components/ShowPhotoGrid'
import UserList from '../Components/UserList'
import Footer from '../Components/Footer'

class ShowPhotos extends Component {

    constructor(props) {
        super(props)
        this.state = {
            query: "",
            users: [],
            photos: []
        }
    }
    searchUsers = (event) => {

        let query = event.target.value;

        axios.get('/search/users?per_page=30&page=1&client_id=1644deab993590fce6814995e06a0dfc590edb9861a649d19d2a7bacfbc46c51&query=' + query)
            .then(response => {
                const usersList = response.data.results;
                this.setState({ users: usersList })
            })
            .catch((error) => {
            });

        this.setState({ query: event.target.value })
    }

    getUserUploadedPhotos = (username) => {
        axios.get('/users/' + username + '/photos?client_id=1644deab993590fce6814995e06a0dfc590edb9861a649d19d2a7bacfbc46c51')
            .then(response => {
                const photos = response.data;
                this.setState({ photos })
            })
            .catch(error => {

            });
    }

    render() {

        return (
            <div>
                <div className='container'>
                    <div className='sideBar'>
                        <SearchUsers
                            searchUsers={this.searchUsers}
                            value={this.state.query} />
                        <UserList
                            users={this.state.users}
                            clicked={this.getUserUploadedPhotos} />
                    </div>
                    <ShowPhotoGrid
                        photos={this.state.photos} />
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        )

    }
}

export default ShowPhotos