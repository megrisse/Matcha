import styled from "styled-components";

export const ProfileCard = styled.div`
  background-color: #fff;
  border-width: 2px;
  border-style: solid;
  border-radius: 20px;
  border-color: black;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  text-align: center;
  width: 400px;
  height: 70vh;
  max-width: 100%;
  max-height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 15px;
`;

export const ProfileInfosContainer = styled.div`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 20px;
`;

export const InputField = styled.input`
  width: 70%;
  padding: 10px;
  margin: 10px 0;
  border: 0;
  border-bottom: 1px solid #ccc;
  border-radius: 0;
`;

export const TextAreaField = styled.textarea`
  width: 70%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: vertical;
`;

export const AgeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;

export const AgeInput = styled.input`
  width: 15%;
  padding: 10px;
  margin: 0 5px;
  border: 0;
  border-bottom: 1px solid #ccc;
  border-radius: 0;
  text-align: left;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  background-color: #ADD8E6;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const ProfileImagesCard = styled.div`
  background-color: #fff;
  border-width: 2px;
  border-style: solid;
  border-radius: 20px;
  border-color: black;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  width: 600px;
  height: 35vh;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 20px;
`;

export const ProfileInterestCard = styled.div`
  background-color: #fff;
  border-width: 2px;
  border-style: solid;
  border-radius: 20px;
  border-color: black;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  width: 600px;
  height: 35vh;
`;

export const ProfileImagesCardImage = styled.img`
  background-color: #9C9C9C;
  border-width: 2px;
  border-style: dashed;
  border-color: black;
  width: calc(33.333% - 10px);
  height: auto;
  border-radius: 8px;
`;