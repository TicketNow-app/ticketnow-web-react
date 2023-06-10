import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};

  height: 100px;
  width: 1251px;
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 40px;
`

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
`

export const EventDate = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`

export const EditEventButton = styled.button`
  width: 117px;
  height: 35px;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
  border-radius: 8px;
  border: none;
`
