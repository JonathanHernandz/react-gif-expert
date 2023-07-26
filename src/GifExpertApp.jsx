import { useState } from 'react'
import { AddCategory, GifGrid } from './components';
export const GifExpertApp = () => {

  const [ categories, setCategories  ] = useState([ ])

  const onAddCategory = ( newCategory ) =>{
    if(categories.includes(newCategory)) return;
    // console.log(newCategory);
    setCategories( [newCategory,...categories] );
    // setCategories( cat => [...cat,'valorant'] );
  }
  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory 
          // setCategories = { setCategories } 
          onNewCategory = { event => onAddCategory (event) }
          
        />

        {/* Listado de gif */}
        {/* <button onClick={onAddCategory}>Agregar</button> */}
      
        { 
            categories.map( category => ( 
              <GifGrid 
                key={category} 
                category={category}
              /> 
            ) )
        }
        {/* <li>123</li> */}
        
      

          {/* Gif Item */}

    </>
  )
}
