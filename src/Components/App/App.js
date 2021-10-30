import Container from '../Container/Container';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import LoaderTriangle from '../Loader/Loader';
// ==============

function App() {
  return (
    <>
      <Container>
        <Navigation />
        <LoaderTriangle />
        <Footer />
      </Container>
    </>
  );
}

export default App;
