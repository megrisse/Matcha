import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { useDropzone } from 'react-dropzone';

const ProfileImagesCard = styled.div`
  background-color: #fff;
  border: 2px solid black;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  width: 400px;
  max-width: 800px;
  min-height: 400px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const ImageGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 20px;
`;

const ImageContainer = styled.div<{ hasImage: boolean }>`
  width: calc(33.3333% - 15px);
  aspect-ratio: 1;
  border: ${props => props.hasImage ? 'none' : '2px dashed #9C9C9C'};
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  cursor: ${props => props.hasImage ? 'default' : 'pointer'};
  background-color: ${props => props.hasImage ? 'transparent' : '#f0f0f0'};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const RemoveButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: rgba(255, 255, 255, 0.7);
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

const DropzoneText = styled.p`
  text-align: center;
  color: #666;
`;

const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface ProfileImagesCardProps {
  maxImages?: number;
}

export const ProfileImagesCardComponent: React.FC<ProfileImagesCardProps> = ({ maxImages = 8 }) => {
  const [images, setImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file, index) => {
      if (images.length + index < maxImages) {
        setIsLoading(true);
        const reader = new FileReader();
        reader.onloadend = () => {
          setImages(prevImages => [...prevImages, reader.result as string]);
          setIsLoading(false);
        };
        reader.readAsDataURL(file);
      }
    });
  }, [images, maxImages]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
    onDrop, 
    accept: {'image/*': ['.png', '.jpg', '.jpeg']},
    maxFiles: maxImages - images.length
  });

  const handleRemoveImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <ProfileImagesCard>
      <Title>Profile Images</Title>
      <ImageGrid>
        {images.map((img, index) => (
          <ImageContainer key={index} hasImage={true}>
            <Image src={img} alt={`User upload ${index + 1}`} />
            <RemoveButton onClick={() => handleRemoveImage(index)}>×</RemoveButton>
          </ImageContainer>
        ))}
        {images.length < maxImages && (
          <ImageContainer {...getRootProps()} hasImage={false}>
            <input {...getInputProps()} />
            {isDragActive ? (
              <DropzoneText>Drop the image here</DropzoneText>
            ) : (
              <DropzoneText>Drag & drop an image here, or click to select</DropzoneText>
            )}
          </ImageContainer>
        )}
      </ImageGrid>
      {isLoading && (
        <LoadingOverlay>
          <p>Loading...</p>
        </LoadingOverlay>
      )}
      <DropzoneText>
        {images.length} / {maxImages} images uploaded
      </DropzoneText>
    </ProfileImagesCard>
  );
};