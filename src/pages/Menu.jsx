import React from 'react'
import { MenuList } from '../helper/MenuList'

function Menu() {

    const menuItems = MenuList.map((menuItem, key) => {
        return (
            <div className='menuItem' key={key}>
            <div><img src={menuItem.image} alt={menuItem.name} /></div>
            <h3>{menuItem.name}</h3>
            <p>{menuItem.price} TL</p>
          </div>
        )
    })


  return (
    <div className="menu">
      <h1 className="menuTitle">
        Our Menu
      </h1>
      <div className="menuList">
        {menuItems}
      </div>
    </div>
  )
}

export default Menu
