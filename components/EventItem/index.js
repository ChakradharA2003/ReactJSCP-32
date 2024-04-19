// Write your code here
import './index.css'

const EventItem = props => {
  const {details, onClickImageEvent} = props
  const {id, imageUrl, name, location} = details
  const onClickedEventImage = () => {
    onClickImageEvent(id)
  }
  return (
    <li className="event-list">
      <button type="button" className="image-btn" onClick={onClickedEventImage}>
        <img src={imageUrl} alt="event" className="image" />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}
export default EventItem
