
import React from 'react'
import Field from './components/Form/Field';
import Form from './components/Form';

function FormExample () {

  const onSubmit = (data) => console.log(data);
  const onError = (errors, e) => console.log(errors);

  return (
      <div style={{width: '500px', margin: 32}}>
        <Form  onSubmit={onSubmit} onError={onError} >
          <Field.Input name={'name'} tip={'Name shown in the dashboard'} rules={{required: 'Enter some value'}} label={'First Name'}></Field.Input>
          <Field.Input name={'lastname'}
            rules={{
              required: 'Enter some value',
              minLength: {
                value: 6,
                message: 'Minimum 6 char needed'
              }
            }}
            label={'Last Name'}></Field.Input>
          <button style={{width: '200px', height: '32px'}}>Submit</button>
        </Form>
      </div>
  )
}

export default FormExample
