import { styled } from "styled-components";
import { colors, deviceSize, fFamily, fSize } from "../../globalStyles";

export const Wrapper = styled.div`

`

export const Staff = styled.section`

`
export const StaffTitle = styled.span `
  display: block;
  font-size: ${fSize.title};
  padding-bottom: 3rem;
  text-align: center;
`
export const StaffList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media screen and (min-width: ${deviceSize.tablet}){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: ${deviceSize.tablet}){
    grid-template-columns: repeat(4, 1fr);
  }
`

export const StaffMember = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 2rem;
  
  img {
    width: 100%;
    height: auto;
    border-radius: 50%;
    max-width: 300px;
    max-height: 300px;
  }

  @media screen and (min-width: ${deviceSize.tablet}){
    align-items: flex-start;
    justify-content: flex-start;
  }
`
export const StaffHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    font-size: ${fSize.title};
    font-weight: 600;
  }

  span {
    color: ${colors.textGray};
    font-family: ${fFamily.other};
    font-size: ${fSize.small};
    font-weight: 600;
    letter-spacing: 3px;
    text-transform: uppercase;
  }
`
export const StaffDescription = styled.p`
  font-size: ${fSize.textLarger};
  line-height: ${`calc(${fSize.textLarger} + .5rem)`};
`

export const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ul {
    display: flex;
    align-items: center;
    gap: 2rem;

    li a {
      color: ${colors.textGray};
      &:hover {
        color: ${colors.textDark};
      }
    }
  }
`

export const Content = styled.div `
  padding-bottom: 3rem;
  h1 {
    font-size: ${fSize.titleLarger};
    padding-bottom: 2rem;
  }
  p {
    font-size: ${fSize.textLarger};
    line-height: ${`calc(${fSize.textLarger} + .5rem)`};
  }
`