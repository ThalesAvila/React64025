export const StudentGradesWithChildren = ({ children }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Nota 1</th>
            <th>Nota 2</th>
            <th>Nota 3</th>
            <th>Nota 4</th>
            <th>Média</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

const StudentGrades = ({ grades }) => {
  const hasGrades = grades?.length > 0;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Nota 1</th>
            <th>Nota 2</th>
            <th>Nota 3</th>
            <th>Nota 4</th>
            <th>Média</th>
          </tr>
        </thead>
        <tbody>
          {hasGrades &&
            grades.map((studentGrade) => {
              return <Row key={studentGrade.id} student={studentGrade} />;
            })}
        </tbody>
      </table>
      {!hasGrades && (
        <div>Não temos as notas dos alunos disponíveis no momento!</div>
      )}
    </div>
  );
};

export const Row = ({ student: { name, grade1, grade2, grade3, grade4, avg } }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{grade1}</td>
      <td>{grade2}</td>
      <td>{grade3}</td>
      <td>{grade4}</td>
      <td>{avg}</td>
    </tr>
  );
};

export default StudentGrades;
