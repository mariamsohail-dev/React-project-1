import {
  RiFacebookFill,
  RiTwitterFill,
  RiInstagramLine,
  RiYoutubeFill
} from "react-icons/ri"

import {
  FaRegComment,
  FaRegHeart
} from "react-icons/fa"

import { BiShare } from "react-icons/bi"

import Button from "./Button"
import PostInfo from "./PostInfo"
import CreateLine from "./CreateLine"
import SocialIcon from "./SocialIcon"

const UserCard = ({ user }) => {

  return (
    <div className="
      w-full
      shadow-2xl
      rounded-xl
      overflow-hidden
      select-none
    ">

      {/* Top Banner */}

      <div className="
        relative
        w-full
        aspect-video
        bg-[#4071F4]
      ">

        <img
          className="
            absolute
            object-cover
            object-top
            rounded-full
            h-full 
            aspect-square 
            left-1/2 
            -translate-x-1/2 
            translate-y-1/4
            border-5
            border-white
            outline-5
            outline-[#4071F4]
          "
          src={user.imgUrl}
          alt={user.title}
          loading="lazy"
        />

      </div>


      {/* User Information */}

      <div className="flex flex-col items-center pt-20 pb-12 max-[600px]:mt-5">

        <h1 className="font-bold text-2xl">
          {user.title}
        </h1>

        <p className="my-3 font-medium">
          {user.role}
        </p>


        {/* Social Icons */}

        <div className="
          flex 
          gap-4 
          p-3 
          justify-center 
          items-center 
        ">
          <SocialIcon bgColor="#3864AF" icon={<RiFacebookFill />} />
          <SocialIcon bgColor="#189EF3" icon={<RiTwitterFill />} />
          <SocialIcon bgColor="#E1316F" icon={<RiInstagramLine />} />
          <SocialIcon bgColor="#F90500" icon={<RiYoutubeFill />} />
        </div>

        {/* Buttons */}

        <div className="
          flex 
          gap-8
          my-6
        ">
          <Button text="Subscribe" />
          <Button text="Message" />
        </div>


        {/* Post Information */}
        <div className="
          flex
          gap-4
          items-center
        ">
          <PostInfo
            count={user.likeCount}
            icon={<FaRegHeart />}
          />
          <CreateLine />

          <PostInfo
            count={user.commentCount}
            icon={<FaRegComment />}
          />
          <CreateLine />

          <PostInfo
            count={user.shareCount}
            icon={<BiShare className="text-2xl -mr-0.5" />}
          />
        </div>
      </div>
    </div>
  )
}
export default UserCard