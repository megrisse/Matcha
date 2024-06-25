import React from "react";
import * as Components from "../Components/Components";
import logopath from "../assets/logo.svg";
import profilePath from "../assets/profile.svg";
import messagePath from "../assets/message.svg";
import settingpath from "../assets/setting.svg";
import logoutpath from "../assets/logout.svg";

function Profile() {
  return (
    <Components.SideBarContainer>
      <Components.SideBar className="Side-bar">
        <Components.LogoContainer className="logo-container">
          <Components.Logo className="logo" src={logopath} alt="logo" />
        </Components.LogoContainer>
        <Components.SideBarListContainer className="sidebar-list-container">
          <Components.SideBarList>
            <Components.SideBarListItem className="sidebarlist-item">
              <Components.SideBarListAnchor>
                <Components.SideBarListImage src={profilePath} alt="profile" />
              </Components.SideBarListAnchor>
              <Components.SideBarListAnchor>
                <Components.SideBarListImage src={messagePath} alt="message" />
              </Components.SideBarListAnchor>
              <Components.SideBarListAnchor>
                <Components.SideBarListImage src={settingpath} alt="settong" />
              </Components.SideBarListAnchor>
            </Components.SideBarListItem>
          </Components.SideBarList>
        </Components.SideBarListContainer>
        <Components.LogoutButtonContainer className="logout-container">
          <Components.SideBarListAnchor>
            <Components.SideBarListImage src={logoutpath} alt="logout" />
          </Components.SideBarListAnchor>
        </Components.LogoutButtonContainer>
      </Components.SideBar>
    </Components.SideBarContainer>
  );
}

export default Profile;
