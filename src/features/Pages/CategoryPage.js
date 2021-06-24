import React from 'react'
import '../styles/CategoryPage.css';
import Cards from './Cards'

function CategoryPage() {
  return (
    <div className="Container">
      <div className="Products-Title">
        <h1>Our Products Categories</h1>
      </div>
      <div className="Categories-Products">
        <div className="Categories">
          <h3 className="Category-Title">Category</h3>
          <button>Women Clothing</button>
          <button>Men Clothing</button>
        </div>
        <div className="Cards-Container">
          <Cards />
        </div>
      </div>
    </div>
  )
}

export default CategoryPage;
