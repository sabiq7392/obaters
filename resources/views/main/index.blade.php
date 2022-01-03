@extends('master')
@section('main')
  {{-- <main-slider class="container" id="mainSlider"></main-slider> --}}
  <div class="d-grid gap-5">
    <div id="mainSlider" class="splide container">
      <div class="splide__track">
          <ul class="splide__list">
            @foreach($trendings as $trending)
            <li class="splide__slide">
              <img 
                class="w-100 img-fluid"
                src="{{ $trending->image }}" 
                alt="{{ $trending->name }}" 
              />
            </li>
            @endforeach
          </ul>
      </div>
    </div>
  
    <article class="product container d-grid gap-5">
      @foreach ($products as $product)
        <section>
          <h2 class="fw-bold">{{ $product['title'] }}</h2>
          <div class="splide product-slider">
            <div class="splide__track">
              <ul class="splide__list container">
                @for ($i = 0; $i < 5; $i++)
                  <li class="splide__slide">
                    <a href="#product">
                      <article>
                          <img 
                            src="{{ $product['image'] }}" 
                            alt="" 
                          />
                          <div class="p-3">
                            <h3 class="title">Lorem ipsum dolor amet</h3>
                            <p class="price">RP 20.000</p>
                            <p class="city">Depok</p>
                          </div>
                      </article>
                    </a>
                  </li>
                @endfor
              </ul>
            </div>
          </div>
        </section>
      @endforeach
    </article>
  </div>
@endsection