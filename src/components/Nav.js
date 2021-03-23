import Profile from "./EditProfile";

const Nav = () => {
  return (
    <div>
      <nav>
        <li>Image</li>
        <li>UserName</li>
        <button>Settings</button>
        <Profile />
      </nav>
    </div>
  );
};
export default Nav;
