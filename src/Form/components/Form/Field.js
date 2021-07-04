/* eslint-disable import/no-anonymous-default-export */
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { uniqueId, get } from 'lodash';
import Input from '../Input';

import { StyledField, FieldLabel, FieldTip, FieldError } from './Styles';

const propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  tip: PropTypes.string,
  error: PropTypes.string,
  name: PropTypes.string,
};

const defaultProps = {
  className: undefined,
  label: undefined,
  tip: undefined,
  error: undefined,
  name: undefined,
};

const generateField = FormComponent => {
  const FieldComponent = forwardRef(({ className, label, tip, error, name, errors, ...otherProps }, ref) => {
    const fieldId = uniqueId('form-field-');

    console.log(get(errors, name), 'error')
    return (
      <StyledField
        className={className}
        hasLabel={!!label}
        data-testid={name ? `form-field:${name}` : 'form-field'}
      >
        {label && <FieldLabel htmlFor={fieldId}>{label}</FieldLabel>}
        <FormComponent ref={ref} id={fieldId} invalid={!!get(errors, [name, 'message'])} name={name} {...otherProps} />
        {tip && <FieldTip>{tip}</FieldTip>}
        {get(errors, [name, 'message']) && <FieldError>{get(errors, [name, 'message'])}</FieldError>}
      </StyledField>
    );
  });

  FieldComponent.propTypes = propTypes;
  FieldComponent.defaultProps = defaultProps;

  return FieldComponent;
};

export default {
  Input: generateField(Input),
};
