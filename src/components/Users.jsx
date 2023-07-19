import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/users/usersSlice';

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const isLoading = useSelector((state) => state.users.isLoading);
  const error = useSelector((state) => state.users.error);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

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

  const total = users.length;

  return (
    <div>
      <h3>Users</h3>
      <h2>
        Total:
        {total}
      </h2>
      <ul>
        {users.map((userId) => (
          <li key={userId}>{userId}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
