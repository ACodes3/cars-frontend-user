import FerrariLogo from "./Images/2002-Ferrari-Logo-600x319.png";
import CarImage1 from "./Images/ABARTH-124-SPIDER.webp";
import BMWLogo from "./Images/BMW.svg.png";
import LamborghiniLogo from "./Images/Lamborghini-logo.jpg";
import AudiLogo from "./Images/audi-logo.jpg";
import CarImage6 from "./Images/audi-r8.jpg";
import CarImage5 from "./Images/bmw-m3.avif";
import CarImage2 from "./Images/ferrari-488-gtb.webp";
import FiatAbarthLogo from "./Images/fiat-arabath-logo.png";
import CarImage8 from "./Images/jaguar-f-type.webp";
import JaguarLogo from "./Images/jaguar-logo.png";
import CarImage3 from "./Images/lamborghini-aventador.webp";
import CarImage9 from "./Images/mclaren-720s.jpg";
import McLarenLogo from "./Images/mclaren-logo.jpg";
import CarImage7 from "./Images/mercedes-amg-gt.jpg";
import MercedesLogo from "./Images/mercedes-logo.png";
import CarImage4 from "./Images/porsche-911-gt3.jpg";
import PorscheLogo from "./Images/porsche-logo.png";

const createData = (specification, numericValue) => {
  return { specification, numericValue };
};

const carData = [
  {
    id: 1,
    name: "ABARTH 124 SPIDER",
    price: "from 250€ per day",
    logo: FiatAbarthLogo,
    image: CarImage1,
    specifications: [
      createData("Engine", 1.4),
      createData("HP", 170),
      createData("0-100 km/h (in seconds)", 6.8),
      createData("Top Speed", 232),
    ],
    details: [
      { icon: "PersonIcon", label: "4" },
      { icon: "LuggageIcon", label: "2" },
      { icon: "EarbudsIcon", label: "Manual" },
    ],
  },
  {
    id: 2,
    name: "FERRARI 488 GTB",
    price: "from 1200€ per day",
    logo: FerrariLogo,
    image: CarImage2,
    specifications: [
      createData("Engine", 3.9),
      createData("HP", 670),
      createData("0-100 km/h (in seconds)", 3.0),
      createData("Top Speed", 330),
    ],
    details: [
      { icon: "PersonIcon", label: "2" },
      { icon: "LuggageIcon", label: "1" },
      { icon: "EarbudsIcon", label: "Automatic" },
    ],
  },
  {
    id: 3,
    name: "LAMBORGHINI AVENTADOR",
    price: "from 1500€ per day",
    logo: LamborghiniLogo,
    image: CarImage3,
    specifications: [
      createData("Engine", 6.5),
      createData("HP", 740),
      createData("0-100 km/h (in seconds)", 2.9),
      createData("Top Speed", 350),
    ],
    details: [
      { icon: "PersonIcon", label: "2" },
      { icon: "LuggageIcon", label: "1" },
      { icon: "EarbudsIcon", label: "Automatic" },
    ],
  },
  {
    id: 4,
    name: "PORSCHE 911 GT3",
    price: "from 300€ per day",
    logo: PorscheLogo,
    image: CarImage4,
    specifications: [
      createData("Engine", 3.0),
      createData("HP", 450),
      createData("0-100 km/h (in seconds)", 3.5),
      createData("Top Speed", 306),
    ],
    details: [
      { icon: "PersonIcon", label: "4" },
      { icon: "LuggageIcon", label: "2" },
      { icon: "EarbudsIcon", label: "Automatic" },
    ],
  },
  {
    id: 5,
    name: "BMW M3",
    price: "from 250€ per day",
    logo: BMWLogo,
    image: CarImage5,
    specifications: [
      createData("Engine", 3.0),
      createData("HP", 503),
      createData("0-100 km/h (in seconds)", 3.8),
      createData("Top Speed", 290),
    ],
    details: [
      { icon: "PersonIcon", label: "5" },
      { icon: "LuggageIcon", label: "3" },
      { icon: "EarbudsIcon", label: "Automatic" },
    ],
  },
  {
    id: 6,
    name: "AUDI R8",
    price: "from 500€ per day",
    logo: AudiLogo,
    image: CarImage6,
    specifications: [
      createData("Engine", 5.2),
      createData("HP", 562),
      createData("0-100 km/h (in seconds)", 3.4),
      createData("Top Speed", 324),
    ],
    details: [
      { icon: "PersonIcon", label: "2" },
      { icon: "LuggageIcon", label: "2" },
      { icon: "EarbudsIcon", label: "Automatic" },
    ],
  },
  {
    id: 7,
    name: "MERCEDES-AMG GT",
    price: "from 450€ per day",
    logo: MercedesLogo,
    image: CarImage7,
    specifications: [
      createData("Engine", 4.0),
      createData("HP", 577),
      createData("0-100 km/h (in seconds)", 3.5),
      createData("Top Speed", 318),
    ],
    details: [
      { icon: "PersonIcon", label: "2" },
      { icon: "LuggageIcon", label: "2" },
      { icon: "EarbudsIcon", label: "Automatic" },
    ],
  },
  {
    id: 8,
    name: "JAGUAR F-TYPE",
    price: "from 400€ per day",
    logo: JaguarLogo,
    image: CarImage8,
    specifications: [
      createData("Engine", 5.0),
      createData("HP", 575),
      createData("0-100 km/h (in seconds)", 3.5),
      createData("Top Speed", 300),
    ],
    details: [
      { icon: "PersonIcon", label: "2" },
      { icon: "LuggageIcon", label: "2" },
      { icon: "EarbudsIcon", label: "Automatic" },
    ],
  },
  {
    id: 9,
    name: "MCLAREN 720S",
    price: "from 1000€ per day",
    logo: McLarenLogo,
    image: CarImage9,
    specifications: [
      createData("Engine", 4.0),
      createData("HP", 710),
      createData("0-100 km/h (in seconds)", 2.8),
      createData("Top Speed", 341),
    ],
    details: [
      { icon: "PersonIcon", label: "2" },
      { icon: "LuggageIcon", label: "1" },
      { icon: "EarbudsIcon", label: "Automatic" },
    ],
  },
];

export default carData;
