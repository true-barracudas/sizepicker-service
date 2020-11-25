import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ExitButton from './checkout/exitButton';

const Background = styled.div`
  display: flex; /*${(props) => (props.show ? 'flex' : 'none')};*/
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto;
`;

const ClickableBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: ${(props) => (props.show ? '1' : '0')};
  transition: opacity .2s;
  z-index: -1;
`;

const ModalContent = styled.div`
  position: relative;
  background-color: white;
  width: 50%;
  max-width: 90vw;
  max-height: 92vh;
  margin: auto;
  padding: 20px;
  border: 1px solid black;
  box-sizing: border-box;
  opacity: ${(props) => (props.show ? '1' : '0')};
  transition: opacity .45s;
  transition-delay: .1s;
  z-index: 0;
`;

const Title = styled.h5`
  font-family: AdineuePRO,Helvetica,Arial,sans-serif;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: 30px;
  margin: 0;
  z-index: 2;
`;

const ModalContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`;

function BaseModal({
  title, show, handleExit, children,
}) {
  return (
    <Background show={show}>
      <ModalContent show={show}>
        <ModalContentWrapper>
          <Title>{title}</Title>
          {children}
        </ModalContentWrapper>
        <ExitButton handleClick={handleExit} />
      </ModalContent>
      <ClickableBackground show={show} onClick={handleExit} />
    </Background>
  );
}

BaseModal.propTypes = {
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  handleExit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default BaseModal;

export {
  Background,
  ClickableBackground,
  ModalContentWrapper,
  ModalContent,
  Title,
};