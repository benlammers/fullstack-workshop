import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./styles/main.scss";
import "./App.scss";

const App = () => {
   const POSTS = [
      {
         title: "Pepperoni Pizza",
         author: "Noor",
         content: "I like peeperoni pizza and sometimes I do like pineapple on my pizza",
      },
      {
         title: "Loki: Episode 6",
         author: "Ben",
         content: "Hoping the Loki finale is gonna be good today",
      },
      {
         title: "Hot New Music",
         author: "Nana",
         content: "I just dropped a new song on Spotify, give it a listen",
      },
   ];

   return (
      <div className='app'>
         <Header />
         <main>
            <h2>All Readit Posts</h2>
            <div className='posts'>
               {POSTS.map((post, index) => (
                  <article key={index} className='post'>
                     <h3>{post.title}</h3>
                     <span>Posted by: {post.author}</span>
                     <p>{post.content}</p>
                  </article>
               ))}
            </div>
         </main>
         <Footer />
      </div>
   );
};

export default App;
