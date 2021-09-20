import React  from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({postsPerPage, totalPosts, paginate}) =>{
    const pageNumbers =[];
    for(let i = 1; i<= Math.ceil(totalPosts/postsPerPage); i++){
        pageNumbers.push(i);
    }
    return (
        <div style={{textAlign:'right', paddngRight:'20px'}}>
            <div>
                {pageNumbers.map(number =>(
                    <div key={number} style={{display:"inline-block", border:'solid 1px #ccc', padding:'0px 7px'}}>
                        <a onClick={()=>paginate(number)} href="!#">
                            {number}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Pagination