import React, { useEffect, useState } from 'react';

function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await fetch('/api/students');
      const data = await response.json();
      setStudents(data);
    };
    fetchStudents();
  }, []);

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>{student.name} - {student.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;

