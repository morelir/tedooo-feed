import "./NavLinks.css";
import profile from "../../images/profile.png";

const NavLinks = () => {
  return (
    <nav className="main-nav">
      <ul className="main-nav-list">
        <li className="active">
          <a className="btn main-nav-link" href="#home">
            <svg
              width="16"
              height="18"
              viewBox="0 0 16 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.25 6.75L8 1.5L14.75 6.75V15C14.75 15.3978 14.592 15.7794 14.3107 16.0607C14.0294 16.342 13.6478 16.5 13.25 16.5H2.75C2.35218 16.5 1.97064 16.342 1.68934 16.0607C1.40804 15.7794 1.25 15.3978 1.25 15V6.75Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Home
          </a>
        </li>
        <li>
          <a className="btn main-nav-link" href="#messaging">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.75 7.62502C14.7526 8.61492 14.5213 9.59144 14.075 10.475C13.5458 11.5338 12.7323 12.4244 11.7256 13.047C10.7189 13.6696 9.55868 13.9996 8.375 14C7.3851 14.0026 6.40859 13.7713 5.525 13.325L1.25 14.75L2.675 10.475C2.2287 9.59144 1.99742 8.61492 2 7.62502C2.00046 6.44134 2.33046 5.28116 2.95304 4.27443C3.57562 3.26771 4.46619 2.4542 5.525 1.92502C6.40859 1.47872 7.3851 1.24744 8.375 1.25002H8.75C10.3133 1.33627 11.7898 1.99609 12.8969 3.10317C14.0039 4.21024 14.6638 5.68676 14.75 7.25002V7.62502Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Messaging
          </a>
        </li>
        <li>
          <a className="btn main-nav-link" href="#notifications">
            <svg
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 6C12.5 4.80653 12.0259 3.66193 11.182 2.81802C10.3381 1.97411 9.19347 1.5 8 1.5C6.80653 1.5 5.66193 1.97411 4.81802 2.81802C3.97411 3.66193 3.5 4.80653 3.5 6C3.5 11.25 1.25 12.75 1.25 12.75H14.75C14.75 12.75 12.5 11.25 12.5 6Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Notifications
          </a>
        </li>
        <li>
          <a className="btn" href="#profile">
            <img className="profile" src={profile} alt="profile" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
