import { SearchOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Link, useHistory } from "react-router-dom";

import { useUserContext } from "./../../contexts/UserContext";

import "./Header.scss";

const Header = () => {
   const { username, logout } = useUserContext();

   const history = useHistory();

   const openLogin = () => {
      history.push("/login");
   };

   return (
      <header>
         <Link className='site-name' to='/'>
            Readit
         </Link>

         {username ? (
            <Button size='large' type='default' className='logout' onClick={logout}>
               Logout
            </Button>
         ) : (
            <Button size='large' type='default' className='logout' onClick={openLogin}>
               Login
            </Button>
         )}

         <Link className='nav-link' to='/search'>
            Search <SearchOutlined />
         </Link>
      </header>
   );
};

export default Header;
