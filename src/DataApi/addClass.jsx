import { useQuery } from "@tanstack/react-query";
import axios from "axios";


export const addClass = async (classData) => {
    const response = await fetch(`${import.meta.env.VITE_server_url}/classes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(classData)
    })
    const data = await response.json()
  return data;
}

// posting selected classes by user
export const postSelectedClasses = async (selectedClass) => {
    const response = await fetch(`${import.meta.env.VITE_server_url}/classes/selected`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(selectedClass)
    })
    const data = await response.json()
    return data;
}
// get selected classes by user
export const getSelectedClasses = async (email) => {
    const response = await fetch(`${import.meta.env.VITE_server_url}/classes/selected/${email}`)
   const data = await response.json()
    return data;
}


// getting classes according to the logged in user email using axios and tanstack query
export const GetClasses = (email) => {
    return useQuery('classes', () => axios.get(`${import.meta.env.VITE_server_url}/classes/${email}`))
}

// getting classes to display in the admin dashboard
export const fetchClasses = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_server_url}/classes`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching classes:', error);
      throw new Error('Failed to fetch classes');
    }
  };
  
// fetch selected class by id
export const fetchSelectedClassById = async (id) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_server_url}/classes/get/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching classes:', error);
      throw new Error('Failed to fetch classes');
    }
}