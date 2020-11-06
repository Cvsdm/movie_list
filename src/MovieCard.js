import React from 'react';
import Card from "react-bootstrap/Card";
import routes from "./router/routes";
import {createImageURL} from "./utils"


/**
 * Creates a Card display principal information of a movie
 * @props info - information given corresponding to a movie
 */
export default class MovieCard extends React.Component {
    render() {
        return (
            <Card style={{width: '18rem'}}>
                <Card.Img variant="top" src={createImageURL(this.props.info.poster_path)}/>

                <Card.Body>
                    <Card.Title>{this.props.info.title}</Card.Title>
                    <Card.Subtitle>{this.props.info.release_date.substring(0, 4)}</Card.Subtitle>
                    <br/>
                    <a href={routes.movie + this.props.info.id}>See more ... </a>
                </Card.Body>
            </Card>
        )
    }
}
