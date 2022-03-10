import React from 'react'
import style from "../styles/ChildComponent.module.css"
import PropTypes from 'prop-types'
import ParentComponent from "./ParentComponent"

const ChildComponent = ({ services }) => {

  // const [clicked, setOpen] = useState(false)

  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  const sunrise = formatAMPM(new Date(services.current.sunrise))

  const sunset = formatAMPM(new Date(services.current.sunset))


  return (
      <div className={style.body_container}>
        <div className={style.container}>
          <div className={style.wrapper}>
            <p>Sunrise: <span className={style.inline}>{sunrise}</span></p>
            <p>Sunset: <span className={style.inline}>{sunset}</span></p>            
            <p>WindSpeed: <span className={style.inline}>{`${services.current.wind_speed} Km/hr`}</span></p>
            <p>Alerts: </p>
            <p className={style.p1}>{services.alerts[0].description}</p>
          </div>
          <div className={style.buttonBack}>
            {/* <button className={style.btn} onClick={() => setOpen(true)}>Go Back</button> */}
          </div>
        </div>
      </div>
    )
  }

ChildComponent.propTypes = {
  services: PropTypes.object.isRequired,
}

export default ChildComponent