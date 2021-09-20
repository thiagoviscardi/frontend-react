import React, { useEffect, useState }  from "react";
import axios from 'axios';
import {PostContainer, HeadTitle} from './style.js';
import Posts from '../Posts.js';
import Pagination from '../Pagination.js';


export default function PostsList() {
  
  const [lista, setLista] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);

  
    useEffect(()=>{
      axios.get('https://gorest.co.in/public/v1/posts')
          .then((res=>{
                setLista(res.data.data)
            }))  
  }, [])

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFisrtPost = indexOfLastPost - postsPerPage;
  const currentPost = lista.slice(indexOfFisrtPost, indexOfLastPost);
  const numberPosts = currentPost.length;

  const paginate=(pageNumber)=> setCurrentPage(pageNumber);

  console.log('numero d epostagens', currentPost.length);

function postsList(){
  if(lista && lista[0] && lista[0].id){
    
    return(
      <div>
      <Posts posts={currentPost}/>
      <Pagination postsPerPage={postsPerPage} totalPosts={lista.length} paginate={paginate} />
      <p>Exibindo {numberPosts} postagens</p>
     </div>
    )
  }
  return <></>
  
}
  return (
  <PostContainer>
    <h1 style={{paddingLeft:'20px'}}>Últimas postagens</h1>
    <HeadTitle>
          <div style={{display:"inline-block", width:'20%'}}><span style={{paddingLeft:'20px'}}>Título</span></div> 
          <div style={{display:"inline-block", width:'80%'}}><span style={{paddingLeft:'20px'}}>Conteúdo</span></div>  
    </HeadTitle>
    {postsList()}

  </PostContainer>
    );
}
