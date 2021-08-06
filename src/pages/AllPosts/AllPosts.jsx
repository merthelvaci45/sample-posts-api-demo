import { useHistory } from "react-router-dom";

import classes from "./AllPosts.module.scss";

import Spinner from "../../components/Spinner";

import { useAPI } from "../../hooks";
import { PAGE_ROUTES } from "../../utils";

const AllPosts = () => {
  const history = useHistory();
  const [posts, isLoading] = useAPI({ queryString: "posts" });

  const navigateToAddPostPageHandler = () => {
    history.push(PAGE_ROUTES.addPost);
  };

  return (
    <div className={`${classes.AllPosts} container-fluid`}>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {posts?.map((post, index) => {
            if (index > 4) return null;
            return (
              <div key={post.id} className={classes.PostWrapper}>
                <p className={classes.PostTitle}>{post.title}</p>
                <span>{post.body}</span>
              </div>
            );
          })}
          <button className="button" onClick={navigateToAddPostPageHandler}>
            Go to Add Post
          </button>
        </>
      )}

      {/* {isLoading ? (
        <Spinner />
      ) : (
        posts?.map((post, index) => {
          if (index > 4) return null;
          return (
            <div key={post.id} className={classes.PostWrapper}>
              <p className={classes.PostTitle}>{post.title}</p>
              <span>{post.body}</span>
            </div>
          );
        })
      )} */}
    </div>
  );
};

export default AllPosts;
