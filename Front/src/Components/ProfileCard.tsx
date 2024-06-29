import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { useDropzone } from 'react-dropzone';

const ProfileCard = styled.div`
  background-color: #fff;
  border: 2px solid #e0e0e0;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 800px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const InputGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  resize: vertical;
  min-height: 100px;
`;

const Button = styled.button`
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  align-self: flex-end;

  &:hover {
    background-color: #45a049;
  }
`;

const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
  border: 2px dashed #ccc;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

interface ProfileCardProps {
  onSave: (profile: ProfileData) => void;
}

interface ProfileData {
  firstName: string;
  lastName: string;
  age: number;
  about: string;
  profileImage: string | null;
}

export const ProfileCardComponent: React.FC<ProfileCardProps> = ({ onSave }) => {
  const [profile, setProfile] = useState<ProfileData>({
    firstName: '',
    lastName: '',
    age: 0,
    about: '',
    profileImage: null,
  });

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfile(prev => ({ ...prev, profileImage: reader.result as string }));
    };
    reader.readAsDataURL(file);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ 
    onDrop, 
    accept: {'image/*': ['.png', '.jpg', '.jpeg']},
    multiple: false 
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSave(profile);
  };

  const removeImage = () => {
    setProfile(prev => ({ ...prev, profileImage: null }));
  };

  return (
    <ProfileCard>
      <Title>Profile Information</Title>
      <ImageContainer {...getRootProps()}>
        <input {...getInputProps()} />
        {profile.profileImage ? (
          <ProfileImage src={profile.profileImage} alt="Profile" />
        ) : (
          <p>Click or drag to add a profile image</p>
        )}
      </ImageContainer>
      {profile.profileImage && (
        <Button onClick={removeImage} style={{ alignSelf: 'center', marginBottom: '20px' }}>
          Remove Image
        </Button>
      )}
      <InputGroup>
        <Label htmlFor="firstName">First Name</Label>
        <Input
          type="text"
          id="firstName"
          name="firstName"
          value={profile.firstName}
          onChange={handleChange}
        />
      </InputGroup>
      <InputGroup>
        <Label htmlFor="lastName">Last Name</Label>
        <Input
          type="text"
          id="lastName"
          name="lastName"
          value={profile.lastName}
          onChange={handleChange}
        />
      </InputGroup>
      <InputGroup>
        <Label htmlFor="age">Age</Label>
        <Input
          type="number"
          id="age"
          name="age"
          value={profile.age}
          onChange={handleChange}
          min="0"
          max="120"
        />
      </InputGroup>
      <InputGroup>
        <Label htmlFor="about">About</Label>
        <TextArea
          id="about"
          name="about"
          value={profile.about}
          onChange={handleChange}
        />
      </InputGroup>
      <Button onClick={handleSubmit}>Save Profile</Button>
    </ProfileCard>
  );
};