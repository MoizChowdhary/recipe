import React from 'react'

const Home = () => {
  return (
    <div>
     <img src="/reciepebook.webp" class="img-fluid w-100 pt-1" alt="..."/ >
     <div class="row row-cols-1 row-cols-md-2 g-4 m-2">
  <div class="col">
    <div class="card">
      <img src="/th.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Chicken Biryani</h5>
        <p class="card-text"> Basmati rice layered with tender chicken pieces, slow-cooked with aromatic spices like cardamom, cinnamon, and saffron, creating a flavorful and hearty dish.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="/angara.jpg" class="card-img-top" alt="..."/ >
      <div class="card-body">
        <h5 class="card-title">Chicken Angara</h5>
        <p class="card-text">A spicy, smoky grilled chicken dish with bold masala flavors.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="/Chole puri.jpg" class="card-img-top" alt="..."/ >
      <div class="card-body">
        <h5 class="card-title">Chole Puri</h5>
        <p class="card-text">Chickpeas simmered in a flavorful masala, and Puri is a type of deep-fried, puffed bread made from whole wheat flour. </p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="/Pav-Bhaji.jpg" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Pav-Bhaji</h5>
        <p class="card-text"> A spiced mixture of mashed vegetables in a thick gravy served with bread</p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Home
