/**
 * Import CSS Module Footer.
 * Disimpan di object styles.
 */
import StyledFooter, { Container } from "./Footer.styled";

function Footer() {
  /**
   * Menggunakan styles yang sudah diimport.
   * Memanggilnya menggunakan expression.
   */
  return (
    <Container>
      <StyledFooter>
        <h2>Dotflix</h2>
        <p>Created by ahmfauzan</p>
      </StyledFooter>
    </Container>
  );
}

export default Footer;
