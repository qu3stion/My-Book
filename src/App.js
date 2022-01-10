import './App.css';
import Book from './components/Book'
import Header from "./components/Header";
import Footer from "./components/Footer";
import book1 from "./images/coverOne.jpg";
import book2 from "./images/coverTwo.jpg";

function App() {
  return (
    <div className="App">
     <Header />
      <Book title="Fahrenheit 451"
      description="Et velit placerat voluptatum vis. Et tantas essent possim pri. Per option delicatissimi no. Sea voluptaria cotidieque in, sit ullum aeterno aliquip ut. Vim ut probo mucius adversarium. At vis equidem epicuri moderatius, autem errem conclusionemque has at. Eam detracto legendos eu, no tale eros erroribus pri."
      image={book1}/>

      <Book title="The Hitchhiker's Guide to the Galaxy"
      description="Et velit placerat voluptatum vis. Et tantas essent possim pri. Per option delicatissimi no. Sea voluptaria cotidieque in, sit ullum aeterno aliquip ut. Vim ut probo mucius adversarium. At vis equidem epicuri moderatius, autem errem conclusionemque has at. Eam detracto legendos eu, no tale eros erroribus pri."
      image={book2}/>
     <Footer />
    </div>
  );
}

export default App;
