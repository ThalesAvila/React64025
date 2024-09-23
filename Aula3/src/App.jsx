import './App.css';
import styles from './App.module.css';
import StudentGrades from './StudentGrades';
import { StudentGradesWithChildren, Row } from './StudentGrades';

function App() {
  const grades = [
    {
      id: '3423432523',
      name: 'Caio',
      grade1: 7,
      grade2: 8,
      grade3: 6,
      grade4: 6,
      avg: 6.75,
    },
    {
      id: '342343253333',
      name: 'Diana',
      grade1: 9,
      grade2: 8,
      grade3: 8,
      grade4: 4,
      avg: 7.25,
    },
    {
      id: '2222',
      name: 'Erick',
      grade1: 8,
      grade2: 7,
      grade3: 7,
      grade4: 10,
      avg: 8,
    },
    {
      id: '4535435',
      name: 'Thiago',
      grade1: 10,
      grade2: 10,
      grade3: 10,
      grade4: 10,
      avg: 10,
    },
  ];

  const grades64025 = [
    {
      id: '4985309673',
      name: 'Ramylson',
      grade1: 7,
      grade2: 8,
      grade3: 6,
      grade4: 6,
      avg: 6.75,
    },
    {
      id: '3334324324',
      name: 'Nathalia',
      grade1: 9,
      grade2: 8,
      grade3: 8,
      grade4: 4,
      avg: 7.25,
    },
    {
      id: '135erwe',
      name: 'Gustavo',
      grade1: 8,
      grade2: 7,
      grade3: 7,
      grade4: 10,
      avg: 8,
    },
    {
      id: 'e52524dsdgst',
      name: 'Jefferson',
      grade1: 10,
      grade2: 10,
      grade3: 10,
      grade4: 10,
      avg: 10,
    },
    {
      id: '5riu2h43jn',
      name: 'Diego',
      grade1: 10,
      grade2: 10,
      grade3: 10,
      grade4: 10,
      avg: 10,
    },
  ];

  const gradesChaves = [
    {
      id: '252rfedfdws',
      name: 'Chaves',
      grade1: 7,
      grade2: 8,
      grade3: 6,
      grade4: 6,
      avg: 6.75,
    },
    {
      id: '352fdw5',
      name: 'Chiquinha',
      grade1: 7,
      grade2: 8,
      grade3: 6,
      grade4: 6,
      avg: 6.75,
    },
    {
      id: 'e52fwef2',
      name: 'Kiko',
      grade1: 7,
      grade2: 8,
      grade3: 6,
      grade4: 6,
      avg: 6.75,
    },
  ];

  return (
    <div>
      <StudentGradesWithChildren>
        {grades.map((studentGrade) => {
          return <Row key={studentGrade.id} student={studentGrade} />;
        })}
      </StudentGradesWithChildren>
      <StudentGrades grades={grades} />
      <StudentGrades grades={grades64025} />
      <StudentGrades grades={gradesChaves} />
      <StudentGrades />
      <StudentGrades grades={[]} />
    </div>
  );
}

export default App;
