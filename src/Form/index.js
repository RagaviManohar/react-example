
import React from 'react'
import Field from './components/Form/Field';
import Form from './components/Form';
import { useAutoFocus } from '../custom-hooks';

function FormExample () {

  const onSubmit = (data) => console.log(data);
  const onError = (errors, e) => console.log(errors);
  const autoFocusedRef = useAutoFocus(true)

  return (
      <div style={{width: '500px', margin: 32}}>
        <Form defaultValues={{}} onSubmit={onSubmit} onError={onError} >
          <Field.Input ref={autoFocusedRef} icon={'firefox'} name={'name'} tip={'Name shown in the dashboard'} rules={{required: 'Enter some value'}} label={'First Name'}></Field.Input>
          <Field.Input name={'lastname'}
            icon="tor"
            rules={{
              required: 'Enter some value',
              minLength: {
                value: 6,
                message: 'Minimum 6 char needed'
              }
            }}
            label={'Last Name'}></Field.Input>
          <button style={{width: '200px', height: '32px', marginTop: '24px'}}>Submit</button>
        </Form>
      </div>
  )
}

export default FormExample
