import { useEffect, useState } from "react";

import classes from "./AddPost.module.scss";

import { API_BASE_URL } from "../../utils";
import { axiosInstance } from "../../config";

import Input from "../../components/Input";

const AddPost = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [isSendingPost, setIsSendingPost] = useState(false);
  const [isPostSent, setIsPostSent] = useState(false);

  const inputChangedHandler = ({ currentTarget }) => {
    const { id, value } = currentTarget; // destructure "currentTarget" object to pull out "id" and "value" properties
    if (id === "title") return setPostTitle(value); // if "Post Title" input is in focus, update its value
    return setPostBody(value); // if "Post Body" input is in focus, update its value
  };

  const submitPostHandler = async (event) => {
    event.preventDefault(); // prevent default for default HTML <form> submission action
    try {
      setIsSendingPost(true); // start making request to API, set "loading" status to true
      await axiosInstance.post(`${API_BASE_URL}/posts`, {
        title: postTitle,
        body: postBody,
        userId: 1,
      });
      setIsPostSent(true);
    } catch (error) {
      console.log("Error in submitting post!");
    } finally {
      setIsSendingPost(false); // no matter what, set "loading" status to false
    }
  };

  /**
   * this hook is responsible for removing "Post sent successfully" small text after 1s.
   */
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPostSent(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [isPostSent]);

  return (
    <form className={classes.AddPostForm}>
      <h2 className={classes.FormTitle}>ADD POST</h2>
      <Input
        id="title"
        onInputChanged={inputChangedHandler}
        placeholder="Post Title"
        value={postTitle}
      />
      <Input
        id="body"
        onInputChanged={inputChangedHandler}
        placeholder="Post Body"
        type="textarea"
        value={postBody}
      />
      <button
        className="button"
        onClick={submitPostHandler}
        disabled={postTitle === "" || postBody === ""}
      >
        {isSendingPost ? <small>Loading...</small> : <span>Add Post</span>}
      </button>
      {isPostSent && (
        <small className={classes.PostInfo}>
          &#10003; Post sent successfully.
        </small>
      )}
    </form>
  );
};

export default AddPost;
