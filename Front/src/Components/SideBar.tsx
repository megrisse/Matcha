import * as Components from "./Components";
import logopath from "../assets/logo.svg";
import profilePath from "../assets/profile.svg";
import messagePath from "../assets/message.svg";
import settingpath from "../assets/setting.svg";
import logoutpath from "../assets/logout.svg";

function SideBarr() {
  return (
    <Components.SideBarContainer>
      <Components.SideBar className="Side-bar">
        <Components.LogoContainer className="logo-container">
          <Components.Logo className="logo" src={logopath} alt="logo" />
        </Components.LogoContainer>
        <Components.SideBarListContainer className="sidebar-list-container">
          <Components.SideBarList>
            <Components.SideBarListItem className="sidebarlist-item">
              <Components.SideBarListAnchor href="/Profile">
                <Components.SideBarListImage src={profilePath} alt="profile" />
              </Components.SideBarListAnchor>
              <Components.SideBarListAnchor href="/Chat">
                <Components.SideBarListImage src={messagePath} alt="message" />
              </Components.SideBarListAnchor>
              <Components.SideBarListAnchor href="Settings">
                <Components.SideBarListImage src={settingpath} alt="settings" />
              </Components.SideBarListAnchor>
            </Components.SideBarListItem>
          </Components.SideBarList>
        </Components.SideBarListContainer>
        <Components.LogoutButtonContainer className="logout-container">
          <Components.SideBarListAnchor href="/Profile/?">
            <Components.SideBarListImage src={logoutpath} alt="logout" />
          </Components.SideBarListAnchor>
        </Components.LogoutButtonContainer>
      </Components.SideBar>
    </Components.SideBarContainer>
  );
}

export default SideBarr;
