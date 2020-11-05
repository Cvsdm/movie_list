import React from 'react';
//import movielist from './mockData/searchMovie.json'
import MovieCard from "./MovieCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {getList} from "./API/apiCalls";

export default class MovieList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {list: null};
    }

    componentDidMount() {
        getList().then(movies => {
            console.log(movies)
            this.setState({list: movies})
        })
    }


    render() {
        if(this.state.list != null){
        return (
            <Container fluid>
                <Row>
                    {
                        this.state.list.results.map((movie, index) => (
                            <MovieCard key={index} info={movie}/>)
                        )
                    }
                </Row>
            </Container>
        )}
        else {
            return(<div></div>)
        }
    }
}
