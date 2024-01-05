import axios from 'axios';
import { useState } from 'react';
const Category = () => {
    const [posts,setPosts] = useState([]);
    let categories = ["Technology","Design","Culture","Business","Politics","Opinion","Science","Health","Style","Travel"];
    

    return ( 
        <>
        <div className="flex justify-evenly my-2 ">
            {categories.map((cate)=>{return (
                <a href={`http://localhost:5173/category/${cate}`} key={cate} className="hover:text-blue-400 font-semibold cursor-pointer">{cate}</a>
            )})}
        </div>
        </>
     );
}
 
export default Category;