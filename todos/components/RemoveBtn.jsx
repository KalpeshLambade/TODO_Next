"use client";

import { HiOutlineTrash } from "react-icons/hi";
import axios from "axios";

const RemoveBtn = ({ id }) => {
  const removeTopic = async () => {
    const confirmed = confirm("Are you sure");

    if (confirmed) {
      const response = await axios.delete(
        `http://localhost:3000/api/topics?id=${id}`
      );

      if (response.status === 200) {
        alert(response.data.message);
        window.location.reload();

      } else {
        alert("Internal server error");
      }
    }
  };

  return (
    <>
      <button className="text-red-400" onClick={removeTopic}>
        <HiOutlineTrash size={24} />
      </button>
    </>
  );
};

export default RemoveBtn;
