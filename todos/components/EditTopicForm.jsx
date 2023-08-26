"use client";
import axios from "axios";
import React, { useState } from "react";

const EditTopicForm = ({ id ,title,description}) => {
  const [newTopic, setNewTopic] = useState({ title: title, description: description });

  console.log(newTopic);

  const handelChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setNewTopic({ ...newTopic, [name]: value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <>
      <form className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Topic Title"
          className="border border-slate-500 px-8 py-2"
          onChange={handelChange}
          name="title"
        />
        <input
          type="text"
          placeholder="Topic Description"
          className="border border-slate-500 px-8 py-2"
          onChange={handelChange}
          name="description"
        />
        <button
          className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
          onClick={handelSubmit}
        >
          Update Topic
        </button>
      </form>
    </>
  );
};

export default EditTopicForm;
