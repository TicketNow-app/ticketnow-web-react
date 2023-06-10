import React, { useState } from 'react'
import Head from 'next/head'

import { Container } from './styles'
import InputSearch from '../../components/Input'
import Sidebar from '../../components/SideBar'

const Teste: React.FC = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSiderbar = () => setSidebar(!sidebar)
  return <Sidebar active={setSidebar} />
}

export default Teste
