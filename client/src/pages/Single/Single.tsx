import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/SinglePost/SinglePost";
import "./Single.scss";

const Single = () => {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  );
};

export default Single;
