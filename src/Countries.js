import React from "react"
class Countries extends React.Component{
    render(){
        const {countries}=this.props;
        return(
            <tr>
                <td>{countries.Country}</td>
                <td>{countries.NewConfirmed}</td>
                <td>{countries.NewDeaths}</td>
                <td>{countries.NewRecovered}</td>

            </tr>
        )
    }
}
export default Countries;