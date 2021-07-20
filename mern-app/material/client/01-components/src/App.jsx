import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./styles/main.scss"
import "./App.scss";

const App = () => {
   return (
      <div className='app'>
         <Header />
         <main>Content</main>
         <Footer />
      </div>
   );
};

export default App;