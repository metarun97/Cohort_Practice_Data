import React, { Children } from 'react';
import Avatar from './Avatar';

const TestimonialCard = (props) => {
  const { name, avatar, role, message, isVerified, children } = props;
  return (
    <div>
      <Avatar avatar={avatar} name={name} />
      <h3>{name}</h3>
      <span>{role}</span>
      <p>{message}</p>
      <b>{isVerified}</b>
      {children && (
        <p style={{ fontStyle: 'italic', color: 'red' }}>{children}</p>
      )}
    </div>
  );
};

export default TestimonialCard;
