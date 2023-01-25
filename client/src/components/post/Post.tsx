import { Link } from "react-router-dom";
import { IPost } from "../posts/Posts";
import "./Post.scss";

const Post = ({ post }: { post: IPost }) => {
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={post.photo} alt="" />}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c: any) => {
            return (
              <span className="postCat">
                <Link className="link" to={`/posts?cat=${c.name}`}>
                  {c.name}
                </Link>
              </span>
            );
          })}
        </div>
        <span className="postTitle">
          <Link to={`/post/${post._id}`} className="link">
            {post.title}
          </Link>
        </span>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
};

export default Post;
