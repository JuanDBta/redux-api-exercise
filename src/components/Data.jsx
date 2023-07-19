import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { fetchUserData } from '../redux/users/dataSlice';

const selectUsers = createSelector(
  (state) => state.users.users,
  (users) => users.slice(0, 10),
);

const Data = () => {
  const dispatch = useDispatch();
  const slicedUsers = useSelector(selectUsers);

  useEffect(() => {
    slicedUsers.reduce((promiseChain, userId) => promiseChain.then(() => dispatch(fetchUserData(userId))), Promise.resolve()); // eslint-disable-line
  }, [dispatch, slicedUsers]);

  const userData = useSelector((state) => state.data.userData);
  const isLoading = useSelector((state) => state.data.isLoading);
  const error = useSelector((state) => state.data.error);

  useEffect(() => {
    slicedUsers.forEach((userId) => {
      dispatch(fetchUserData(userId));
    });
  }, [dispatch, slicedUsers]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <p>
        Error:
        {error}
      </p>
    );
  }

  return (
    <div>
      <h1>User Data:</h1>
      <ul>
        {slicedUsers.map((userId) => (
          <li key={userId}>{userId}</li>
        ))}
      </ul>

      <div>
        {userData.map((obj) => (
          <div key={obj.objectID}>
            <h1>{obj.objectID}</h1>
            <h2>{obj.title}</h2>
            <img src={obj.primaryImage} alt={obj.title} />
            {/* Render other data properties */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Data;
