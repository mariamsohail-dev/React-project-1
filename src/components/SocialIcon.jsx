const SocialIcon = ({bgColor, icon}) => {
  return (
    <>
      <div
        style={{ backgroundColor: bgColor }}
        className="
          w-9 
          h-9 
          text-xl 
          text-white 
          rounded-full 
          flex 
          justify-center 
          items-center
        ">
        {icon}
      </div>
    </>
  )
}

export default SocialIcon