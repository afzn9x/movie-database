// Import Navbar, Hero, Movies, Footer Component
import Hero from "../../components/Hero/Hero";
import AddMovieForm from "../../components/AddMovieForm/AddMovieForm";

/**
 * Membuat Component Home.
 * Menampilkan Halaman Home.
 */
function CreateMovie(props) {
  /**
   * Mengangkat stave movies: lifting state.
   * Dari Component Movies ke Component CreateMovie.
   * Agar bisa digunakan oleh Component yang lain.
   */
  const { movies, setMovies } = props;
  return (
    <>
      <Hero />
      <AddMovieForm movies={movies} setMovies={setMovies} />
    </>
  );
}

export default CreateMovie;
