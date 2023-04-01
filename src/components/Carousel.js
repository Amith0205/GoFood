import React from 'react'

export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-caption d-none d-md-block" style={{"zIndex":10}}>
                            <form className="form-inline">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success my-2 my-sm-0 bg-success text-white" type="submit">Search</button>
                            </form>
                        </div>
                <div className="carousel-inner" id="carousel">
                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/900x700/?food" className="d-block w-100" alt="..." style={{filter:"brightness(30%)"}} />
                       
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/300×300" className="d-block w-100" alt="..." style={{filter:"brightness(30%)"}}/>
                       
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/300×300" className="d-block w-100" alt="..." style={{filter:"brightness(30%)"}} />
                        
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
