import React from 'react';

import { StyledIcon } from './Styles';
import { ReactComponent as FireFoxIcon } from '../../../assets/svg/firefox.svg'
import { ReactComponent as TorIcon } from '../../../assets/svg/tor.svg'

const icons = {
  firefox: FireFoxIcon,
  tor: TorIcon,
}

const Icon = ({ type }) => (
  <StyledIcon>
    {React.createElement(icons[type])}
  </StyledIcon>
)

export default Icon;
