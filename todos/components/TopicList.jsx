import Link from "next/link";
import React from "react";
import { HiPencilAlt } from "react-icons/hi";
import RemoveBtn from "./RemoveBtn";
import axios from "axios";

const TopicList = () => {

  const getTopics = async()=> {
    try {
        const response = await axios.get('http://localhost:3000/api/topics');

        if(response.data){
          console.log(response.data);
        }
    } catch (error) {
      
    }
  }

  getTopics();


  return (
    <>
      <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
        <div>
          <h2 className="font-bold text-2xl">Topic Title</h2>
          <div>Topic Description</div>
        </div>

        <div className="flex gap-2">
          <RemoveBtn />
          <Link href={"/editTopic/123"}>
            <HiPencilAlt size={24} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default TopicList;
