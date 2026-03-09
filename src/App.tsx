import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className="overflow-hidden">
      <Header />
      <main>
        <section>
          <Hero />
        </section>
        <section>
          <Content />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
