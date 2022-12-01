import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMessages } from "../redux/messageSlice";

const Message = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.message);

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);


  return (

    <>
      <h1>Refresh the page to view an other message</h1>
        <ul className="list">
        {message.map((message) => (
          <li className="list_item" key={message.id}>{message.greeting}</li>
        ))}
        </ul>
    </>
  )
}

export default Message