// import all images from assets/images directory
import img01 from "../all-images/cars-img/tesla.png";
import img02 from "../all-images/cars-img/aventador.png";
import img03 from "../all-images/cars-img/x3.png";
import img04 from "../all-images/cars-img/murcielago.png";
import img05 from "../all-images/cars-img/camry.png";
import img06 from "../all-images/cars-img/xc90.png";
import img07 from "../all-images/cars-img/fiesta.png";
import img08 from "../all-images/cars-img/rolls-royce.png";

const carData = [
  {
    id: 1,
    brand: "Tesla",
    rating: 112,
    carName: "Tesla Model 3",
    imgUrl: img01,
    model: "Modelo 3",
    price: 298,
    speed: "261 km/h",
    gps: "Navegação GPS",
    seatType: "Bancos Aquecidos",
    automatic: "Automático",
    description:
      "O Tesla Model 3 é um veículo elétrico revolucionário que redefine os padrões da indústria automobilística. Com seu design elegante e futurista, o Model 3 combina aerodinâmica sofisticada e tecnologia de ponta. Seu motor elétrico proporciona uma aceleração impressionante e uma condução suave e silenciosa, enquanto sua bateria de longo alcance oferece uma autonomia excepcional. O interior minimalista e moderno do Model 3 é marcado por um amplo display touchscreen que controla praticamente todas as funções do veículo. Além disso, o Tesla Model 3 é equipado com recursos avançados de assistência ao motorista e segurança, como piloto automático aprimorado e sistema de frenagem de emergência. Combinando desempenho, eficiência e tecnologia inovadora, o Tesla Model 3 é uma opção atraente para quem busca uma experiência de condução sustentável e de alta qualidade.      ",
  },

  {
    id: 2,
    brand: "Lamborghini",
    rating: 102,
    carName: "Lamborghini Aventador",
    imgUrl: img02,
    model: "2023",
    price: 450,
    speed: "355 km/h",
    gps: "Navegação GPS",
    seatType: "Bancos Aquecidos",
    automatic: "Automático",
    description:
      "A Lamborghini Aventador é um supercarro lendário que personifica o que há de mais emocionante e avançado na indústria automobilística. Com seu design aerodinâmico e agressivo, a Aventador chama a atenção por onde passa. Seu motor V12 de alto desempenho oferece uma potência impressionante, proporcionando uma experiência de direção eletrizante. O interior luxuoso e tecnologicamente avançado oferece conforto e sofisticação, com detalhes meticulosos e materiais de alta qualidade. Cada curva e cada detalhe da Lamborghini Aventador exalam paixão e excelência, tornando-a uma verdadeira obra de arte sobre rodas. É um carro que combina perfeitamente potência, estilo e exclusividade, elevando a experiência de dirigir a patamares extraordinários.  ",
  },

  {
    id: 3,
    brand: "BMW",
    rating: 132,
    carName: "BMW X3",
    imgUrl: img03,
    model: "2023",
    price: 270,
    speed: "250 km/h",
    gps: "Navegação GPS",
    seatType: "Bancos Aquecidos",
    automatic: "Automático",
    description:
      "O BMW X3 é um SUV compacto que combina luxo, desempenho e versatilidade em um pacote elegante. Com seu design esportivo e linhas distintivas, o X3 é imponente e sofisticado. Seu interior espaçoso e refinado oferece conforto excepcional, com materiais de alta qualidade e acabamentos elegantes. O X3 está equipado com tecnologias avançadas, como um sistema de infotainment de última geração e recursos de assistência ao motorista, proporcionando uma experiência conectada e segura na estrada. Além disso, o X3 oferece uma gama de motores potentes e eficientes, garantindo um desempenho excepcional e uma condução emocionante. Com sua capacidade off-road, o X3 também é adequado para aventuras fora da estrada. Se você está procurando um SUV premium com estilo, conforto e dinâmica de condução impressionante, o BMW X3 é uma escolha excelente.      ",
  },

  {
    id: 4,
    brand: "Lamborghini",
    rating: 102,
    carName: "Lamborghini Murciélago",
    imgUrl: img04,
    model: " 2023",
    price: 450,
    speed: "342 km/h",
    gps: "Navegação GPS",
    seatType: "Bancos Aquecidos",
    automatic: "Automático",
    description:
      " O Lamborghini Murciélago é um supercarro icônico que personifica luxo e desempenho de tirar o fôlego. Com seu design agressivo e linhas aerodinâmicas, o Murciélago é uma obra-prima visual que transmite poder e elegância. Seu motor V12 de alta potência produz uma sinfonia de ruído que ecoa pela estrada, oferecendo uma experiência de direção emocionante e inesquecível. Com uma cabine luxuosa e repleta de tecnologia, o Murciélago envolve os ocupantes em um ambiente sofisticado e confortável. Os materiais de alta qualidade e os acabamentos requintados demonstram a atenção aos detalhes da Lamborghini. Além disso, o Murciélago apresenta tecnologias avançadas de segurança e desempenho, garantindo uma experiência de direção segura e controlada. Se você está em busca de uma combinação perfeita entre luxo, estilo e desempenho excepcional, o Lamborghini Murciélago é o carro dos seus sonhos.",
  },

  {
    id: 5,
    brand: "Toyota",
    rating: 94,
    carName: "Toyota Camry",
    imgUrl: img05,
    model: "2023",
    price: 190,
    speed: "180 km/h",
    gps: "Navegação GPS",
    seatType: "Bancos Aquecidos",
    automatic: "Automático",
    description:
      "O Toyota Camry é um sedan elegante e confiável que combina conforto, eficiência e desempenho excepcionais. Com seu design moderno e aerodinâmico, o Camry chama a atenção por onde passa. Seu interior espaçoso oferece um ambiente acolhedor e confortável para motorista e passageiros, com assentos ergonômicos e acabamentos de alta qualidade. Equipado com tecnologia avançada, como sistema de entretenimento e conectividade, o Camry mantém você conectado e entretido durante suas viagens. Além disso, o Camry é conhecido por sua excelente economia de combustível, tornando-o uma opção econômica e sustentável. Com um desempenho suave e responsivo, o Camry proporciona uma experiência de direção agradável e segura em todas as situações. Se você está procurando por um sedan confiável, com estilo refinado e recursos modernos, o Toyota Camry é a escolha perfeita.      ",
  },

  {
    id: 6,
    brand: "Volvo ",
    rating: 119,
    carName: "Volvo XC90",
    imgUrl: img06,
    model: "2023",
    price: 200,
    speed: "230 km/h",
    gps: "Navegação GPS",
    seatType: "Bancos Aquecidos",
    automatic: "Automático",
    description:
      "O Volvo XC90 é um SUV sofisticado e versátil que combina luxo, segurança e desempenho excepcionais. Com seu design elegante e robusto, o XC90 impressiona com sua presença nas estradas. Seu interior espaçoso e bem-craft oferece conforto e estilo premium, com assentos ergonômicos e materiais de alta qualidade. O XC90 é equipado com uma série de recursos de segurança inovadores da Volvo, como sistemas avançados de assistência ao motorista e tecnologias de prevenção de colisões, garantindo uma condução segura e tranquila. Além disso, o XC90 oferece excelente desempenho, graças a sua potência e eficiência nos motores. Com uma experiência de condução suave e estável, o XC90 proporciona uma viagem confortável e prazerosa em qualquer terreno. Se você está procurando um SUV premium que oferece estilo, segurança e desempenho excepcionais, o Volvo XC90 é uma escolha excepcional.      ",
  },

  {
    id: 7,
    brand: "Ford",
    rating: 82,
    carName: "Ford Fiesta",
    imgUrl: img07,
    model: "Modelo 3",
    price: 90,
    speed: "170 km/h",
    gps: "Navegação GPS",
    seatType: "Bancos Aquecidos",
    automatic: "Automático",
    description:
      "O Ford Fiesta é um carro compacto que oferece um equilíbrio perfeito entre estilo, eficiência e desempenho. Com um design moderno e aerodinâmico, o Fiesta se destaca nas ruas, proporcionando uma presença cativante. Seu interior bem projetado oferece conforto e praticidade, com assentos confortáveis e tecnologias avançadas ao alcance dos dedos. Com uma variedade de opções de motores, o Fiesta oferece uma condução ágil e responsiva, combinando economia de combustível e desempenho dinâmico. Além disso, o Fiesta oferece uma série de recursos de segurança, como sistemas avançados de frenagem e assistência de estabilidade, garantindo uma condução segura em todas as situações. Com sua reputação de confiabilidade e diversão ao dirigir, o Ford Fiesta é uma escolha popular para aqueles que procuram um carro compacto que oferece estilo, eficiência e diversão na direção.      ",
  },

  {
    id: 8,
    brand: "Rolls Royce",
    rating: 52,
    carName: "Rolls Royce Phantom",
    imgUrl: img08,
    model: "Modelo 3",
    price: 270,
    speed: "250 km/h",
    gps: "Navegação GPS",
    seatType: "Bancos Aquecidos",
    automatic: "Automático",
    description:
      "O Rolls Royce Phantom é o ápice do luxo automotivo. Com um design imponente e elegante, este veículo de prestígio é uma verdadeira obra de arte sobre rodas. Seu interior suntuoso e meticulosamente projetado oferece um ambiente de luxo inigualável, onde cada detalhe é cuidadosamente considerado. Os materiais de alta qualidade, como couro macio e madeira nobre, criam uma atmosfera de requinte e sofisticação. Além disso, o Rolls Royce Phantom é equipado com tecnologia de ponta, proporcionando uma experiência de condução envolvente e confortável. Seu poderoso motor entrega um desempenho excepcional, enquanto a suspensão aprimorada garante um passeio suave e silencioso, mesmo em superfícies irregulares. Cada viagem a bordo de um Rolls Royce Phantom é uma experiência única, combinando luxo, conforto e prestígio em um só veículo.      ",
  },
];

export default carData;
