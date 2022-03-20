import './App.css';
import BYDHan from './img/BYD-Han.jpg';
import BMWiX from './img/BMW-iX.jpg';
import BYDTan from './img/BYD-Tan.jpg';
import CheryEQ1 from './img/Chery-EQ1.jpg';
function App() {
  let section = document.querySelectorAll("section");
  let menu = document.querySelectorAll("header nav a");

window.onscroll = () => {
  section.forEach((i) => {
    let top = window.scrollY;
    let offset = i.offsetTop - 150;
    let height = i.offsetHeight;
    let id = i.getAttribute("id");

    if (top >= offset && top < offset + height) {
      menu.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

reveal();

  return (
    <div className="App">
    <header>
      <nav>
        <a href="#home" class="active">Home</a>
        <a href="#about">About</a>
        <a href="#services">Carros</a>
        <a href="#contact">Lojas</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
    <section id="home">
      <div class="container reveal">
        <h1>Encontre seu proximo carro Aqui! &#8595;</h1>
      </div>
    </section>
    <section id="about">
      <div class="container reveal">
        <h2>Carros Eletricos</h2>
        <div class="text-container">
          <div class="text-box">
            <h3>Section Text</h3>
            <p>
              Carros eletricos deixaram de ser algo sobre o futuro e se tornaram uma possibilidade de vida.
              Economicos, não poluidores e amigos do meio ambiente.
              Escolha o seu carro e aproveite a vida.
            </p>
          </div>
        </div>
      </div>
    </section>
    <div id="services">
    <section>
      <div class="container reveal">
        <h2>BYD-Han</h2>
        <div class="text-container">
          <div class="text-box">
            <h3>Section text</h3>
            <img src={BYDHan} alt="foto do carro BYD_HAN"/>
            <p>  
              BYD chegará por aqui com o SUV e também com um sedã elétrico. É o Han, carro que se assemelha em porte a um modelo grande.
              As especificações para o Brasil, assim como o preço, ainda não foram confirmadas.
              Lá fora, ele pode ter um motor elétrico de 222 cv, ou dois entregando 494 cv.
              A autonomia, respectivamente, chega a 605 km e 550 km. A bateria de 77 kWh é a mesma em ambos os casos.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container reveal">
        <h2>BYD-Tan</h2>
        <div class="text-container">
          <div class="text-box">
            <h3>Section text</h3>
            <img src={BYDTan} alt="foto do carro BYD_HAN"/>
            <p>  
              BYD chegará por aqui com o SUV e também com um sedã elétrico. É o Han, carro que se assemelha em porte a um modelo grande.
              As especificações para o Brasil, assim como o preço, ainda não foram confirmadas.
              Lá fora, ele pode ter um motor elétrico de 222 cv, ou dois entregando 494 cv.
              A autonomia, respectivamente, chega a 605 km e 550 km. A bateria de 77 kWh é a mesma em ambos os casos.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container reveal">
        <h2>BMW-iX</h2>
        <div class="text-container">
          <div class="text-box">
            <h3>Section text</h3>
            <img src={BMWiX} alt="foto do carro BYD_HAN"/>
            <p>  
              BYD chegará por aqui com o SUV e também com um sedã elétrico. É o Han, carro que se assemelha em porte a um modelo grande.
              As especificações para o Brasil, assim como o preço, ainda não foram confirmadas.
              Lá fora, ele pode ter um motor elétrico de 222 cv, ou dois entregando 494 cv.
              A autonomia, respectivamente, chega a 605 km e 550 km. A bateria de 77 kWh é a mesma em ambos os casos.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container reveal">
        <h2>Chery-EQ1</h2>
        <div class="text-container">
          <div class="text-box">
            <h3>Section text</h3>
            <img src={CheryEQ1} alt="foto do carro BYD_HAN"/>
            <p>  
              BYD chegará por aqui com o SUV e também com um sedã elétrico. É o Han, carro que se assemelha em porte a um modelo grande.
              As especificações para o Brasil, assim como o preço, ainda não foram confirmadas.
              Lá fora, ele pode ter um motor elétrico de 222 cv, ou dois entregando 494 cv.
              A autonomia, respectivamente, chega a 605 km e 550 km. A bateria de 77 kWh é a mesma em ambos os casos.
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>

    <section id="lojas">
      <div class="container reveal">
        <h2>Lojas</h2>
        <div class="text-container">
          <div class="text-box">
            <h3>Loja 1</h3>
            <p>Av. Marcos Silva Palino numero:4003</p>
            <p>tel:(011) 97845-1234</p>
          </div>
          <div class="text-box">
            <h3>Loja 2</h3>
            <p>Av. Domingos Almeida numero:234</p>
            <p>tel:(011) 97848-3453</p>
          </div>
        </div>
      </div>
    </section>

    <section id="contact">
      <div class="container reveal">
        <h2>Contact</h2>
        <div class="text-container">
          <div class="text-box">
            <h3>Contatos</h3>
            <p>Email Oficial:www.supercarroseletricos.com</p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default App;
