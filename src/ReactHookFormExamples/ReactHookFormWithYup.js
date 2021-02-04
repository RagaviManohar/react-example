import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const validationSchema = yup.object().shape({
  instituteName: yup
    .string()
    .trim()
    .required('Institute Name required'),
  students: yup.array().of(
    yup.object().shape({
      email: yup
        .string()
        .email('Enter valid email')
        .required('Email required'),
      fullName: yup
        .string()
        .trim()
        .required('Full Name required'),
    })
  ),
});

export const ReactHookFormWithYup = () => {
  const [studentsLength, setStudentsLength] = useState(1);

  const { handleSubmit, register, trigger, errors } = useForm({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });

  /**
   * This will trigger validation for entire form fields inside fieldset
   */
  const onAddUser = async () => {
    const isFormValid = await trigger('students');

    if (isFormValid) setStudentsLength(2);
  };

  const onFormSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div className="m-4">
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div className="form-group my-4 mx-4 d-flex align-items-start justify-content-center">
          <label className="py-2 px-2" htmlFor="instituteName">
            Institute Name
          </label>

          <div className="d-flex flex-column">
            <input
              type="text"
              className="form-control w-100"
              name="instituteName"
              placeholder="Enter Institute Name"
              ref={register}
            />

            <ErrorMessage
              errors={errors}
              name="instituteName"
              render={({ message }) => <p className="text-danger">{message}</p>}
            />
          </div>
        </div>

        {Array(...new Array(studentsLength)).map((item, index) => {
          const arrayName = 'students';
          const fieldName = `${arrayName}[${index}]`;

          return (
            <fieldset name={fieldName} key={index}>
              <div className="border w-50 mx-auto my-2">
                <p> User {index + 1}</p>
                {/* This will form an array automatically in the html itself */}
                <div className="form-group my-4 mx-4 d-flex align-items-start justify-content-center">
                  <label className="py-2 px-2" htmlFor={`${fieldName}.email`}>
                    Email address
                  </label>

                  <div className="d-flex flex-column">
                    <input
                      type="text"
                      className="form-control w-100"
                      name={`${fieldName}.email`}
                      placeholder="Enter Email"
                      ref={register}
                    />

                    <ErrorMessage
                      errors={errors}
                      name={`${fieldName}.email`}
                      render={({ message }) => (
                        <p className="text-danger">{message}</p>
                      )}
                    />
                  </div>
                </div>

                <div className="form-group my-4 mx-4 d-flex align-items-start justify-content-center">
                  <label
                    className="py-2 px-2"
                    htmlFor={`${fieldName}.fullName`}
                  >
                    Full Name
                  </label>

                  <div className="d-flex flex-column">
                    <input
                      type="text"
                      className="form-control w-100"
                      name={`${fieldName}.fullName`}
                      placeholder="Enter Full Name"
                      ref={register}
                    />

                    <ErrorMessage
                      errors={errors}
                      name={`${fieldName}.fullName`}
                      render={({ message }) => (
                        <p className="text-danger">{message}</p>
                      )}
                    />
                  </div>
                </div>
              </div>
            </fieldset>
          );
        })}

        <button type="button" onClick={() => onAddUser()}>
          Add User
        </button>

        <button className="mt-4" type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default ReactHookFormWithYup;
