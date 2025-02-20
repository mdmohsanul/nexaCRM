import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router";
import { fetchComments, postComment } from "../features/commentSlice";
import Lead_Details from "../components/Lead_Details";
import Comment_List from "../components/Comment_List";

const Lead_Management = () => {
  const { leadId } = useParams();
  const dispatch = useDispatch();
  const { leads } = useSelector((state) => state.lead);
  const { agents } = useSelector((state) => state.agents);
  const { comments } = useSelector((state) => state.comments);

  const findLead = leads?.find((lead) => lead._id === leadId);
  let commentRef = useRef("");
  const [selectAgent, setSelectAgent] = useState("");
  const [err, setErr] = useState("");

  const commentHandler = (e) => {
    e.preventDefault();
    if (!commentRef || !selectAgent) {
      setErr("Please fill all Details");
      return;
    }
    const data = {
      id: findLead._id,
      author: selectAgent,
      commentText: commentRef.current,
    };
    setErr("");
    dispatch(postComment(data));
  };

  useEffect(() => {
    console.log("useeffect");
    dispatch(fetchComments(findLead?._id));
  }, [findLead, dispatch]);
  return (
    <>
      <section className="w-full pl-60 ">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-center py-3 text-3xl text-white bg-[#1C4E80]">
            Lead Management:{" "}
            <span className="text-2xl">[{findLead?.name}]</span>
          </h1>
          <Lead_Details findLead={findLead} />
        </div>

        <div className="bg-white pl-10 dark:bg-gray-900 py-8 antialiased">
          <div className="max-w-2xl  px-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
                Discussion ({comments?.length})
              </h2>
            </div>
            <form className="mb-6" onSubmit={commentHandler}>
              <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <label htmlFor="comment" className="sr-only">
                  Your comment
                </label>
                <textarea
                  ref={commentRef}
                  onChange={(e) => (commentRef.current = e.target.value)}
                  id="comment"
                  rows="6"
                  className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                  placeholder="Write a comment..."
                  required
                ></textarea>
              </div>
              <div className="mb-5">
                <label htmlFor="agents">Sales Agents: </label>
                <select
                  name="agents"
                  id="agents"
                  className="border rounded-lg"
                  onChange={(e) => setSelectAgent(e.target.value)}
                >
                  <option value="">Select Agent ...</option>
                  {agents?.map((item) => (
                    <option key={item._id} value={item._id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              {err && <p>{err}</p>}
              <button
                type="submit"
                className="inline-flex items-center py-2.5 px-4 text-[14px] font-medium text-center text-white bg-blue-600  rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
              >
                Post Comment
              </button>
            </form>
            {comments?.map((item) => (
              <Comment_List comment={item} key={item._id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Lead_Management;
