import React, { createContext, useContext, useState } from 'react'

const PcContext = createContext()

const PcContextProvider = ({ children }) => {
  return <PcContext>{children}</PcContext>
}

export {  PcContext }
