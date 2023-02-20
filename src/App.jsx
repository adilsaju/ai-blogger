import logo from './logo.svg';
import './App.css';
import Blog from './components/Blog'

function App() {
  return (
    <div className="App">
        <nav>
        <ul>
  <li><a class="active" href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul>

        </nav>

        <div className='blogs'>
            <Blog></Blog>

            <Blog></Blog>


            <Blog></Blog>


            <Blog></Blog>

        </div>

    </div>
  );
}

export default App;
