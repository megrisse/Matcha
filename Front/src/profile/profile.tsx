import * as Components from "../Components/ProfileComponents";
import SideBarr from "../Components/SideBar";
import Profileimg from "../assets/profile.png";

function Profile() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        height: "100vh",
        gap: "100px",
      }}
    >
      <SideBarr />
      <div
        className="profile-info-card"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Components.ProfileCard>
          <Components.ProfileInfosContainer>
            <Components.ProfileImage src={Profileimg} alt="img" />
            <Components.InputField type="text" placeholder="First Name" />
            <Components.InputField type="text" placeholder="Last Name" />
            <Components.AgeContainer>
              <Components.AgeInput
                type="number"
                maxLength={2}
                placeholder="DD"
              />
              <Components.AgeInput
                type="number"
                maxLength={2}
                placeholder="MM"
              />
              <Components.AgeInput
                type="number"
                maxLength={4}
                placeholder="YYYY"
              />
            </Components.AgeContainer>
            <Components.TextAreaField placeholder="About" />
            <Components.SubmitButton>Save</Components.SubmitButton>
          </Components.ProfileInfosContainer>
        </Components.ProfileCard>
      </div>
      <div
        className=""
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        <Components.ProfileImagesCard />
        <Components.ProfileInterestCard />
      </div>
    </div>
  );
}

export default Profile;
