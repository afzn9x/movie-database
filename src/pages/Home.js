// Import Navbar, Hero, Movies, Footer Component
import { useDispatch } from "react-redux";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";


/**
 * Membuat Component Home.
 * Menampilkan Halaman Home.
 */
function Home() {
  /**
   * Mengangkat stave movies: lifting state.
   * Dari Component Movies ke Component Home.
   * Agar bisa digunakan oleh Component yang lain.
   */

  const title = "Latest Movies";
  return (
    <>
      <Hero />
      {/* Mengirim props: state movies */}
      <Movies titles={title} />
    </>
  );
}

export default Home;
