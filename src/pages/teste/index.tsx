import React from 'react'
import Head from 'next/head'

import { Container } from './styles'
import InputSearch from '../../components/Input'

const Teste: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <h1>ReactJS Structure</h1>
      <InputSearch placeholderText="aaa" />
    </Container>
  )
}

export default Teste
