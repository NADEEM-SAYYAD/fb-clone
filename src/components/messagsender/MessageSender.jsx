import React,{useState} from 'react'
import { Avatar } from "@material-ui/core"
import VideocamIcon from "@material-ui/icons/Videocam"
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary"
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon"
import "./MessageSender.css";


function MessageSender() {
    const [input,setInput] = useState("");
    const [imageUrl,setImageUrl] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(input);
        console.log(imageUrl);
    }
    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png" />
                <form>
                    <input
                        type="text"
                        value={input}
                        onChange={e=>setInput(e.target.value)}
                        className="messageSender__input"
                        placeholder={`What's on your mind, Nadeem ?`}
                    />
                    <input
                        type="text"
                        value={imageUrl}
                        onChange={e=>setImageUrl(e.target.value)}
                        placeholder="image URL (optional)"
                    />
                    <button type="submit" onClick={handleSubmit}>
                        Hidden Submit
                    </button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__options">
                    <VideocamIcon style={{ color: "red" }} />
                    <h3>Live video</h3>
                </div>
                <div className="messageSender__options">
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__options">
                    <InsertEmoticonIcon style={{ color: "orange" }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    );
}

export default MessageSender;
