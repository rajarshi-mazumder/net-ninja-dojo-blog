import React from "react";
import { Form } from "react-router-dom";
import axios from "axios";

const axiosFetch = axios.create({ baseURL: "http://localhost:8000/" });

export const action = async ({ request }) => {
  console.log(request);
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  axiosFetch("blogs", data).then((res) => {
    console.log(`Res ${JSON.stringify(res)}`);
  });
  return null;
};

const Create = () => {
  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <Form method="post" className="form" action="/create">
        <label>Blog Title</label>
        <input type="text" name="title" />
        <label>Blog body</label>
        <input type="text" name="body" />
        <label>Blog Author</label>
        <input type="text" name="author" />
        <button>Submit</button>
      </Form>
    </div>
  );
};

export default Create;
