import {GifGridItem} from './GifGridItem';
import {useFetchGifs} from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {


    const {loading, data:images} = useFetchGifs(category);
    
    return (
        <>
            <h3>{category}</h3>

            <span className="animate__animated animate__flash">{loading && <p>Loading</p>}</span>

            <div className="cardGrid">
                {
                    images.map((image) => (
                        <GifGridItem 
                        key={image.id} 
                        {...image}
                        />
                    ))
                }
            </div>
        </>

    )
}
