import { SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import "./Header.scss";

const Header = () => {
   return (
      <header>
         <Link className='site-name' to='/'>
            Readit
         </Link>
         <Link className='nav-link' to='/search'>
            Search <SearchOutlined />
         </Link>
      </header>
   );
};

export default Header;
