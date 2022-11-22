import React from 'react';

import { NotificationContainer, NotificationItem } from './styles';

const Notifications: React.FC = () => {
  return (
    <NotificationContainer>
      <NotificationItem>
        <p>Notificação 1</p>
      </NotificationItem>
      <NotificationItem>
        <p>Notificação 2</p>
      </NotificationItem>
      <NotificationItem>
        <p>Notificação 3</p>
      </NotificationItem>
      <NotificationItem>
        <p>Notificação 4</p>
      </NotificationItem>
      <NotificationItem>
        <p>Notificação 5</p>
      </NotificationItem>
      <NotificationItem>
        <p>Notificação 6</p>
      </NotificationItem>
    </NotificationContainer>
  );
};

export default Notifications;
