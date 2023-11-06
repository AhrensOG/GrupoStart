import axios from "axios";
import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

const PostForm = ({ updatePost = false }) => {
  const currentData = updatePost || {
    name: "",
    firstImage: "",
    description: "",
  };
  const action = updatePost?.id ? "put" : "post";

  const handleSubmit = async (values, { resetForm }) => {
    try {
      document.getElementById("submitButton").disabled = true;
      await axios[action](`${SERVER_URL}`, values);
      document.getElementById("submitButton").disabled = false;
      console.log(values);

      //if it's a new Post, reset form after saving it
      if (action === "post") {
        resetForm();
      }
    } catch (error) {
      console.log(error);
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
          <Field
            id="name"
            name="name"
            placeholder="Nombre"
            className={
              "border-gray-400 border outline-none focus:border-transparent focus:ring-2 focus:ring-[#0853fc] rounded-lg p-2 w-full h-full"
            }
          />

          {/* <Field
            id="image"
            name="firstImage"
            placeholder="Imagen"
            type="file"
            className={
              "border-gray-400 border outline-none focus:border-transparent focus:ring-2 focus:ring-[#0853fc] rounded-lg p-2 w-full h-full"
            }
          /> */}
          <div className="flex flex-col h-full w-full items-start justify-center">
            <Field
              id="firstImage"
              name="firstImage"
              placeholder="Imagen"
              type="file"
              className={
                "w-full file:rounded-l-lg file:border-none file:p-2 file:bg-[#0853fc] file:text-white border border-gray-400 outline-none focus:border-transparent focus:ring-2 focus:ring-[#0853fc] rounded-lg text-slate-400"
              }
            />
            <p class="mt-1 ml-1 text-sm text-gray-600">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
          </div>

          <Field
            as="textarea"
            rows={5}
            id="description"
            name="description"
            placeholder="Descripcion"
            type="textarea"
            className={
              "border-gray-400 border outline-none focus:border-transparent focus:ring-2 focus:ring-[#0853fc] rounded-lg p-2 w-full h-full"
            }
          />

          <button
            id="submitButton"
            className="border-gray-400 border rounded-lg p-2 w-[20%] font-roboto flex flex-row justify-center items-center"
            type="submit"
          >
            {action === "post" ? "Crear" : "Actualizar"}
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default PostForm;
