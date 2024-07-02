import styled from "styled-components";
import SideBarr from "../Components/SideBar";
import "../App.css";
import ProfileImg from "../assets/profile.png"

const PageContainer = styled.div`
  display: flex;
  height: 100vh;
  gap: 50px;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  gap: 20px;
  padding: 20px;
  margin-left: 50px;
`;

const ConversationsContainer = styled.div`
  width: 300px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  overflow-y: auto;
`;

const ConversationItem = styled.div`
  padding: 15px;
  border-bottom: 1px solid #f0f2f5;
  border-color: black;
  border-radius: 15px;
  background-color: #D9D9D9;
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover {
    background-color: #f0f2f5;
  }
`;

const ProfilePicture = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
  object-fit: cover;
`;

const ConversationInfo = styled.div`
  flex: 1;
`;

const ConversationName = styled.h3`
  margin: 0 0 5px 0;
`;

const LastMessage = styled.p`
  margin: 0;
  color: #65676b;
  font-size: 0.9em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ChatContainer = styled.div`
  flex: 1;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  display: flex;
  flex-direction: column;
`;

const ChatHeader = styled.div`
  background-color: #5E9DB8;
  color: white;
  padding: 15px;
  border-radius: 15px 15px 0 0;
  font-weight: bold;
`;

const ChatMessages = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
`;

const ChatInput = styled.div`
  display: flex;
  padding: 15px;
  background-color: #f0f2f5;
  border-radius: 0 0 15px 15px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 20px;
  margin-right: 10px;
`;

const SendButton = styled.button`
  background-color: #5E9DB8;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

function Chat() {
    const conversations = [
      { id: 1, name: "Taoufik", lastMessage: "Dina botola w kass l3arch", profilePic: `${ProfileImg}` },
      { id: 2, name: "Hamza", lastMessage: "wash a merouane ghadi t9ada", profilePic: `${ProfileImg}` },
      { id: 3, name: "Badr l2ostora", lastMessage: "Wash akhay merouane", profilePic: `${ProfileImg}` },
    ];
  
    return (
      <PageContainer>
        <SideBarr />
        <MainContent>
          <ConversationsContainer>
            {conversations.map((conv) => (
              <ConversationItem key={conv.id}>
                <ProfilePicture src={conv.profilePic} alt={`${conv.name}'s profile`} />
                <ConversationInfo>
                  <ConversationName>{conv.name}</ConversationName>
                  <LastMessage>{conv.lastMessage}</LastMessage>
                </ConversationInfo>
              </ConversationItem>
            ))}
          </ConversationsContainer>
          <ChatContainer>
            <ChatHeader>Chat</ChatHeader>
            <ChatMessages>
                {/** Messages Hna */}
            </ChatMessages>
            <ChatInput>
              <Input type="text" placeholder="Type a message..." />
              <SendButton>➤</SendButton>
            </ChatInput>
          </ChatContainer>
        </MainContent>
      </PageContainer>
    );
  }
  
  export default Chat;