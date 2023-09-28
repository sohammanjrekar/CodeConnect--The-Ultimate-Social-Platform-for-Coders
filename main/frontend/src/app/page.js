// pages/index.js
'use client'
import { useEffect, useState } from 'react';
import { fetchItems } from '../utils/api';

export default function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchItems();
        setItems(data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
