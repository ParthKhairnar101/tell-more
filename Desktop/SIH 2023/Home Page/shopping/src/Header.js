import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom"
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
function Header() {
  const[{basket,user},dispatch]=useStateValue();

  const handleAuthentication= () =>{
    if(user){
      auth.signOut();
    }
  }
  return (
    <div className='header'>
      <Link to="/">
      <img 
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=''
      />
      </Link>
      
      <div className="header__search">
        <input
        className="header_searchInput" type="text"/>
        <SearchIcon
        className="header__searchIcon"/>
        {/*Logo*/}
        
      </div>
      <div className="header__nav">
        <Link to={!user && '/login'}>
        <div onClick={handleAuthentication} className='header__option'>
          <span className='header__optionLineOne'>
            Hello _
            {user ?
            user.email :'Guest'
          }
            
          </span>
          <span className='header__optionLineTwo'>
            {user ?
          'Sign Out' : 'Sign In'
            }
          </span>
         </div>
         </Link>

         <Link to='/orders'>
        <div className='header__option'>
          <span className='header__optionLineOne'>Returns</span>
          <span className='header__optionLineTwo'>& Orders</span>
        </div>
        </Link>

        <Link to = 'https://www.primevideo.com/offers/nonprimehomepage/ref=dvm_pds_amz_in_as_s_gm_35_mkw_sSRApua0f-dc?gclid=CjwKCAjw6p-oBhAYEiwAgg2PglRST1IxlpFhbWqjaymOaqld9aRZoCJoZ5THt8vzFM1-9-Gs5JGqUxoCRm8QAvD_BwE&mrntrk=pcrid_657901934528_slid__pgrid_84577172368_pgeo_9300146_x__adext__ptid_kwd-457550287913'>
        <div className='header__option'>
          <span className='header__optionLineOne'>Your</span>
          <span className='header__optionLineTwo'>Prime</span>
         </div>
         </Link>
         <Link to="/checkout">
         <div className='header__optionBasket'>
          <ShoppingBasketIcon/>
          <span className='header_optionLineTwo header__basketCount'>
            {basket?.length}
          </span>
         </div>
         </Link>
        </div>
    </div>
  )
}

export default Header
