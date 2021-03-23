import React, { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    username: "",
    picture: 0,
    theme: true
  });

  const pictures = [
    { img: "https://www.w3schools.com/howto/img_avatar2.png", id: 1 },
    { img: "https://www.w3schools.com/howto/img_avatar.png", id: 2 },
    { img: "https://www.w3schools.com/w3images/avatar6.png", id: 3 }
  ];

  

  return (
    <div>
      <form>
        <label>
          Username
          <input type="text" name="username" value={profile.username}/>
        </label>
        <label>
          Select profile picture
        {pictures.map((picture) => (
          <>
            <img src={picture.img} alt="" style={{height: "50px"}}/>
            <input type="radio" name="picture" id={picture.id} />
          </>
        ))}
          </label>
        <label>
          Dark mode
          <input type="checkbox" id="themeToggle" name="theme" />
        </label>
        <button type="submit">Save</button>
        <button type="submit">Cancel</button>
      </form>
    </div>
  );
};

export default Profile;
