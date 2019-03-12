import React, { Component } from 'react'

export class Singleflag extends Component {
   getTime (offset){
    let d = new Date();

    let utc = d.getTime() + (d.getTimezoneOffset() * 60000);
 
    // crea un nuevo objeto Date usando la diferencia dada.
    let nd = new Date(utc + (3600000*offset));
    
    // devuelve la hora como string.
    return nd;
} 
  constructor(props) {
    super(props)
      this.state = {
        date: props.time.getDate(),
        month: props.time.getMonth(),
        year: props.time.getYear(),
        time: props.time.toLocaleTimeString(),
        utc:  props.timeZone
      }
      this.countingSecond = this.countingSecond.bind(this)
    }
    countingSecond(props) {
      let d =   this.getTime(this.state.utc);
      this.setState({
        day: d.getDay(),
        month: d.getMonth(),
        date: d.getDate(),
        year: d.getFullYear(),
        time: d.toLocaleTimeString()
      })
    }     
    componentWillMount() {
      setInterval(this.countingSecond, 1000)
    }
  render() {
    return (
         <div className="col-md-2 p-2"> 
            <div className="card">
                <img className="card-img-top" src={this.props.imageFlag} alt={this.props.countryName}/>
                <div className="card-body text-center">
                 <h5 className="card-title">{this.props.countryName}</h5>
                 <p className="card-text">{this.state.date}/{this.state.month}/{this.state.year}</p>
                 <span className="badge badge-secondary">{this.state.time}</span>
                </div>
            </div>
            </div>
    )
  }
}

export default Singleflag
