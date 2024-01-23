import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import {useState} from "react";
import { db } from "../firebase";
import { userAuth } from "../context/AuthContext";

const SendMsg = () => {
  const [value, setValue] = useState("");
  const {currentUser} = userAuth();
  

  const handleSendMsg = async (e) => {
    e.preventDefault();

    if(value.trim() === "") {
      alert("Please enter a message");
      return;
    }

    try{
      const {uid, displayName, photoURL} = currentUser;
      await addDoc(collection(db, "messages"), {
        text: value,
        name: displayName,
        avatar: photoURL,
        createdAt: serverTimestamp(),
        uid
      })
    }catch(error){
      console.log(error);
    }

    
    setValue("");
  }

  return (
    <div className="bg-base-300 fixed bottom-0 w-full py-10 shawdow-lg ">
      <form onSubmit={handleSendMsg} className="px-2 containerWrap flex">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="input w-full focus:outline-none rounded-r-none"
          type="text"
        />
        <button type="submit" className="btn btn-primary text-xl rounded-l-none">Send</button>
      </form>
    </div>
  );
};

export default SendMsg;
