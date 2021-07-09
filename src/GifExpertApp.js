import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
export const GifExpertApp = () => {

    // const categories = ['Sol', 'Luna', 'Marte'];
    const [categories, setCategories] = useState(['Sol']);

  /*  const handleAdd = (e) => {
        //setCategories(...categories, 'Tierra');
        setCategories(cats => [...categories, 'Tierra']);
    }*/

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />

            <AddCategory setCategories={setCategories} />

            <ol>
                { 
                    categories.map( (category) => (
                        <GifGrid 
                            key={category} 
                            category={category} 
                        />//<li key={category}> { category }</li>
                    ))
                }
            </ol>
        </>
    )
}
