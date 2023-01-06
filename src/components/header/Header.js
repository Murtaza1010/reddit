import React from "react";
import { useSelector } from "react-redux";
import "./Header.css";
import api from "../../api/api";
import { useDispatch } from "react-redux";
import { addPosts } from "../posts/subredditSlice";
import { updateState } from "../posts/currentSelectedSubSlice";

export default function Header() {
  const dispatch = useDispatch();
  const currentSelectedSubreddit = useSelector(
    (state) => state.currentSelectedReducer.subreddit
  );
  const headerLeft = ["popular", "Hot", "Rising", "Controversial", "Gilded"];

  async function headerApiCall(subbreddit) {
    const response = await api.posts.subredditApiCall(subbreddit);
    dispatch(addPosts(response));
  }

  return (
    <div className="header">
      <div className="header_left">
        <ul>
          {headerLeft.map((subreddit) => (
            <li
              onClick={() => {
                dispatch(updateState(subreddit));
                headerApiCall(subreddit);
              }}
            >
              {subreddit}
            </li>
          ))}
        </ul>
      </div>

      <div className="header_right">
        <h1> {currentSelectedSubreddit}</h1>
        <i className="fas fa-bell"></i>
        <img src=""></img>
        <div className="header_user">
          <span>Murtaza Karim</span>
          <i className="fas fa-caret-down"></i>
        </div>
      </div>
    </div>
  );
}
