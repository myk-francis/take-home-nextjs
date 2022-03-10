import React, { useState } from "react"
import style from "../styles/ParentComponent.module.css"
import ChildComponent from "./ChildComponent"
import PropTypes from 'prop-types'

const Parentpage = ({ services }) => {

  const [clicked, setOpen] = useState(false)

  const dateValue = new Date(services.current.dt).toDateString()

  if (services === null) {
    return (
      <h1>Get request failed</h1>
    )
  }else if(clicked) {
    return (<ChildComponent services={services}/>)
  } else {
    return (
    <div className={style.body}>
      <div className={style.container}>
        <div className={style.distance}></div>
        <div className={style.c_main}>
          <div className={style.city}>
            <p className={style.city_p}>{services.city}{', '}{services.state}</p>
            <p className={style.city_p}>{dateValue}</p>
          </div>
        </div>
        <button className={style.btn} onClick={()=>setOpen(true)}>Details</button>
        <div className={style.container2}>
          <div className={style.span4}> </div>
            <p className={style.span1}>{`Precipitation: ${services.current.precipitation}`}</p>
            <p className={style.span2}>{`Humidy: ${services.current.humidity } %`}</p>
            <p className={style.span3}>{`Wind: ${services.current.wind_speed } Km/hr`}</p>
        </div>
      </div>
    </div>
  )
  }
}


Parentpage.propTypes = {
  services: PropTypes.object.isRequired,
}

export default Parentpage

