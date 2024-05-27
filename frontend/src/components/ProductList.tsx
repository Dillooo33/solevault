import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface Shoe {
  id: number;
  name: string;
  price: number;
  image: string;
}

const HomePage: React.FC = () => {
  const [shoes, setShoes] = useState<Shoe[]>([]);

  // Starta databasen med npm run dev, i backend mappen.
  // Eftersom att vår get endpoint konverterar vår databas till json så kan vi köra en fetch på själva databasen
  useEffect(() => {
    axios.get('http://localhost:8080/api/shoes')
      .then(response => {
        setShoes(response.data);
      })
      .catch(error => {
        console.error('Fel vid hämtning av skorna!', error);
      });
  }, []);

  return (
    <div className="container">
      <h2>Alla Skor</h2>
      <div className="shoe-list">

        {/* Mappar / Renderar ut alla skor i databasen */}
        {shoes.map((shoe) => (
          <div key={shoe.id} className="shoe-card">
            <Link to={`/shoe/${shoe.id}`}>
              <img src={shoe.image} alt={shoe.name} className="shoe-image" />
              <h3 className="shoe-name">{shoe.name}</h3>
              <p className="shoe-price">{shoe.price} Kr</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
