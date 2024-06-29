import React from 'react';
import styled from 'styled-components';
import { ProfileImagesCardComponent } from "../Components/ProfileImagesCard";
import * as Components from "../Components/ProfileComponents";
import SideBarr from "../Components/SideBar";
import Profileimg from "../assets/profile.png";
import { InterestsCardComponent } from "../Components/ProfileInterestCard";

const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 20px;
  max-width: 1400px;
  margin: 0 auto;
  height: 100vh;
  width: 100vw;

  @media (max-width: 1200px) {
    align-items: center;
    height: auto;
  }
`;

const RightSideContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  height: 100vh;
  width: 80%;
  gap: 20px;


  @media (max-width: 1200px) {
    height: auto;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;

const SideBarContainer = styled.div`
  flex: 0 0 200px;
  width: 20%;
  height: 100vh;
  @media (max-width: 1200px) {
    flex: none;
  }
`;

const ContentContainer = styled.div`
  padding: 0;
  justify-content: center;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InterestPhotosCard = styled.div`
  flex: 0 0 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media (max-width: 1200px) {
    flex: none;
  }
`;

function Profile() {
  return (
    <PageContainer>
      <SideBarContainer>
        <SideBarr />
      </SideBarContainer>
      <RightSideContainer className='content-div'>
      <ContentContainer>
        <Components.ProfileCard>
          <Components.ProfileImage src={Profileimg} alt="Profile" />
          <Components.ProfileInfosContainer>
            <Components.InputField type="text" placeholder="First Name" />
            <Components.InputField type="text" placeholder="Last Name" />
            <Components.AgeContainer>
              <Components.AgeInput type="number" maxLength={2} placeholder="DD" />
              <Components.AgeInput type="number" maxLength={2} placeholder="MM" />
              <Components.AgeInput type="number" maxLength={4} placeholder="YYYY" />
            </Components.AgeContainer>
            <Components.TextAreaField placeholder="About"/>
          </Components.ProfileInfosContainer>
          <Components.SubmitButton>Save</Components.SubmitButton>
        </Components.ProfileCard>
      </ContentContainer>
      <InterestPhotosCard>
        <ProfileImagesCardComponent maxImages={5}/>
        <InterestsCardComponent />
      </InterestPhotosCard>
      </RightSideContainer>
    </PageContainer>
  );
}

export default Profile;