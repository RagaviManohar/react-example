/* eslint-disable import/no-anonymous-default-export */
import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { uniqueId } from 'lodash'
import { ErrorMessage } from '@hookform/error-message'

const Input = forwardRef(({ type, ...props }, ref) => (
  <input ref={ref} type={type} {...props} />
))

Input.propTypes = {
  type: PropTypes.string
}

Input.defaultProps = {
  type: 'text'
}

const Textarea = forwardRef(({ name, ...props }, ref) => (
  <textarea ref={ref} name={name} {...props} />
))

Textarea.propTypes = {
  type: PropTypes.string
}

Textarea.defaultProps = {
  type: 'text'
}

const generateField = FormComponent => {
  const FieldComponent = forwardRef(({
    register,
    rules,
    error,
    name,
    errors,
    ...props
  }, ref) => {
    const fieldId = uniqueId('form-field-')

    console.log('errors===', { errors })

    return (
      <>
        <FormComponent
          id={fieldId}
          name={name}
          ref={ref}
          {...register(name, { ...rules })}
          {...props}
        />

        {errors[name] &&
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p data-testid={`${name}Error`}>{message}</p>
            )}
          />
        }
      </>
    )
  })

  FieldComponent.displayName = 'FieldComponent'

  FieldComponent.propTypes = {
    name: PropTypes.string.isRequired,
    register: PropTypes.func,
    error: PropTypes.string,
    errors: PropTypes.object,
    rules: PropTypes.object
  }

  FieldComponent.defaultProps = {
    error: undefined,
    errors: {},
    rules: {}
  }

  return FieldComponent
}

export default {
  Input: generateField(Input),
  Textarea: generateField(Textarea)
}
