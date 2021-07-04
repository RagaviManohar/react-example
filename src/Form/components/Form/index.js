import React from "react";
import { useForm } from "react-hook-form";

export default function Form({ defaultValues, children, onSubmit, onError }) {
  const { handleSubmit, register, errors } = useForm({
    defaultValues,
    mode: "onChange",
  });

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      {Array.isArray(children)
        ? children.map((child) => {

          if(child.props.name) {
            return React.cloneElement(child, {
              ...{
                ...child.props,
                register,
                errors,
                key: child.props.name
              }
            })
          } else {
            return child;
          }
        })
        : children}
    </form>
  );
}
