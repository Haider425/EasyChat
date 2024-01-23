import { userAuth } from "../context/AuthContext";

const Message = ({ message }) => {
    const {currentUser} = userAuth();

    const formattedTime = message.createdAt ? new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      }).format(message.createdAt.toDate()) : "";



  return (
    <div>
      <div className={`chat ${message.uid === currentUser.uid  ? "chat-end" : "chat-start"}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              src={message.avatar}
            />
          </div>
        </div>
        <div className="chat-header">
          {message.name}
        </div>
        <div className="chat-bubble">{message.text}</div>
        <time className="text-xs opacity-50">{formattedTime}</time>
        
      </div>
    </div>
  );
};

export default Message;
