import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
    onClick();
  };

  return (
    <div>
      {liked ? (
        <AiFillHeart color="#FF0000" size={30} onClick={handleClick} />
      ) : (
        <AiOutlineHeart size={30} onClick={handleClick} />
      )}
    </div>
  );
};

export default Like;
