import React from 'react';
import PropTypes from 'prop-types';

import { StyledInput, InputElement, StyledIcon } from './Styles';

const Input = ({ icon, className, filter, onChange, register, name, rules = {}, ...inputProps }) => {

  return (

    <StyledInput className={className}>
      {/* {icon && <StyledIcon type={icon} size={15} />} */}
      <InputElement ref={register(rules)} name={name} {...inputProps}  hasIcon={!!icon} />
    </StyledInput>
  );
// };
};

const propTypes = {
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  icon: PropTypes.string,
  invalid: PropTypes.bool,
  filter: PropTypes.instanceOf(RegExp),
  onChange: PropTypes.func,
};

const defaultProps = {
  className: undefined,
  value: undefined,
  icon: undefined,
  invalid: false,
  filter: undefined,
  onChange: () => {},
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
