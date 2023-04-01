import React, {useState, useEffect} from 'react'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Home() {
    const [search,setSearch]=useState('');
    const [foodCat, setfoodCat] = useState([]);
    const [foodItem, setfoodItem] = useState([]);

    const loadData = async () => {
        let response = await fetch("http://localhost:5000/api/displayData", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        response = await response.json();
        setfoodItem(response[0]);
        setfoodCat(response[1]);
        // console.log(response);

    }
    useEffect(() => {
        loadData();
    }, [])

    return (
        <div>
            <Navbar/>            
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-caption d-none d-md-block" style={{"zIndex":10}}>
                            <div className="form-inline justify-content-center">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}} />                                
                         
                            </div>
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
            <div className='container'>
                {
                foodCat !== [] ? foodCat.map(Cat => {
                    return (
                        <div className="row mb-3">
                            <div className='fs-3 m-3'>
                                {
                                Cat.CategoryName
                            }</div>
                            <hr/> {
                            foodItem !== [] ? foodItem.filter((item) => 
                                 {
                                    return ((item.CategoryName === Cat.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase())))
                                 }
                            ).map((fItem) => {
                                return (
                                    <div className='col-12 col-md-6 col-lg-3'>
                                        <Card data={fItem}/>
                                    </div>
                                )
                            }) : ""
                        } </div>
                    )
                }) : ""
            } </div>

            <Footer/>
        </div>
    )
}
