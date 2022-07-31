import './App.css';
import Footer from "./Components/Footer";
import Menu from "./Components/Menu";
import Corps from "./Components/Corps";

function App() {
  return (
      <>
          <main className="flex-shrink-0">
              <>
                  <Menu></Menu>
                  <Corps></Corps>
              </>
          </main>
          <Footer></Footer>
      </>
  );
}

export default App;
