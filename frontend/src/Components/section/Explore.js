import React from 'react'

const Explore = () =>
{
    return (
        <div className="explore-section">
            <h3 className='explore-title'>Explore More..</h3>
            <div className='explore-box__container'>
                <div className="explore-box">
                    <img src="https://blog.hubspot.com/hubfs/assets/hubspot.com/web-team/WBZ/HubSpot%20Media/Blog%202021/Images/modules/learning-paths/ig-marketing.jpg" alt="Topic 1" className="explore-image" />
                    <h3 className="explore-topic">Instagram Marketing</h3>
                </div>
                <div className="explore-box">
                    <img src="https://blog.hubspot.com/hubfs/assets/hubspot.com/web-team/WBZ/HubSpot%20Media/Blog%202021/Images/modules/learning-paths/customer-retention.jpg" alt="Topic 2" className="explore-image" />
                    <h3 className="explore-topic">
                        Customer Retention</h3>
                </div>
                <div className="explore-box">
                    <img src="https://blog.hubspot.com/hubfs/assets/hubspot.com/web-team/WBZ/HubSpot%20Media/Blog%202021/Images/modules/learning-paths/email-marketing.jpg" alt="Topic 3" className="explore-image" />
                    <h3 className="explore-topic">
                        Email Marketing</h3>
                </div>
            </div>
        </div >
    )
}

export default Explore
