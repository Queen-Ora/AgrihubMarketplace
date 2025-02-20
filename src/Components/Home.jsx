
const Home = () => {
    return (
        <div>
            <h1 className="text-center">Welcome to Agrihub Marketplace</h1>
            <section className="nav-bar">
            <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <button><a href="/cart">Cart</a></button>
        </ul>
      </nav>

            </section>
        </div>
    );
};

export default Home;