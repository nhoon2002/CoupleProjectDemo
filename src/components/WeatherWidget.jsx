import React, {Component} from 'react';


class WeatherWidget extends Component {

render() {
   return (
      <div>
         <a href="https://www.accuweather.com/en/us/los-angeles-ca/90012/weather-forecast/347625" className="aw-widget-legal">


         </a>
         <div id={this.props.weatherID} className="aw-widget-current"  data-locationkey={this.props.locationKey} data-unit="f" data-language="en-us" data-useip={this.props.ipBool} data-uid={this.props.weatherID}></div>
      </div>
   )
}

}


export default WeatherWidget;
