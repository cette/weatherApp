import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

import {
    SUN,
    WINDY,
} from './../../constants/weathers';

const data = {
    temperature: 35,
    weatherState: SUN,
    humidity: 12,
    wind: '10 m/s',

}

const data2 = {
    temperature: 34,
    weatherState: WINDY,
    humidity: 25,
    wind: '10 m/s',

}

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: "Buenos Aires",
            data: data,

        };
    }

    handleUpdateClick = () => {
        console.log("actualizadoaaaaa");

        this.setState({
            city: 'Buenos Aires!!!!!',
            data: data2,
        });
    }
    render () {
        const {city , data } = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
            
                );
    }
    
}

export default WeatherLocation;