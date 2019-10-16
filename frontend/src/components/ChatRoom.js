import React from 'react';
import ReactDOM from 'react-dom';
import { Box, Avatar, Icon } from '@material-ui/core';
import { teal, grey } from '@material-ui/core/colors';
import styled from 'styled-components';

const Header = styled.div`
  background-color: ${teal[200]};
  color: ${teal[800]};
  border-radius: 12px 12px 0 0;
  padding: 20px;
  font-size: 14px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  /* max-width: 200px; */
`;

const MessageBox = styled.div`
  position: sticky;
  z-index: 100;
  background-color: #fff;
  bottom: 0;
  float: right;
  margin-right: 5px;
  height: 400px;
  width: 300px;
  border-radius: 12px;
  box-shadow: 0 10px 27px -5px rgba(50, 50, 93, 0.25);
`;

const MessagesContainer = styled.div`
  width: 300px;
  padding: 15px 20px;
  display: flex;
  height: 280px;
  flex-direction: column;
`;

const MessageAvatar = styled(Avatar)`
  && {
    ${({ index }) =>
      index % 2 === 1 &&
      `
      display: none;
    `}
    width: 25px;
    height: 25px;
    margin-right: 8px;
    background-color: ${teal[400]};
    transform: translateY(8px);
  }
`;

const MessageContainer = styled.span`
  display: flex;
  margin-bottom: 20px;

  ${({ index }) =>
    index === 0 || index % 2 === 0
      ? `
    float: left;
    `
      : `
    float: right
    `}
`;

const Message = styled.span`
  display: inline-block;
  padding: 8px 14px;
  width: auto;
  max-width: 250px;

  ${({ index }) =>
    index === 0 || index % 2 === 0
      ? `
    background-color: ${grey[100]};
    color: ${teal[800]}
    border-radius: 10px 10px 10px 3px;
    float: left;
    `
      : `
    background-color: ${teal[500]};
    color: hsla(140, 100%, 90%, 1);
    border-radius: 10px 10px 3px 10px;
    float: right
    `}
`;

const MessageInputContainer = styled(Box)`
  border-top: 2px solid #e3e3e3;
`;

const MessageInput = styled.input`
  height: 60px;
  border: 0;
  margin-right: auto;
  width: 200px;
  font-weight: 500;
  font-size: 12px;

  &:focus {
    outline: 0;
  }
`;

const MessageSendButton = styled.button`
  border: 0;
  cursor: pointer;
  border-radius: 6px;
  width: 24px;
  height: 24px;
  padding: 2px;
  background: linear-gradient(to right, #878787, #939393);

  &:focus {
    outline: 0;
  }

  &:hover {
    background: ${teal[400]};
  }
`;

const SendIcon = styled(Icon)`
  && {
    transform: translateY(1.2px);
    color: white;
    font-size: 16px;
  }
`;

const ChatRoom = ({ closeChatRoom, task }) => {
  const messages = ['hello', 'hey', 'dude'];
  const root = document.getElementById('root');
  return ReactDOM.createPortal(
    <MessageBox>
      <div>
        <Header>{task}</Header>
        <MessagesContainer>
          {messages.map((message, index) => (
            <Box key={message}>
              <MessageContainer index={index}>
                <MessageAvatar index={index}>
                  <Icon>person</Icon>
                </MessageAvatar>
                <Message index={index}>{message}</Message>
              </MessageContainer>
            </Box>
          ))}
        </MessagesContainer>
        <MessageInputContainer
          display="flex"
          alignItems="center"
          paddingX="18px"
        >
          <MessageInput placeholder="Type your message..." />
          <MessageSendButton>
            <SendIcon>add</SendIcon>
          </MessageSendButton>
        </MessageInputContainer>
      </div>
    </MessageBox>,
    root
  );
};

export default ChatRoom;
