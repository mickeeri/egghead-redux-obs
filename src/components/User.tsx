import * as React from 'react';
import IUser from '../models/IUser';

const User = ({ avatar_url, login, name }: IUser) => {
  return (
    <div>
      <figure>
        <img src={avatar_url} alt="" />
      </figure>

      <p>
        {name} ({login})
      </p>
    </div>
  );
};

export default User;
