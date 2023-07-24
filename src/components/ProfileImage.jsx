import React from 'react';

function ProfileImage({ imageUrl, altText }) {
  return <img src={imageUrl} className="profile" alt={altText} />;
}

export default ProfileImage;
