import React  from "react";

const Posts = ({posts}) =>{
   
    return(
        <div>
        {posts.map(posts=>(
          <div key={posts.id}>
            <div style={{display:"inline-block", width:'20%'}}>
                <p style={{width:'90%', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace:'nowrap'}}>{posts.title}</p></div> 
            <div style={{display:"inline-block", width:'80%'}}><p style={{width:'90%', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace:'nowrap'}}>{posts.body}</p></div>  
            <hr />
          </div>          
        ))}
      </div>
    )
}
export default Posts;

