import React from 'react';
import Table from 'react-bootstrap/Table'

const TableBoots = ({ result }) => {

    if (result.location === undefined) {
        return null;
    }
  
    const {
        location: { name, country, region},
        current: { temperature, humidity, wind_speed } } = result;
    
    return (
        <Table striped bordered hover size="sm" className="w-75">
            <thead>
                <tr>
                    <th>City</th>
                    <th>Country</th>
                    <th>Region</th>
                    <th>Temperature</th>
                    <th>Humidity</th>
                    <th>Wind Speed</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{name}</td>
                    <td>{country}</td>
                    <td>{region}</td>
                    <td>{temperature} °C</td>
                    <td>{humidity}</td>
                    <td>{wind_speed}</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default TableBoots;
