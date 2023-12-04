import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Menu = () => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await axios.get('/path-to/menuData.json'); // Update the path accordingly
        setMenuData(response.data);
      } catch (error) {
        console.error('Error fetching menu data:', error);
      }
    };

    fetchMenuData();
  }, []);

  return (
    <div>
      <h2>Menu</h2>
      {menuData.map(item => (
        <MenuItem key={item.id} {...item} />
      ))}
    </div>
  );
};

const MenuItem = ({ name, description, price }) => (
  <div>
    <h3>{name}</h3>
    <p>{description}</p>
    <p>Price: {price}</p>
  </div>
);

export default Menu;
