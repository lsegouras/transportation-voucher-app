import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [usersData, setUsersData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('http://localhost:3001/users');
      setUsersData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
  };

  const addUser = async (newUser) => {
    setIsLoading(true);
    try {
      const response = await axios.post('http://localhost:3001/users', newUser);
      setUsersData([...usersData, response.data]);
      setIsLoading(false);
    } catch (error) {
      console.error('Error adding user:', error);
      setIsLoading(false);
    }
  };

  const editUser = async (id, updatedUser) => {
    setIsLoading(true);
    try {
      const response = await axios.put(`http://localhost:3001/users/${id}`, updatedUser);
      const updatedUsers = usersData.map(user =>
        user.id === id ? response.data : user
      );
      setUsersData(updatedUsers);
      setIsLoading(false);
    } catch (error) {
      console.error('Error editing user:', error);
      setIsLoading(false);
    }
  };

  const deleteUser = async (id) => {
    setIsLoading(true);
    try {
      await axios.delete(`http://localhost:3001/users/${id}`);
      const updatedUsers = usersData.filter(user => user.id !== id);
      setUsersData(updatedUsers);
      setIsLoading(false);
    } catch (error) {
      console.error('Error deleting user:', error);
      setIsLoading(false);
    }
  };

  return (
    <DataContext.Provider value={{ usersData, fetchData, addUser, editUser, deleteUser, isLoading }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
