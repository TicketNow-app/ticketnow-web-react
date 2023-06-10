import styled from 'styled-components'

export const Container = styled.div`
  flex-direction: column;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`

export const Input = styled.div`
  width: 100%;
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-size: 24px;
`
