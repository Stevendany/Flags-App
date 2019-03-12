import React, {Component} from 'react';
import Flag from './Flag';


class Gridflags extends Component{
  constructor(props) {
    super(props)
    this.state = { countries: [] }
  }
  componentWillMount() {
    fetch('https://restcountries.eu/rest/v2/all?limit=10')
      .then((response) => {
        return response.json()
      })
      .then((countries) => {
        this.setState({ countries: countries })
      })
  }
    render(){               
      if (this.state.countries.length > 0) {
        return (
          <div className="container pt-2">
            <Flag countries={this.state.countries} />
          </div>
        )
      } else {
        return <p className="text-center">Cargando empleados...</p>
      }
    }
}

export default Gridflags;