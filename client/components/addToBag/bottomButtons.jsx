import React, { useContext } from 'react';
import styled from 'styled-components';
import WishListButton from './wishListButton';
import AddToBagButton from './addToBagButton';
import MembershipLink from '../membershipLink/membershipLink';
import ProductContext from '../context/productContext';

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  box-sizing: border-box;
`;

function BottomButtons() {
  const {
    modalView,
    setModalView,
    // currentShoe,
    // selectedSize,
    // setCart,
  } = useContext(ProductContext);
  let label;
  if (modalView.checkoutAdding) {
    label = 'Adding...';
  } else if (modalView.checkoutShow) {
    label = 'Added!';
  } else {
    label = 'Add to bag';
  }

  async function addShoeToCart() {
    // const selected = {
    //   name: currentShoe.name,
    //   itemId: currentShoe.id,
    //   color: currentShoe.color,
    //   price: currentShoe.price,
    //   photoUrl: currentShoe.photoUrl,
    //   size: selectedSize.size,
    //   stock: selectedSize.stock,
    // };
    // const res = await axios.post('/api/cart', selected);
    // setCart(res.data);

    setModalView({ checkoutAdding: true });
    setTimeout(() => setModalView({ checkoutAdding: false, checkoutShow: true }), 1200);
  }

  return (
    <>
      <ButtonsContainer>
        <AddToBagButton label={label} handleClick={addShoeToCart} icon={modalView} />
        <WishListButton />
      </ButtonsContainer>
      <MembershipLink />
    </>
  );
}

export default BottomButtons;
