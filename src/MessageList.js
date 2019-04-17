import React from 'react';
import UserContext from './UserContext';

const MessageList = () => (
  <UserContext.Consumer>
    {({ user, isContext }) => (
      <div className="MessageList">
        <div className="no-messages">
          Your mailbox is empty, {user.firstName}  {isContext}! 🎉
        </div>
      </div>
    )}
  </UserContext.Consumer>
);

export default MessageList;
