import axios from "axios";
import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

const PostForm = ({
  updatePost = false,
}) => {

  const currentData = ( updatePost || { name: "", image: "", description: "" } )
  const action = updatePost?.id ? "put" : "post";

  const handleSubmit = async (values, { resetForm }) => {
    try {
      document.getElementById('submitButton').disabled = true
      await axios[action](`${SERVER_URL}/empresas/controller`, values);
      document.getElementById('submitButton').disabled = false

      //if it's a new Post, reset form after saving it
      if (action === "post") {
        resetForm();
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div>
      <Formik
        initialValues={currentData}
        onSubmit={handleSubmit}
        enableReinitialize={true}
      >
        <Form id="form" className="flex flex-col gap-6 items-center">
          <Field id="name" name="name" placeholder="Nombre" className={'border-gray-400 border outline-none focus:border-transparent focus:ring-2 focus:ring-[#0853fc] rounded-lg p-2 w-full h-full'} />

          <Field id="image" name="image" placeholder="Imagen" type='url' className={'border-gray-400 border outline-none focus:border-transparent focus:ring-2 focus:ring-[#0853fc] rounded-lg p-2 w-full h-full'} />

          <Field as="textarea" rows={5} id="description" name="description" placeholder="Descripcion" type="textarea" className={'border-gray-400 border outline-none focus:border-transparent focus:ring-2 focus:ring-[#0853fc] rounded-lg p-2 w-full h-full'}/>

          <button id="submitButton" className="border-gray-400 border rounded-lg p-2 w-[20%] font-roboto flex flex-row justify-center items-center" type="submit">{ action === 'post' ? 'Crear' : 'Actualizar'}</button>
        </Form>
      </Formik>
    </div>
  );
};

export default PostForm;

{
  /* <div>
      {
        updatePost ? (
          <form id="form" className="flex flex-col gap-6 items-center">
            <input
              onChange={handleChange}
              className="border-gray-400 border outline-none focus:border-transparent focus:ring-2 focus:ring-[#0853fc] rounded-lg p-2 w-full h-full"
              name="name"
              placeholder="NOMBRE"
              value={putPost.name}
            />
            <input
              onChange={handleChange}
              className="border-gray-400 border outline-none focus:border-transparent focus:ring-2 focus:ring-[#0853fc] rounded-lg p-2 w-full h-full"
              name="image"
              placeholder="IMAGEN"
              value={putPost.image}
            />
            <textarea
              onChange={handleChange}
              className="border-gray-400 border outline-none focus:border-transparent focus:ring-2 focus:ring-[#0853fc] rounded-lg p-2 w-full h-full"
              name="description"
              placeholder="DESCRIPCION"
              rows={5}
              value={putPost.description}
            />
            <button
              id="updateButton"
              onClick={handleUpdate}
              className="border-gray-400 border rounded-lg p-2 w-[20%] font-roboto flex flex-row justify-center items-center"
            >
              Actualizar
            </button>
          </form>
        ) : (
          <form id="form" action="" className="flex flex-col gap-6 items-center">
            <input
              onChange={handleChange}
              className="border-gray-400 border outline-none focus:border-transparent focus:ring-2 focus:ring-[#0853fc] rounded-lg p-2 w-full h-full"
              name="name"
              placeholder="NOMBRE"
              value={putPost.name}
            />
            <input
              onChange={handleChange}
              className="border-gray-400 border outline-none focus:border-transparent focus:ring-2 focus:ring-[#0853fc] rounded-lg p-2 w-full h-full"
              name="image"
              placeholder="IMAGEN"
              value={putPost.image}
            />
            <textarea
              onChange={handleChange}
              className="border-gray-400 border outline-none focus:border-transparent focus:ring-2 focus:ring-[#0853fc] rounded-lg p-2 w-full h-full"
              name="description"
              placeholder="DESCRIPCION"
              rows={5}
              value={putPost.description}
            />
            <button
              id="submitButton"
              onClick={handleSubmit}
              className="border-gray-400 border rounded-lg p-2 w-[20%] font-roboto flex flex-row justify-center items-center"
            >
              CREAR
            </button>
          </form>
        )
      }
    </div> */
}
