import Link from "next/link";
import React from "react";
import { HiPencilAlt } from "react-icons/hi";
import RemoveBtn from "./RemoveBtn";
import axios from "axios";


const getTopics = async()=> {
  try {
      const response = await axios.get('http://localhost:3000/api/topics');

      if(response.data){
        return response.data;
      }
  } catch (error) {
      return error;
  }
} 

const TopicList = async() => {

  const {topics} = await getTopics();

  return (
    <>
      {topics.map((e,i)=>(
        <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start" key={i}>
        <div>
          <h2 className="font-bold text-2xl">{e.title}</h2>
          <div>{e.description}</div>
        </div>

        <div className="flex gap-2">
          <RemoveBtn id={e._id}/>
          <Link href={`/editTopic/${e._id}`}>
            <HiPencilAlt size={24} />
          </Link>
        </div>
      </div>
      ))}

      {/* <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
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
      </div> */}
    </>
  );
};

export default TopicList;
