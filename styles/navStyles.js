import styled from "styled-components";

export const Navstyles = styled.nav`
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  a{
    font-size: 1.2rem;
  }
`;

export const NavItems= styled.div`
 display: flex;
 align-items: center;
 justify-content: space-around;
 div{
  margin-left: 3rem;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
 }
 h3{
  font-size: 1rem;
  padding: 0.25rem;
 }
`