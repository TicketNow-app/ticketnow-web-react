import styled from 'styled-components'

export const Container = styled.div`
  background-color: #171923;
  position: fixed;
  height: 100%;
  top: 0px;
  left: 0px;
  width: 300px;
  animation: showSidebar 0.4s;

  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`

export const Content = styled.div`
  margin-top: 100px;
  text-align: center;
`

export const CompanyCard = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin: auto;
  margin-top: 30px;
`

export const CompanyImage = styled.div`
  width: 68px;
  height: 68px;
  background-color: ${({ theme }) => theme.colors.primary};
  margin: 15px 15px 15px 70px;
  border-radius: 30px;
`

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
`
export const SubTitle = styled.p`
  color: ${({ theme }) => theme.colors.text_inactive};
  font-size: 12px;
`

export const CreateEventButton = styled.button`
  width: 117px;
  height: 35px;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  color: ${({ theme }) => theme.colors.text};
  margin: auto;
  border-radius: 8px;
  border: none;
`

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 50px;
`

export const SideBarTitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  margin-left: 70px;
`

export const SideTitle = styled.p`
  color: ${({ theme }) => theme.colors.text_inactive};
  font-size: 16px;
`
