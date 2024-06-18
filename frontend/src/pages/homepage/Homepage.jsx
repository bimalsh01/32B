import React, { useEffect } from 'react'
import { testApi } from '../../apis/Api'

const Homepage = () => {

  return (
    <>
      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://images.pexels.com/photos/2562992/pexels-photo-2562992.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>30% OFF on Leather Shoes</h5>
                <p>Best Quality Shoes imported from Alaska, USA</p>
              </div>
          </div>
          <div class="carousel-item">
            <img src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" alt="..."/>
              <div class="carousel-caption d-none d-md-block">
                <h5>Laptop for Sale</h5>
                <p>Best Quality Laptops from Apple</p>
              </div>
          </div>
          <div class="carousel-item">
            <img src="https://images.pexels.com/photos/60626/pexels-photo-60626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" alt="..."/>
              <div class="carousel-caption d-none d-md-block">
                <h5>Nice KeyBoard</h5>
                <p>
                  Best Quality Keyboards from Apple
                </p>
              </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

    </>
  )
}

export default Homepage