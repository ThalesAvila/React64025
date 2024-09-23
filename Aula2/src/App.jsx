import React from 'react';
import './App.css';
import ProductJSX from './Product';

const retornoAPI = [
  {
    name: 'Curso JS: Coderhouse',
    price: 'Preço: R$109.00',
  },
  {
    name: 'Curso React: Coderhouse',
    price: 'Preço: R$109.00',
  },
  {
    name: 'Curso HTML/CSS: Coderhouse',
    price: 'Preço: R$109.00',
  },
  {
    name: 'Curso UX/UI: Coderhouse',
    price: 'Preço: R$109.00',
  },
  {
    name: 'Curso Data: Coderhouse',
    price: 'Preço: R$109.00',
  },
];

function App() {
  return (
    <>
      {retornoAPI.map((curso) => (
        <ProductJSX name={curso.name} price={curso.price} />
      ))}
      {/* <ProductJSX name="Curso JS: Coderhouse" price="Preço: R$109.00" />
      <ProductJSX name="Curso React: Coderhouse" price="Preço: R$109.00" />
      <ProductJSX name="Curso HTML/CSS: Coderhouse" price="Preço: R$109.00" />
      <ProductJSX name="Curso UX/UI: Coderhouse" price="Preço: R$109.00" />
      <ProductJSX name="Curso Data: Coderhouse" price="Preço: R$109.00" /> */}
    </>
  );
}

export default App;
