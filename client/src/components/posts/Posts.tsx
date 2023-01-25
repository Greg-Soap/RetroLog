import Post from "../post/Post";
import "./Post.scss";

interface IPosts {
  posts: IPost[];
}
export interface IPost {
  _id: string;
  title: string;
  photo: string;
  createdAt: string;
  desc: string;
  username: string;
  categories: [];
}
const Posts = ({ posts }: IPosts) => {
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
