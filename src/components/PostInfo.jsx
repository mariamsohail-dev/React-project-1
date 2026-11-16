const PostInfo = ({ count, icon }) => {

  return (
    <div className="
      flex 
      items-center 
      text-xl 
      gap-1
    ">
      {icon}
      <span>{count}</span>
    </div>
  )
}

export default PostInfo