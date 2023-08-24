"use client";

import axios from "axios";
import React, { useState } from "react";

const addTopic = () => {
  const [topics, setTopics] = useState({ title: "", description: "" });

  const handelChange = (e) => {
    setTopics({ ...topics, [e.target.name]: e.target.value });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post("http://localhost:3000/api/topics", {
      title: topics.title,
      description: topics.description,
    });

    if (response.status === 201) {
      alert(response.data.message);
    } else {
      alert("Data is not found");
    }
  };

  return (
    <>
      <form className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Topic Title"
          name="title"
          onChange={handelChange}
          className="border border-slate-500 px-8 py-2"
        />
        <input
          type="text"
          placeholder="Topic Description"
          name="description"
          onChange={handelChange}
          className="border border-slate-500 px-8 py-2"
        />
        <button
          className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
          onClick={handelSubmit}
        >
          Add Topic
        </button>
      </form>
    </>
  );
};

export default addTopic;
