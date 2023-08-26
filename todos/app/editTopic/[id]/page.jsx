import EditTopicForm from "@/components/EditTopicForm";
import axios from "axios";
import React from "react";

const getTopicById = async (id) => {
  try {
    const res = await axios.get(`http://localhost:3000/api/topics/${id}`);

    if (res.status === 200) {
      return res.data.topic;
    } else {
      alert("Data not found");
    }
  } catch (error) {
    console.log(error);
  }
};

const editTopic = async ({ params }) => {
  const { id } = params;
  const topics = await getTopicById(id);
  const { title, description } = topics;

  return (
    <>
      <EditTopicForm id={id} title={title} description={description}/>
    </>
  );
};

export default editTopic;
