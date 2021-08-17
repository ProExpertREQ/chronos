import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Card({ title, info, button }) {
  return (
    <Container>
      <div className="card-header">
        <h5 className="card-title">{title}</h5>
      </div>
      <div className="card-content">
        {info}
      </div>
      <div className="card-footer">
        {button}
      </div>
    </Container>
  );
}

Card.prototype.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
};
