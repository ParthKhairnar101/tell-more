import React from 'react'
import "./Home.css"
import Product from './Product'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
          <img
            className='home__image'
            src="images/ayurveda.jpeg"
            alt=""
          />
            <div className='container'>
              <h1>Welcome to Medico</h1>
              <p>Your one-stop destination for all things Ayurveda.</p>
            </div>
        <div className="home__row">
          
          <Product
            id="12321341"
            title=" Tulsi: scientifically known as Ocimum sanctum or Ocimum tenuiflorum "
            price={19.79}
            rating={5}
            image="https://media.istockphoto.com/id/1175867030/photo/close-up-of-holy-basil-or-tulsi-leaves-ocimum-sanctum-isolate-on-white-background.jpg?s=612x612&w=0&k=20&c=8AB9GTIxcw6I_MiajI-MRBsqh2hRzDPuDWOOeV5BmXg="
            
          />
          
          <Product
            id="49538094"
            title="Eucalyptus: scientifically known as Eucalyptus teriticornis"
            price={26.49}
            rating={4}
            image="https://img.freepik.com/premium-photo/eucalyptus-leaves-isolated-white-background-three-green-eucalyptus-branches-white_99272-4039.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Bay Leaf: scientifically known as Laurus nobilis"
            price={8.99}
            rating={3}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQJ_pv4rkQWqSY4UFETDXP5BQFgeamP5J_fQ&usqp=CAU"
          />
          <Product
            id="23445930"
            title="Camphor: scientifically known as Cinnamomum camphora"
            price={13.86}
            rating={5}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsnwROcDChNHbe4SwzVlUjJV_OtUH8rWNaDw&usqp=CAU"
          />
          <Product
            id="3254354345"
            title="Giloy: scientifically known as Tinospora cordifolia"
            price={13.50}
            rating={4}
            image="https://t3.ftcdn.net/jpg/02/77/70/40/360_F_277704047_Ea9ArlOq72YQTLZKxehaB9l7NnnFnh8r.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Neem: scientifically known as Azadirachta indica"
            price={25.00}
            rating={4}
            image="images/neem.jpeg"
          />
        </div>
        </div>
    </div>
  )
}

export default Home
