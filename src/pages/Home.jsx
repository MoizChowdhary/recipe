import React from 'react'

const Home = () => {
  return (
    <div>
     <img src="/Biryani.webp" class="img-fluid w-100 pt-1" alt="..."/ >
     <div class="row row-cols-1 row-cols-md-2 g-4 m-2">
  <div class="col">
    <div class="card">
      <img src="/Biryani.webp" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Chicken Biryani</h5>
        <p class="card-text"> A flavorful rice dish cooked with spices, meat (chicken, mutton, or fish), and aromatic herbs.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="/angara.jpg" class="card-img-top" alt="..."/ >
      <div class="card-body">
        <h5 class="card-title">Angara</h5>
        <p class="card-text">A spicy, smoky grilled chicken dish with bold masala flavors.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="/gulab.png" class="card-img-top" alt="..."/ >
      <div class="card-body">
        <h5 class="card-title">Gulab jamun</h5>
        <p class="card-text">Soft, deep-fried milk-based dumplings soaked in sweet rose-flavored syrup.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="/ice cream1.jpg" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Ice Cream</h5>
        <p class="card-text"> A frozen dessert made from dairy, sugar, and flavors like vanilla, chocolate, or fruit.</p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Home
