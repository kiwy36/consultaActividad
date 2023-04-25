import React from 'react'
import ItemList from '../ItemList/ItemList'
import {products} from '../../mocks/products'

const ItemListContainer = () => {
    return (
        <div>
            <h1>Productos</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer
