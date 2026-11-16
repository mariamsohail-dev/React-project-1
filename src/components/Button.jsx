const Button = ({ text }) => {
  return (
    <button
      className="
        bg-[#4071F4]
        text-white
        rounded-full
        px-5
        py-2
        text-base
        hover:bg-blue-600
        transition
        duration-300
        cursor-pointer
      "
    >
      {text}
    </button>
  )
}
export default Button