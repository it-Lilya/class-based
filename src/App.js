import './App.css';
import ClassBased from './components/ClassBased';
import React from 'react';

export default class App extends React.Component {
  render() {
    const item = {
      brand: 'Tiger of Sweden',
      title: 'Leonard coat',
      description: 'Minimalistic coat in cotton-blend',
      descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
      price: 399,
      currency: '£'
    };  
  return <ClassBased brand = {item.brand}
    title = {item.title}
    description = {item.description}
    descriptionFull = {item.descriptionFull}
    price = {item.price}
    currency = {item.currency} />
  }
}
