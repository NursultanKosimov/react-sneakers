

function App() {
  return (
    <div className="wrapper">
      <header >
        <div className="headerleft">
          <img width={40} height={40} src="/img/logo.png" />
          <div className="headerInfo">
            <h3>REACT SNEAKERS</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="headerRight">
          <li>
            <img width={18} height18 src="img/cart.svg" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} height18 src="img/user.svg" />
          </li>
        </ul>
      </header>


      <div className="content">
        <div className="Search">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
      </div>



      <main className="sneakers">
        <div className="card">
          <img width={133} height={112} src="img/sneakers/1.jpg" alt="sneakers" />
          <h5>Мужские Кроссовки Nike Blazer Mid suede</h5>
          <div className="cardButton">
            <div className="price">
              <p>Цена:</p>
              <b>12 990сом.</b>
            </div>
            <button className="button">
              <img src="img/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>

        <div className="card">
          <img width={133} height={112} src="img/sneakers/2.jpg" alt="sneakers" />
          <h5>Мужские Кроссовки nikeBlazerMidSuede</h5>
          <div className="cardButton">
            <div className="price">
              <p>Цена:</p>
              <b>12 990сом.</b>
            </div>
            <button className="button">
              <img src="img/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>

        <div className="card">
          <img width={133} height={112} src="img/sneakers/3.jpg" alt="sneakers" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="cardButton">
            <div className="price">
              <p>Цена:</p>
              <b>12 990сом.</b>
            </div>
            <button className="button">
              <img src="img/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>

        <div className="card">

          <img width={133} height={112} src="img/sneakers/4.jpg" alt="sneakers" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="cardButton">
            <div className="price">
              <p>Цена:</p>
              <b>12 990сом.</b>
            </div>
            <button className="button">
              <img src="img/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>
      </main>

    </div>
  );
}


export default App;
