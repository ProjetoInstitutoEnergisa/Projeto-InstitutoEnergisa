import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

const SoliciteCard = ({ cardTitle, subTitle, cidadeTitle, data }) => {
  return (
    <Container>
      <div>
        <span>{cardTitle}</span>
        <small>{subTitle}</small>
      </div>
      <h4>{cidadeTitle}</h4>
      <h4>Status</h4>
      <h4>{data}</h4>
    </Container>
  );
};

SoliciteCard.propTypes = {
  cardTitle: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  cidadeTitle: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
};

export default SoliciteCard;
