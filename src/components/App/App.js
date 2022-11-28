import Header from 'components/Header';
import Board from 'components/Board';
import Footer from 'components/Footer';

import styles from './styles.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.top}>
        <Header>
          <h1>Trello Clone</h1>
          <h2>(made with React and Redux)</h2>
        </Header>
        <Board />
      </div>
      <Footer />
    </div>
  );
};

export default App;
