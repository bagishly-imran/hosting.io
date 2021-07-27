import React from 'react'
import { useSelector } from 'react-redux';
import '../Sass/Index.scss';


const IndexFeatures = () =>  {    

    const myFeatures = useSelector(state => state.myFeatures);

    return (
        <div className = "features-caption container">

            <h2 className = "features-about">Most amazing features</h2>

            <div className = "features-content  nav justify-content-around" id = "myFeatures">

                {
                    myFeatures.map(myFeature => {
                        return(
                            
                            <div className ="my-features col-12 col-sm-6 col-md-4" key = {myFeature.id}> 
                                <img  src = {myFeature.img}  alt ="services"/> 
                                <a href = "/packages" class = "my-feature-btn" id = "myFeatures">{myFeature.title}</a>   
                                <p>{myFeature.content}</p> 

                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default IndexFeatures;
