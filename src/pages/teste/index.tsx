import React, { useState } from 'react'
import Head from 'next/head'

import { Container, Title } from './styles'
import Sidebar from '../../components/SideBar'
import CardEvents from '../../components/CardEvents'

const Teste: React.FC = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSiderbar = () => setSidebar(!sidebar)
  return (
    <Container>
      <Sidebar active={setSidebar} />
      <Title>Eventos</Title>
      <CardEvents event={'aa'} />
      <CardEvents event={'aa'} />
      <CardEvents event={'aa'} />
      <CardEvents event={'aa'} />
    </Container>
  )
}

export default Teste
