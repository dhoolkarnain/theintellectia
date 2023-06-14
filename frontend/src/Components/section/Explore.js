import React from 'react'
import World from './image/world.png'
import Thinking from './image/creativeThinking.png'
import Reading from './image/reading.png'

const Explore = () =>
{
    return (
        <div className="explore-section">
            <h3 className='explore-title'>Explore...</h3>
            <div className='explore-box__container'>
                <div className="explore-box">
                    <img src={World} alt="Topic 1" className="explore-image" />
                    <h3 className="explore-topic">World Wide Topics</h3>
                </div>
                <div className="explore-box">
                    <img src={Thinking} alt="Topic 2" className="explore-image" />
                    <h3 className="explore-topic">
                        ebook Available</h3>
                </div>
                <div className="explore-box">
                    <img src={Reading} alt="Topic 3" className="explore-image" />
                    <h3 className="explore-topic">
                        Anywhere Reading</h3>
                </div>
            </div>
        </div >
    )
}

export default Explore
