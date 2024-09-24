import { useState } from 'react';

const StateObject = () => {
  const [student, setStudent] = useState({
    name: 'Rudnei',
  });

  const [studentName, setStudentName] = useState('');

  return (
    <>
      {student.name}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setStudent({
            name: studentName,
          });
        }}
      >
        <input
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />
        <button type="submit">Trocar nome</button>
      </form>
    </>
  );
};

export default StateObject;
