import React, { useReducer } from 'react';
import AdminContext from './admincontext';
import AdminReducer from './adminreducer';
import axios from 'axios';

const Adminstate = ({ children }) => {
  const initstate = {
    pendingStudents: [],
    approvedStudents: [],
    courses: [],
  };

  // Get pending students
  const getPendingStudents = async () => {
    try {
      const config = {
        data: {
          'Content-type': 'application-json',
        },
      };
      const response = await axios.get(
        'http://localhost:8080/api/admin/pending',
        config
      );
      dispatch({
        type: 'getpendingstudents',
        payload: response.data,
      });
    } catch (err) {
      console.error(err);
    }
  };

  // Get approved students
  const getApprovedStudents = async () => {
    try {
      const config = {
        data: {
          'Content-type': 'application-json',
        },
      };
      const response = await axios.get(
        'http://localhost:8080/api/admin/approved',
        config
      );
      dispatch({
        type: 'getapprovedstudents',
        payload: response.data,
      });
    } catch (err) {
      console.error(err);
    }
  };

  // approve student
  const approveHandler = async (id) => {
    try {
      const config = {
        data: {
          'Content-type': 'application-json',
        },
      };
      const res = await axios.put(
        `http://localhost:8080/api/admin/${id}`,
        config
      );
      dispatch({
        type: 'approvestudent',
        payload: id,
      });
    } catch (err) {
      console.error(err);
    }
  };

  // Delete Student
  const deleteStudent = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:8080/api/admin/${id}`);
      dispatch({
        type: 'deletestudent',
        payload: id,
      });
    } catch (err) {
      console.error(err);
    }
  };

  // Add the getUserData function
  const getUserData = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/user/${id}`);

      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error(`Failed to fetch user data: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      // Handle error appropriately, e.g., display an error message to the user
      return null; // Or return a custom error object
    }
  };

  // get all courses
  const getAllCourses = async () => {
    try {
      const config = {
        data: {
          'Content-type': 'application-json',
        },
      };
      const res = await axios.get('http://localhost:8080/api/courses', config);
      dispatch({
        type: 'getcourses',
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  // Delete Course
  const deleteCourse = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:8080/api/courses/${id}`);
      console.log(res.data);
      dispatch({
        type: 'deletecourse',
        payload: id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  // Add Course
  const addCourse = async (data) => {
    try {
      const res = await axios.post('http://localhost:8080/api/courses', data);
      dispatch({
        type: 'addcourse',
        payload: res.data,
      });
    } catch (err) {
      console.log(err.response.data);
    }
  };

  const [state, dispatch] = useReducer(AdminReducer, initstate);

  return (
    <AdminContext.Provider
      value={{
        pendingStudents: state.pendingStudents,
        approvedStudents: state.approvedStudents,
        getPendingStudents,
        approveHandler,
        getUserData,
        getApprovedStudents,
        deleteStudent,
        getAllCourses,
        deleteCourse,
        addCourse,
        courses: state.courses,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export default Adminstate;
