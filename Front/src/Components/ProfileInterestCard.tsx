import React, { useState } from 'react';
import styled from 'styled-components';

const InterestsCard = styled.div`
  background-color: #fff;
  border: 2px solid black;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  width: 400px;
  max-width: 800px;
  min-height: 200px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const InterestGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
`;

const InterestTag = styled.div`
  background-color: #f0f0f0;
  border-radius: 20px;
  padding: 5px 15px;
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #666;
  margin-left: 5px;
  cursor: pointer;
  font-size: 18px;
`;

const InputContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const AddButton = styled.button`
background-color: #5E9DB8;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-left: 10px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

interface InterestsCardProps {
  maxInterests?: number;
}

export const InterestsCardComponent: React.FC<InterestsCardProps> = ({ maxInterests = 10 }) => {
  const [interests, setInterests] = useState<string[]>([]);
  const [newInterest, setNewInterest] = useState('');

  const handleAddInterest = () => {
    if (newInterest.trim() && interests.length < maxInterests) {
      setInterests([...interests, newInterest.trim()]);
      setNewInterest('');
    }
  };

  const handleRemoveInterest = (index: number) => {
    setInterests(interests.filter((_, i) => i !== index));
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleAddInterest();
    }
  };

  return (
    <InterestsCard>
      <Title>Interests</Title>
      <InterestGrid>
        {interests.map((interest, index) => (
          <InterestTag key={index}>
            {interest}
            <RemoveButton onClick={() => handleRemoveInterest(index)}>×</RemoveButton>
          </InterestTag>
        ))}
      </InterestGrid>
      <InputContainer>
        <Input
          type="text"
          value={newInterest}
          onChange={(e) => setNewInterest(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add an interest..."
          maxLength={50}
        />
        <AddButton onClick={handleAddInterest}>Add</AddButton>
      </InputContainer>
      <p>{interests.length} / {maxInterests} interests added</p>
    </InterestsCard>
  );
};