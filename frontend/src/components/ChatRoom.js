import React, { useEffect, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { useQuery } from '@apollo/react-hooks';
import { Box, Avatar, Icon } from '@material-ui/core';
import { teal, grey } from '@material-ui/core/colors';
import styled from 'styled-components';
import { TASK_MESSAGES } from '../query';
import { useCreateMessage } from '../custom-hooks/project';

const Header = styled.div`
  background-color: ${teal[200]};
  color: ${teal[800]};
  border-radius: 12px 12px 0 0;
  padding: 20px;
  display: flex;
  ailgn-items: center;
`;

const HeaderText = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 200px;
  font-size: 14px;
  font-weight: 500;
  margin-right: auto;
  line-height: 20px;
`;

const CloseIcon = styled(Icon)`
  cursor: pointer;
  && {
    font-size: 18px;
  }
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
  overflow: scroll;
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
  position: relative;

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

const Read = styled.span`
  display: inline-block;
  color: ${grey[400]};
  font-weight: 500;
  font-size: 10px;
  position: absolute;
  bottom: -14px;
  right: 1px;

  ${({ index }) =>
    (index === 0 || index % 2 === 0) &&
    `
      display: none;
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

const ChatRoom = ({ closeChatRoom, task, taskId }) => {
  const messageText = useRef('');
  const bottom = useRef(null);
  const { loading, error, data } = useQuery(TASK_MESSAGES, {
    variables: {
      id: taskId
    }
  });
  const [createMessage] = useCreateMessage(taskId);
  const scrollToBottom = useCallback(() => {
    bottom.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start'
    });
  }, [bottom]);
  const handleSubmitMessage = useCallback(
    async e => {
      e.preventDefault();
      if (messageText.current.value === '') {
        return;
      }
      await createMessage({
        variables: {
          taskId,
          text: messageText.current.value
        }
      });
      scrollToBottom();
      messageText.current.value = '';
    },
    [messageText, createMessage, taskId, scrollToBottom]
  );
  useEffect(scrollToBottom, [data, scrollToBottom]);
  const root = document.getElementById('root');
  return ReactDOM.createPortal(
    <MessageBox>
      <div>
        <Header>
          <HeaderText>{task}</HeaderText>
          <CloseIcon color="primary" onClick={closeChatRoom}>
            close
          </CloseIcon>
        </Header>
        <MessagesContainer>
          {loading ? (
            <Box>
              <MessageContainer index={0}>
                <MessageAvatar index={0}>
                  <Icon>person</Icon>
                </MessageAvatar>
                <Message index={0}>loading...</Message>
              </MessageContainer>
            </Box>
          ) : error ? (
            <Box>
              <MessageContainer index={0}>
                <MessageAvatar index={0}>
                  <Icon>person</Icon>
                </MessageAvatar>
                <Message index={0}>There seems to be an error.</Message>
              </MessageContainer>
            </Box>
          ) : (
            data.task.messages.map((message, index) => (
              <Box key={message.id}>
                <MessageContainer index={index}>
                  <MessageAvatar index={index}>
                    <Icon>person</Icon>
                  </MessageAvatar>
                  <Message index={index}>{message.text}</Message>
                  <Read index={index}>Read</Read>
                </MessageContainer>
              </Box>
            ))
          )}
          <div ref={bottom}></div>
        </MessagesContainer>
        <MessageInputContainer
          display="flex"
          alignItems="center"
          paddingX="18px"
          component="form"
        >
          <MessageInput placeholder="Type your message..." ref={messageText} />
          <MessageSendButton type="submit" onClick={handleSubmitMessage}>
            <SendIcon>add</SendIcon>
          </MessageSendButton>
        </MessageInputContainer>
      </div>
    </MessageBox>,
    root
  );
};

export default ChatRoom;
