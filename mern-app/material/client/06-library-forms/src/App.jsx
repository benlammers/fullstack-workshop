import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PostItem from "./components/PostItem/PostItem";
import PostForm from "./components/PostForm/PostForm";

import "antd/dist/antd.css";
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
            <h1>Welcome to Readit</h1>
            <h2>Add Post</h2>
            <PostForm />
            <h2>All Posts</h2>
            <div className='posts'>
               {POSTS.map((post, index) => (
                  <PostItem key={index} post={post} />
               ))}
            </div>
         </main>
         <Footer />
      </div>
   );
};

export default App;
