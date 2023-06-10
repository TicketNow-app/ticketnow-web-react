import React from 'react'
import { useTheme } from 'styled-components'
import Logo from './../../../public/Logo.png'
import {
  Container,
  Content,
  CompanyCard,
  CompanyImage,
  Title,
  SubTitle,
  CreateEventButton,
  SideBarContainer,
  SideBarTitle,
  SideTitle
} from './styles'
import {
  PresentationChartLineIcon,
  SparklesIcon,
  PencilIcon,
  TicketIcon,
  UserIcon,
  Cog8ToothIcon,
  ArrowLeftOnRectangleIcon
} from '@heroicons/react/24/solid'
const Sidebar = ({ active }) => {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="ticketnow logo" style={{ width: '120px' }} />
        <CompanyCard>
          <CompanyImage> </CompanyImage>
          <Title>Supra Eventos</Title>
          <SubTitle>supraevent@ticketnow.com</SubTitle>

          <CreateEventButton>Criar Evento</CreateEventButton>
        </CompanyCard>
        <SideBarContainer>
          <SideBarTitle>
            <PresentationChartLineIcon width={20} height={20} />
            <Title>Dashboard</Title>
          </SideBarTitle>
          <SideBarTitle>
            <SparklesIcon
              width={20}
              height={20}
              color={useTheme().colors.text_inactive}
            />
            <SideTitle>Eventos</SideTitle>
          </SideBarTitle>
          <SideBarTitle>
            <PencilIcon
              width={20}
              height={20}
              color={useTheme().colors.text_inactive}
            />
            <SideTitle>Editar perfil</SideTitle>
          </SideBarTitle>
          <SideBarTitle>
            <TicketIcon
              width={20}
              height={20}
              color={useTheme().colors.text_inactive}
            />
            <SideTitle>Pedidos</SideTitle>
          </SideBarTitle>
          <SideBarTitle>
            <UserIcon
              width={20}
              height={20}
              color={useTheme().colors.text_inactive}
            />
            <SideTitle>Clientes</SideTitle>
          </SideBarTitle>
          <SideBarTitle>
            <Cog8ToothIcon
              width={20}
              height={20}
              color={useTheme().colors.text_inactive}
            />
            <SideTitle>Configurações</SideTitle>
          </SideBarTitle>
          <SideBarTitle>
            <ArrowLeftOnRectangleIcon
              width={20}
              height={20}
              color={useTheme().colors.text_inactive}
            />
            <SideTitle>Desconectar</SideTitle>
          </SideBarTitle>
        </SideBarContainer>
      </Content>
    </Container>
  )
}

export default Sidebar
