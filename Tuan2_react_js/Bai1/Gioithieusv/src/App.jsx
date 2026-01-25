import Header from './components/Header';
import StudentInfo from './components/StudentInfo';
import Footer from './components/Footer';

function App() {
  const student = {
    name: 'Nguyễn Như Ngọc Quyên',
    id: '23663981',
    className: 'DHKTPM19ATT'
  };

  return (
    <>
      <Header />
      <StudentInfo
        name={student.name}
        id={student.id}
        className={student.className}
      />
      <Footer />
    </>
  );
}

export default App;
