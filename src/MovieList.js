import React from 'react';
import MovieCard from "./MovieCard";
import {Container, Row, Pagination} from "react-bootstrap";
import {getList} from "./API/apiCalls";

export default class MovieList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {list: null};
    }

    componentDidMount() {
        getList().then(movies => {
            console.log(movies)
            //TODO need to add an error case
            this.setState({list: movies, active: 1})
        })

    }

    pagination() {
        let pages = []
        let displayedNumber = this.state.active - 1

        if (this.state.active === 1)
            displayedNumber++

        for (let number = 0; number <= 3; number++) {
            pages.push(
                <Pagination.Item key={displayedNumber} active={displayedNumber === this.state.active}>
                    {displayedNumber}
                </Pagination.Item>,
            );
            displayedNumber++
        }
        console.log(pages);
        return (
            <Pagination variant="danger">
                <Pagination.First/>
                <Pagination.Prev/>
                {pages}
                <Pagination.Next/>
                <Pagination.Last/>
            </Pagination>
        )
    }


    render() {
        if (this.state.list != null) {
            return (
                <Container fluid >
                    <br/>
                    <Row className="justify-content-md-center">
                        <h1>Tending Movies this Week </h1>
                    </Row>

                    <br/>
                    <Row className="justify-content-md-center">
                        {
                            this.state.list.results.map((movie, index) => (
                                <MovieCard key={index} info={movie}/>)
                            )
                        }
                    </Row>
                    <br/>
                    <Row className="justify-content-md-center">
                        {this.pagination()}
                    </Row>

                </Container>

            )
        } else {
            return (<div>Loading...</div>)
        }
    }
}
