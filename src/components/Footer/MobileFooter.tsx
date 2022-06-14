import { Category, Facebook, Favorite, Home, Instagram, Person} from '@material-ui/icons';
import React from 'react';
import { MobileStyle } from './FooterStyle';
const MobileFooter = () => {
  return (
    <MobileStyle>
        <div>
            <Home/>
            <p>Home</p>
        </div>
        <div>
            <Category/>
            <p>Category</p>
        </div>
        <div>
            <Favorite/>
            <p>Favourite</p>
        </div>
        <div>
        <Person />
            <p>Account</p>
        </div>
    </MobileStyle>
  );
};

export default MobileFooter;
