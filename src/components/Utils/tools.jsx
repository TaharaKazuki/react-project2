import React from 'react'
import { Link } from 'react-router-dom'

import mcitylogo from '../../resources/images/logos/manchester_city_logo.png'

export const CityLogo = ({ width, height, link, linkTo }) => {
  const template = (
    <div
      className="img_cover"
      style={{ width, height, background: `url(${mcitylogo}) no-repeat` }}
    />
  )

  if (link) {
    return (
      <Link className="link_logo" to={linkTo}>
        {template}
      </Link>
    )
  } else {
    return template
  }
}
