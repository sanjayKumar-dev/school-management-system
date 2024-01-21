'use client'
import React, { Component } from 'react'
import ResponsiveAppBar from './ResponsiveAppBar'

export class Header extends Component {
  render() {
    return (
      <div>
        <ResponsiveAppBar />
      </div>
    )
  }
}

export default Header