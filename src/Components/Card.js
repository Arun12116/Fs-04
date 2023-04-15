import React from 'react'
import "./Card.css"
const Card = () => {
    return (
        <>
            <div className="card-Container">
                <div className="main-Card">
                    <div className="Card">
                        <div className="img">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/640px-Outdoors-man-portrait_%28cropped%29.jpg" alt="" />
                        </div>
                        <div className="pargraph">
                            <div className="header">
                                <div className="name">
                                    <h1>Karan</h1>
                                    <p>Front-end Developer</p>

                                </div>
                            </div>
                            <div className="list">

                                <div className="list1">
                                    <h2>20</h2>
                                    <li>shoot</li>

                                </div>
                                <div className="list2">
                                    <h2>20</h2>
                                    <li>Following</li>
                                </div>
                                <div className="list3">
                                    <h2>20</h2>
                                    <li>Followers</li>

                                </div>


                            </div>
                        </div>


                    </div>

                </div>
            </div>

        </>
    )
}

export default Card