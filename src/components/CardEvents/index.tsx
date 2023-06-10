import React from 'react'

import { Container, Title, EventDate, EditEventButton } from './styles'
import { CalendarIcon, ClockIcon } from '@heroicons/react/24/solid'
const CardEvents = ({ event }) => {
  return (
    <Container>
      <Title>Solid Halloween</Title>

      <Title>Rua Tuyuti, 86 - Centro, Santos</Title>
      <EventDate>
        <CalendarIcon width={20} height={20} />
        <Title>Sex 14 de Out</Title>
        <ClockIcon width={20} height={20} />
        <Title>12:00 - 13:00</Title>
      </EventDate>

      <EditEventButton>Editar evento</EditEventButton>
    </Container>
  )
}

export default CardEvents
