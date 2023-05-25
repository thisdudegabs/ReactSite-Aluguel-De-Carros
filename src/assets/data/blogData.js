// import images from all-images/blog-img directory
import img01 from "../all-images/blog-img/blog-1.jpg";
import img02 from "../all-images/blog-img/blog-2.jpg";
import img03 from "../all-images/blog-img/blog-3.jpg";

const blogData = [
  {
    id: 1,
    title: "Horário de Pico em São Paulo.",
    author: "Gabriel",
    date: "23, Maio, 2023",
    time: "05:05",
    imgUrl: img01,
    description:
      " O trânsito de São Paulo é conhecido por sua intensidade e desafios diários. Com uma população em constante crescimento e uma vasta frota de veículos, as ruas da cidade podem se tornar verdadeiros labirintos de congestionamento. Os horários de pico são especialmente desafiadores, com longos engarrafamentos e uma corrida contra o relógio para chegar ao destino. Nesse cenário, é essencial estar preparado e adotar algumas estratégias para enfrentar o tráfego paulistano. Uma das melhores formas de lidar com o trânsito de São Paulo é planejar antecipadamente. Conheça os horários de pico e evite sair nas horas mais movimentadas, se possível. Utilize aplicativos de trânsito em tempo real para acompanhar as condições das vias e buscar rotas alternativas. Além disso, considere o uso de meios de transporte público, como metrô, ônibus e trens, que podem ser opções mais eficientes em determinadas situações. Esteja sempre atento às regras de trânsito, respeite os limites de velocidade e mantenha a calma durante os congestionamentos. Com um pouco de planejamento e paciência, é possível navegar pelas ruas de São Paulo com mais tranquilidade.",
    quote: "O trânsito de São Paulo: intenso e desafiador.",
  },

  {
    id: 2,
    title: "O que fazer quando acaba a bateria?",
    author: "Lais",
    date: "13, Maio, 2023",
    time: "13:00",
    imgUrl: img02,
    description:
      " Se a bateria do seu carro estiver baixa, algumas medidas podem ser tomadas para resolver a situação. Primeiro, verifique se os faróis e acessórios elétricos estão desligados para evitar o consumo de energia desnecessário. Em seguida, você pode tentar usar cabos de ligação e a bateria de outro veículo. Certifique-se de seguir corretamente as instruções de conexão dos cabos para evitar danos aos veículos. Se não se sentir confortável em fazer isso por conta própria, é recomendado chamar um serviço de assistência técnica automotiva para ajudar a recarregar a bateria ou providenciar um reboque para a oficina mais próxima. Lembre-se de que é importante manter a manutenção regular da bateria do seu carro para evitar contratempos como esse.",
    quote:
      "Para lidar com uma bateria de carro descarregada, verifique as conexões e procure assistência técnica especializada para recarregá-la adequadamente.",
  },

  {
    id: 3,
    title: "Viajando com amigos!",
    author: "Mateus",
    date: "8, Maio, 2023",
    time: "06:00",
    imgUrl: img03,
    description:
      " Viajar com amigos é uma experiência enriquecedora, repleta de diversão, memórias compartilhadas e laços fortalecidos. Ao explorar novos destinos juntos, há uma sensação de camaradagem e aventura que torna a viagem ainda mais especial. É uma oportunidade de conhecer melhor uns aos outros, descobrir interesses comuns e desfrutar de momentos de descontração. Desde planejar o itinerário até compartilhar quartos de hotel ou alugar uma casa, a viagem com amigos é uma oportunidade única de criar lembranças duradouras e fortalecer os laços de amizade..",
    quote:
      "Viajar com amigos é embarcar em uma jornada repleta de risadas, aventuras e conexões mais profundas.",
  },
];

export default blogData;
