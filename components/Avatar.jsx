const Avatar = ({ className }) => {
  return (
    <img
      loading='lazy'
      src='/avatar.webp'
      alt=''
      className={`h-14 rounded-full object-contain transition transform duration-150 hover:scale-110 cursor-pointer p-1 hover:bg-gray-200 ${className}`}
    />
  )
}

export default Avatar
