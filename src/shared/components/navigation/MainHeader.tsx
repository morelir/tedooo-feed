
import "./MainHeader.css";
import MenuSearch from "./MenuSearch";
import NavLinks from "./NavLinks";

const MainHeader = () => {
  return (
    <header className="main-header">
      <div className="main-header-container">
        <MenuSearch/>
        <NavLinks />
      </div>
    </header>
  );
};

export default MainHeader;
