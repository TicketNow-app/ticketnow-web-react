import styled from 'styled-components'

export const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 12px;
  border: none;
`
