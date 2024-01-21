/* eslint-disable no-unused-vars */
import React from 'react';
import { Formik, Form, Field } from 'formik';

const ProductForm = () => {
  return (
    <Formik
      initialValues={{ name: '', price: '' }}
      onSubmit={(values, { resetForm }) => {
        if (values.name.trim() !== '' && values.price.trim() !== '') {
          const newProduct = {
            name: values.name,
            price: parseFloat(values.price),
          };

        //   onAddProduct(newProduct);
          resetForm();
        }
      }}
    >
      <Form>
        <h2>Add Product</h2>
        <div>
          <label>Name:</label>
          <Field type="text" name="name" />
        </div>
        <div>
          <label>Price:</label>
          <Field type="text" name="price" />
        </div>
        <button type="submit">Add Product</button>
      </Form>
    </Formik>
  );
};

export default ProductForm;
