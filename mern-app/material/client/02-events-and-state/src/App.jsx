import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Counter from "./components/Counter/Counter";

import "./styles/main.scss";
import "./App.scss";

const App = () => {
   return (
      <div className='app'>
         <Header />
         <main>
            <Counter />
         </main>
         <Footer />
      </div>
   );
};

export default App;
