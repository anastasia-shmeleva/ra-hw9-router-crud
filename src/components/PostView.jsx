import moment from "moment";

export default function PostView(props) {
  const {
    id,
    created,
    content,
  } = props.children;
 
  const timeNow = moment();
  const timeCreated = moment(created);
  const time = timeCreated.from(timeNow);

  const onDelete = (id) => {
    fetch(`http://localhost:7777/posts/${id}`, {
      method: 'DELETE',
      body: id
    });
  }

  const onEdit = (id) => {
    console.log(id);
  }

  return (
    <div className='post-wrapper'>
      <div className='post-body'>
        <div className='post-header'>
          <div className='post-time'>Posted {time}</div>
          <div className='post-edit' onClick={(e) => {
            e.preventDefault();
            onEdit(id)
            }}>Edit</div>
          <div className='post-delete' onClick={(e) => {
            e.preventDefault();
            onDelete(id)
            }}>x</div>
        </div> 
        <div className='post-content'>{content}</div>
      </div>
    </div>
  )
}