import { LoadingOutlined, SearchOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import { Input } from "antd";
import { useHistory, useLocation } from "react-router-dom";
import { useQuery } from "react-query";

import { searchPosts } from "./../../api";

import Post from "../../components/PostItem/PostItem";

import "./Search.scss";

const Search = () => {
   const location = useLocation();
   const history = useHistory();

   const searchParams = new URLSearchParams(location.search).get("text");
   const [search, setSearch] = useState(searchParams || "");

   useEffect(() => {
      if (search) history.push(`/search?text=${search.toLowerCase().replace(/ /g, "%20")}`);
      else history.push("/search");
   }, [search, history]);

   const { data: posts } = useQuery(["search", search], () => searchPosts(search));

   let isFetching = !!posts;

   return (
      <main className='search'>
         <h1>Search</h1>
         <Input size='large' prefix={<SearchOutlined />} value={search} onChange={(e) => setSearch(e.target.value)} />

         <div className='posts'>{isFetching ? posts.map((post, index) => <Post key={index} post={post} />) : <LoadingOutlined spin style={{ fontSize: "36px" }} />}</div>
      </main>
   );
};

export default Search;
