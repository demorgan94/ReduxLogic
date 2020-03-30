import React, { useState, useEffect, Fragment } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

/** Redux */
import { useSelector, useDispatch, connect } from 'react-redux'
import { RootState } from '../app/reducers'
import { getWheatherData, incrementNumberOfRequestsMade } from '../app/actions'
import cityTypes from '../app/types/cityTypes'

const Weather: React.FC = () => {

    const [city, setCity] = useState<string>();

    const dispatch = useDispatch();

    const weatherState = useSelector((state: RootState) => state.weather);
    const requestState = useSelector((state: RootState) => state.request);

    const handleClick = (city: string) => {
        setCity(city);
        dispatch(incrementNumberOfRequestsMade());
        dispatch(getWheatherData(city));

        console.log(weatherState)
    }

    return (
        <Fragment>
            <Container>
                <Row className="justify-content-center">
                    <Col md={8} >
                        <Card className="text-center mt-5">
                            <Card.Body>
                                <Card.Title>Weather App</Card.Title>
                                <Card.Text>Click on a city to show the weather there</Card.Text>
                                <Button variant="primary" className="mx-3" onClick={() => handleClick(cityTypes.London)}>London</Button>
                                <Button variant="info" onClick={() => handleClick(cityTypes.New_York)}>New York</Button>
                                <Button variant="success" className="mx-3" onClick={() => handleClick(cityTypes.Paris)}>Paris</Button>
                                <Button variant="danger" onClick={() => handleClick(cityTypes.Mexico)}>Mexico City</Button>
                                <Card.Text className="mt-5">Selected City: {city}</Card.Text>
                                <Card.Text>Weather in Selected City: {weatherState.weatherSummary}</Card.Text>
                                <Card.Text>Number of Requests Made: {requestState.numberOfRequests}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Weather
