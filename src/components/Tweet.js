import ProfileImage from "./ProfileImage";
import User from  "./User"
import Timestamp from  "./Timestamp"
import Message from  "./Message"
import Actions from  "./Actions"


function Tweet({tweet}) {
console.log(tweet)
  const {
    message,
    timestamp,
    user: { name, image, handle },
  } = tweet;

  return (
    <div className="tweet">
      <ProfileImage image = {image}/>

      <div className="body">
        <div className="top">
          <User name={name} handle={handle} />
          <Timestamp timestamp={timestamp}/>
        </div>
          <Message message = {message}/>

        <div className="actions">
          <Actions />
        </div>
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
