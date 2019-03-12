import React, {Component} from 'react';
import Singleflag from './Singleflag';


class Flag extends Component{
    currentTime (offset){
        let d = new Date();
 
        let utc = d.getTime() + (d.getTimezoneOffset() * 60000);
     
        // crea un nuevo objeto Date usando la diferencia dada.
        let nd = new Date(utc + (3600000*offset));
        
        // devuelve la hora como string.
        return nd;
    }   
    render(){
    
        return(
            <div className="row">
            {
                this.props.countries.map((country,index) =>{
                    return <Singleflag key={index}
                    imageFlag={country.flag}
                    countryName={country.name}
                    time={this.currentTime(country.timezones[0].replace(":",".").slice(3,8))}
                    timeZone={country.timezones[0].replace(":",".").slice(3,8)}
                    />
                })                
            }            
            </div>
        )
    }
}

export default Flag;