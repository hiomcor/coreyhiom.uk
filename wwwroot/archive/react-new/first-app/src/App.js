import React, { Component } from 'react';
import * as Icon from 'react-feather';
import ScrollMagic from 'scrollmagic';
import './App.css';

let menus = ['New','Women','Men','Girls','Boys','Plus size','Edits']
let footerMenu = ['Help','My Purchases','Returns','Shops','Gift voucher','Apps','Company','Franchises','Affiliate','Press']
let menMenu = [
    {
        list_name: null,
        menus: [
            'Help','My Purchases','Returns','Shops','Gift voucher','Apps','Company','Franchises','Affiliate','Press'
        ]
    }
]
let socialLinks = [
    {
        type: 'twitter',
        icon_type: 'Twitter',
        url: 'https://twitter.com/MANGO_Man'
    },{
        type: 'facebook',
        icon_type: 'Facebook',
        url: 'https://www.facebook.com/MangoManCollection'
    },{
        type: 'youtube',
        icon_type: 'Youtube',
        url: 'http://www.youtube.com/user/mangoFashion/'
    },
]
let fakeServerData = {
    items: [
        {
            idno: '18853',
            title: 'Fine Knit Polo',
            cat_title: 'Polo Shirt',
            image: 'https://st.mngbcn.com/rcs/pics/static/T3/fotos/S1/33060661_08.jpg?ts=1523551149526',
            color: 'Beige',
            size: 'M',
            price: 29.99
        },
        {
            idno: '12916',
            title: 'Linen Trousers',
            cat_title: 'Trousers',
            image: 'https://st.mngbcn.com/rcs/pics/static/T2/fotos/S1/21085721_06.jpg?ts=1519310090376',
            color: 'Light/Pastel Grey',
            size: '32',
            price: 59.99
        },
        {
            idno: '11843',
            title: 'Cotton Overshirt',
            cat_title: 'Shirt',
            image: 'https://st.mngbcn.com/rcs/pics/static/T2/fotos/S1/23030383_37.jpg?ts=1511890641560',
            color: 'Khaki',
            size: 'M',
            price: 25.99
        }
    ]
}
let cartTotal = 0

class PreBanner extends Component{
    render() {
        return(
            <div className="pre-banner-container">
                <span>Free delivery from £30 and free returns <a>+ info</a></span>
            </div>
        );
    }
};

class ContentMenu extends Component{
    render() {
        let socialItems = socialLinks.map((socialItem) => {
            return (
                <a href={socialItem.url}>
                    <Icon.Facebook size={24}/>
                </a>
            );
        })
        return(
            <div id="trigger1" className="social-links">{socialItems}</div>
        );
    }
};

class SocialIcons extends Component{
    render() {
        let socialItems = socialLinks.map((socialItem) => {
            return (
                <a href={socialItem.url}>
                    <Icon.Facebook size={24}/>
                </a>
            );
        })
        return(
            <div className="social-links">{socialItems}</div>
        );
    }
};

class FooterMenu extends Component{
    render() {
        let footerMenuItems = footerMenu.map((footerMenuItem) => {
            return <li>{footerMenuItem}</li>
        })
        return(
            <ul>{footerMenuItems}</ul>
        );
    }
};

class Newsletter extends Component{
    render() {
        return(
            <div className="newsletter-container">
                <span>Sign up for our newsletter and get 10% off</span>
                <input type="text" placeholder="Enter your e-mail"></input>
            </div>
        );
    }
};

class ShoppingCart extends Component{
    render() {
            var cartItems = fakeServerData.items.map((cartItem) => {
                cartTotal += cartItem.price
                return (
                    <div className="cart-item">
                        <img src={cartItem.image} width="50px" height="auto" alt={cartItem.title}/>
                        <div className="item-data">
                            <span className="item-title">{cartItem.cat_title}</span>
                            <span>Colour: {cartItem.color}</span>
                            <span>Size: {cartItem.size}</span>
                            <span>Qty: 1</span>
                        </div>
                        <div className="item-price-remove">
                            <span>£{cartItem.price}</span>
                            <Icon.Trash2 size={14}/>
                        </div>
                    </div>
                );
            })
        return (
            <div className="cart-box">
                <div className="cart-items">{ cartItems }</div>
                <div className="cart-total">
                    <span>Total:</span>
                    <span>£{ cartTotal }</span>
                </div>
                <div className="cart-delivery">
                    <span>Delivery:</span>
                    <span>Free</span>
                </div>
                <div className="checkout-btn">Checkout</div>
            </div>
        )
    }
};

class NavSubMenu extends Component{
    render() {
            var menuList = menus.map((menuItem) => {
                return <li>{menuItem}</li>;
            })
        return (
            <div className="sub-menu-container">
                <div className="sub-menu-content"><ul>{ menuList }</ul></div>
            </div>)
    }
};

class NavMenu extends Component{
    render() {
            var menuList = menus.map((menuItem) => {
                return <li>{menuItem}</li>;
            })
        return <div className="nav-bar"><ul>{ menuList }</ul></div>
    }
};

class NavTools extends Component{
    render() {
        return(
            <div className="nav-tools">
                <span><Icon.Search size={14}/> Search</span>
                <span className="sign-in">Sign in</span>
                <span><ShoppingCart/><Icon.ShoppingCart size={16}/></span>
            </div>
        );
    }
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1 className="logo">SHOP</h1>
          <NavMenu/>
          <NavTools/>
        </header>
        <NavSubMenu/>
        <PreBanner/>
        <div className="banner"></div>
        <div className="container">
            <div className="title"><h1>New</h1></div>
            <ContentMenu />
        </div>
        <footer>
            <Newsletter/>
            <FooterMenu/>
            <SocialIcons/>
        </footer>
      </div>
    );
  }
}

export default App;
