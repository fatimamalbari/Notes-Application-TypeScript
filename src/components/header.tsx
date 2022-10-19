import React from "react";
import { Container, Navbar } from 'react-bootstrap';

interface IHeader {

}

const Header: React.FunctionComponent<IHeader> = () => {
  return (
    <>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            LOGO
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header;