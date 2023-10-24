import './Home.scss';

const Home = () => {
  return (
    <section className="home-container">
      <div className="home--text">
        <h5>So, you want to travel to</h5>
        <h1>SPACE</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <button className="home-btn">
        <h4 className="home-btn--text">EXPLORE</h4>
      </button>
    </section>
  );
};

export default Home;
