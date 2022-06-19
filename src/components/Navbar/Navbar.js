// Import Link dari React Router
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import navbar_data from "../../utils/constants/navbar_data";
import StyledNavbar, { Container } from "./Navbar.styled";

function Navbar() {
  /**
   * Menggunakan styles yang sudah diimport.
   * Memanggilnya menggunakan expression.
   */

  return (
    <Container>
      <StyledNavbar>
        <div>
          <h1>Dotflix</h1>
        </div>
        <div>
          {/*
           * Membuat Link/Navigasi.
           * Menggunakan Link Component dari React Router
           */}
          <ul>
            {navbar_data.map((data) => {
              return <li key={nanoid()}>
                <Link to={data.link}>{data.title}</Link>
              </li>;
            })}
          </ul>
        </div>
      </StyledNavbar>
    </Container>
  );
}

export default Navbar;
