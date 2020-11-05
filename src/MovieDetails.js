import React from 'react';
//import movie from './mockData/movie.json'
import "./assets/movieDetails.css"
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

            //TODO need to add an error case
            this.setState({movie: movie})
        })
    }


    render() {
        if (this.state.movie) {
            return (
                <Container className="justify-content-md-center">
                    <div>
                        <br/>
                        <h1>{this.state.movie.title}</h1>
                        <br/>
                        <Row md={2}>
                            <Col>
                                <Image className="poster" alt="poster" max-height={200}
                                       src={createImageURL(this.state.movie.poster_path)}
                                       thumbnail/>
                            </Col>

                            <Col sm={2}>
                                <Button variant="dark" target='_blank' href={routes.imdb + this.state.movie.imdb_id}> See on IMDB</Button>
                                <br/><br/>
                                <h5>Release Date : </h5>{this.state.movie.release_date}
                                <br/><br/>
                                <h5>Genre : </h5>
                                <ul>{this.state.movie.genres.map((genre, index) =>
                                    <li key={index}> {genre.name} </li>
                                )}</ul>
                            </Col>
                        </Row>
                    </div>
                    <br/>
                    <div>
                        <h3>Overview</h3>
                        <p>{this.state.movie.overview}</p>
                    </div>
                    <br/>
                    <div>
                        <h3>Credits</h3>
                        <br/>
                        <Table bordered size="sm">
                            <thead>
                            <tr>
                                <th>Character</th>
                                <th>Played by</th>
                                <th>Cast Picture</th>
                            </tr>
                            </thead>
                            <tbody>{this.state.movie.credits.cast.map((cast, index) =>
                                <tr key={index}>
                                    <td>{cast.character}</td>
                                    <td>{cast.name}</td>
                                    <td><Image className="cast" alt="castImage"
                                               src={createImageURL(cast.profile_path)}
                                               rounded/></td>
                                </tr>
                            )}</tbody>
                        </Table>
                    </div>
                </Container>
            )
        } else {
            return (<div>Loading ...</div>)
        }
    }
}

