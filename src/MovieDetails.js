import React from 'react';
//import movie from './mockData/movie.json'
import {Container, Row, Image, Col, Button, Table} from "react-bootstrap";
import routes from "./router/routes";
import {getMovie} from "./API/apiCalls";
import {createImageURL} from "./utils";


/**
 * Creation of a detailed page regarding a movie
 * @props_param movieId - id of the movie we look for
 */
export default class MovieDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {movie: null};
    }

    componentDidMount() {
        // Retrieve the movieId
        let movieId = this.props.match.params.movieId;

        // Get the information from the Api
        getMovie(movieId).then(movie => {
            console.log(movie)
            this.setState({movie: movie})
        })
    }


    render() {
        if (this.state.movie) {
            return (
                <Container fluid>
                    <h1>{this.state.movie.title}</h1>
                    <Row md={2}>
                        <Col>
                            <Image alt="poster" max-height={200} src={createImageURL(this.state.movie.poster_path)}
                                   thumbnail/>
                        </Col>

                        <Col>
                            <Button target='_blank' href={routes.imdb + this.state.movie.imdb_id}> IMDB</Button>
                            <p>{this.state.movie.release_date}</p>
                            {this.state.movie.genres.map((genre, index) =>
                                <ul key={index}> {genre.name} </ul>
                            )}
                        </Col>
                    </Row>
                    <Col>
                        <p>{this.state.movie.overview}</p>
                    </Col>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>Character</th>
                            <th>Played by</th>
                        </tr>
                        </thead>
                        <tbody>{this.state.movie.credits.cast.map((cast, index) =>
                            <tr key={index}>
                                <th>{cast.character}</th>
                                <th>{cast.name}</th>
                                <th><Image alt="poster" max-height={200}
                                           src={createImageURL(cast.profile_path)}
                                           rounded/></th>
                            </tr>
                        )}</tbody>
                    </Table>
                </Container>
            )
        } else {
            return (<div>MOVIE NOT FOUND</div>)
        }
    }
}

