import React from 'react'
import { useEffect, useState } from "react"
import styled from "styled-components"
import { popularProducts } from "../../data"
import Producto from './Producto'
import { useStaticQuery ,graphql } from 'gatsby'
//import axios from "axios"
//import { publicRequest } from "../requestMethods"

const Container = styled.div`
 padding: 20px;
 display: flex;
 flex-wrap:wrap;
 justify-content: space-between;`

// const Products = ({cat,filters,sort}) => {

//     const [products,setProducts] = useState([]);
//     const [filteredProducts,setFilteredProducts] = useState([]);

//     useEffect(()=>{
//         const getProducts = async ()=>{
//             try{
//                 const res = await publicRequest.get(
//                    cat 
//                      ? `/products?category=${cat}` 
//                      : "/products"
//                 );
//                 setProducts(res.data);
//             }catch(err){}
//         };

//         getProducts();
//     },[cat])

//     useEffect(() => {
//         cat && 
//             setFilteredProducts(
//                 products.filter(item => 
//                     Object.entries(filters).every(([key,value])=>
//                         item[key].includes(value)
//                         )
//                     )
//             );
//     }, [products,cat,filters])

//     useEffect(()=>{
//         if(sort === "newest"){
//             setFilteredProducts((prev)=>
//                 [...prev].sort((a,b)=>a.createdAt - b.createdAt)
//                 );
//         } else if(sort === "asc"){
//             setFilteredProducts((prev)=>
//                 [...prev].sort((a,b)=>a.price - b.price)
//                 );
//         } else {
//             setFilteredProducts((prev)=>
//                 [...prev].sort((a,b)=>b.price - a.price)
//                 );
//         }
//     },[sort])


const Productos = () =>{
    const data = useStaticQuery(graphql`
        query MyQuery {
            allMongodbShopProducts {
            edges {
                node {
                mongodb_id
                img
                inStock
                title
                }
            }
            }
    `);

    function getProductos(data){
        //const productos = data.allMongodbGatsbyBooks.edges;
        //const books = props.data.allMongodbGatsbyBooks.edges;
        
    }
    return (
    <>
    <Container>
        {/* { productos.slice(0,8).map((producto)=>(
            <Producto item={producto.node} key={producto.node.mongodb_id} />
        ))} */}
    </Container>
    </>
        // <Container>
        //     {cat ? popularProducts.map((item) => (
        //         <Product item={item} key={item.id} />
        //         )) : products.slice(0,8).map((item) => (
        //             <Product item={item} key={item.id} />
        //             ))}
        // </Container>
    )
}

export default Productos


// export const pageQuery = graphql`
// query MyQuery {
//     allMongodbShopProducts {
//       edges {
//         node {
//           mongodb_id
//           img
//           inStock
//           title
//         }
//       }
//     }
//   }
  
//   `