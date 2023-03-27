import "./LikesAndComments.css";
import LikeIcon from "../../shared/images/Like.png";

const LikesAndComments = ({
  className,
  likes,
  comments,
}: {
  likes: number;
  comments: number;
  className: string;
}) => {
  return (
    <div className={`${className} feed-likesComments`}>
      <figure className="like-box">
        <div className="like-icon-box">
          <img className="like-icon" src={LikeIcon} alt="like icon" />
        </div>
        <span>{likes} Likes</span>
      </figure>
      <span>{comments} Comments</span>
    </div>
  );
};

export default LikesAndComments;
