@extends('master')
@section('main')
  {{-- <main-slider class="container" id="mainSlider"></main-slider> --}}
  <div id="mainSlider" class="container">
    <div id="mainSliderSplide" class="splide main-slider-splide">
      <div class="splide__track">
          <ul class="splide__list">
            <li class="splide__slide">
              <img 
                class="w-100 img-fluid"
                src="${imageFirst}" 
                alt="obat 1" 
              />
            </li>
            <li class="splide__slide">
              <img 
                class="w-100 img-fluid"
                src="${imageSecond}" 
                alt="obat 2" 
              />
            </li>
            <li class="splide__slide">
              <img 
                class="w-100 img-fluid"
                src="${imageThird}" 
                alt="obat 3" 
              />
            </li>
          </ul>
      </div>
    </div>
  </div>


  


  {{-- <product-slider 
    img="https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=230&w=150" 
    title="Multivitamin"
  >
  </product-slider>
  <product-slider 
    img="https://images.pexels.com/photos/3683100/pexels-photo-3683100.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=230&w=150"
    title="Obat-Obatan Herbal"
  >
  </product-slider> --}}

  {{-- <div>
    <h2 class="fw-bold container">${this.title}</h2>
    <div id="multivitaminSlider" class="splide product-slider">
      <div class="splide__track">
        <ul class="splide__list container">
          <li class="splide__slide">
            <article>
              <a href="#product">
                <img src="${this.src}" />
                <div class="p-3">
                  <h3 class="title">Lorem ipsum dolor amet</h3>
                  <p class="price">RP 20.000</p>
                  <p class="city">Depok</p>
                </div>
              </a>
            </article>
          </li>
          <li class="splide__slide">
            <article>
              <a href="#product">
                <img src="${this.src}" />
                <div class="p-3">
                  <h3 class="title">Lorem ipsum dolor amet</h3>
                  <p class="price">RP 20.000</p>
                  <p class="city">Depok</p>
                </div>
              </a>
            </article>
          </li>
          <li class="splide__slide">
            <article>
              <a href="#product">
                <img src="${this.src}" />
                <div class="p-3">
                  <h3 class="title">Lorem ipsum dolor amet</h3>
                  <p class="price">RP 20.000</p>
                  <p class="city">Depok</p>
                </div>
              </a>
            </article>
          </li>
        </ul>
      </div>
    </div>
  </div> --}}

  <script src="{{ asset('js/MainSlider.js') }}"></script>    
@endsection