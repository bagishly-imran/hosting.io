import React from 'react';
import { useSelector } from 'react-redux';


const About = () => {

    const abouts = useSelector(state => state.abouts);

    return(
        <div className = "about-content">

            {
                abouts.map(about => {
                    return(
                        <div className ="about-one about-in container" key = {about.id}>
                            <div className = "about-caption">
                                <h2>{about.title}</h2>
                                <p>{about.paragraph}</p>
                                <ul>
                                    <li>{about.packageList[0].pcList_1}</li>
                                    <li>{about.packageList[0].pcList_2}</li>
                                    <li>{about.packageList[0].pcList_3}</li>
                                </ul>
                            </div>
            
                            <img src={about.img} className ="image-fluid" alt="about"/>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default About;