import { NavLink } from "react-router-dom";

export default function CreatePost() {
  return (
    <div className='create-post-wrapper'>
      <NavLink className='create-post' to='posts/new'>Create</NavLink>
    </div>
  )
}