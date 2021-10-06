import React from 'react'

import { AppBar, ToolBar, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { CityLogo } from '../Utils/tools'

const Header = () => {
  return (
    <ToolBar style={{ display: 'flex' }}>
      <div style={{ flexGrow: 1 }}>
        <div className="header_logo">
          <CityLogo link={true} linkTo={'/'} width="70px" height="70px" />
        </div>
      </div>
    </ToolBar>
  )
}

export default Header
