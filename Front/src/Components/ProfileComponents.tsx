import styled from "styled-components";

export const ProfileCard = styled.div`
  background-color: #fff;
  border-width: 2px;
  border-style: solid;
  border-radius: 10px;
  border-color: black
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  text-align: center;
  width: 30vw;
  height: 70vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileInfosContainer = styled.div`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 20px;
`;

export const InputField = styled.input`
  width: 80%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const TextAreaField = styled.textarea`
  width: 80%;
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
  width: 30px;
  padding: 10px;
  margin: 0 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
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
    drop-shadow: #ADD8E6;
  }
`;

export const ProfileImagesCard = styled.div`
  background-color: #fff;
  border-width: 2px;
  border-style: solid;
  border-radius: 10px;
  border-color: black;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  width: 40vw;
  height: 35vh;
`;

export const ProfileInterestCard = styled.div`
  background-color: #fff;
  border-width: 2px;
  border-style: solid;
  border-radius: 10px;
  border-color: black;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  width: 40vw;
  height: 35vh;
`;