import styled from 'styled-components';

import colors from '../../../../styles/colors';

const Button = styled.button`
  border-radius: .3rem !important;
  font-size: 1.5rem !important;
  color: ${colors.white};
  transition: .3s;
  background-color: ${colors.yellow};
  margin-top: 1rem;
  width: 100%;

  :active {
    background-color: ${colors.dark};
    color: ${colors.white} !important;
  }

  :hover {
    color: ${colors.dark};
    transform: scale(1.01) !important;
  }

  ::-moz-selection {
    color: ${colors.white};
    background: transparent;
  }

  ::selection {
    color: ${colors.white};
    background: transparent;
  }
`;

export default Button;
