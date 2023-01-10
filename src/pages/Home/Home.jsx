import React, { useState, useEffect } from 'react';
import { OrderList } from 'primereact/orderlist';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
const item = [
  {
    id: 0,
    name: "GET Request",
    url: "getexppage"
  },
  {
    id: 1,
    name: "POST Request",
    url: "postexppage"
  },
  {
    id: 2,
    name: "PUT Request",
    url: "putexpPage"
  },
  {
    id: 3,
    name: "DELETE Request",
    url: "deleteexpPage"
  },
]
const Home = () => {
  const [products, setProducts] = useState(item);
  const navigate = useNavigate()
  const handleClick = (item) => {
    navigate("/" + item.url)
  }
  const itemTemplate = (item) => {
    return (
      <div className="product-item" onClick={() => handleClick(item)}>
        <div className="product-list-detail">
          <h5 className="mb-2">{item.name}</h5>
        </div>
      </div>
    );
  }
  return (
    <Wrapper>
      <div className="orderlist-demo">
        <div className="card">
          <OrderList value={products} header="List of Products" dragdrop listStyle={{ height: 'auto' }} dataKey="id"
            itemTemplate={itemTemplate} onChange={(e) => setProducts(e.value)}></OrderList>
        </div>
      </div>

    </Wrapper>
  )
};

const Wrapper = styled.div`
  .p-orderlist-controls{
    display: none;
  }
`


export default Home;
