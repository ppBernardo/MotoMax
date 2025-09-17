import { MotorcycleData } from "@/hooks/useMotorcycleSearch";
import hondaImage from "@/assets/honda-cbr600rr.jpg";
import kawasakiImage from "@/assets/kawasaki-ninja400.jpg";
import suzukiImage from "@/assets/suzuki-gsxs750.jpg";
import bmwImage from "@/assets/bmws100rr.jpg";
import yamahaImage from "@/assets/yamaha-mt-09-abs-cinza.jpg";
import r3Image from "@/assets/r3.png";
import ducatiImage from "@/assets/panigale-v2.jpg";
import gsx750Image from "@/assets/GSX-S750-2020-08-600x324.jpg";
import cb650rImage from "@/assets/cb650r.jpg";
import ktm390dukeImage from "@/assets/KTM 390 Duke.jpg";
import triumphStreetTriple765Image from "@/assets/triumphStreetTriple.jpg";
import apriliaRS660Image from "@/assets/apriliaRS660.jpg";
import harleyDavidsonSportsterImage from "@/assets/harleyDavidsonSportster.jpg";
import kawasakiZ900Image from "@/assets/kawasakiZ900.jpg";
import yamahaR1Image from "@/assets/yamaha2.jpg";
import hondaCB1000RImage from "@/assets/hondaCB1000R.webp";
import suzukiGSXR1000Image from "@/assets/suzukiGSXR1000.webp";

export const motorcyclesDatabase: MotorcycleData[] = [
  {
    id: "1",
    name: "CBR 600RR",
    brand: "Honda",
    year: 2023,
    price: 45900,
    installment: 765,
    installmentCount: 60,
    condition: "nova",
    image: hondaImage,
    features: ["ABS", "Tração", "LED", "Digital"],
    type: "esportiva"
  },
  {
    id: "2", 
    name: "MT-09",
    brand: "Yamaha",
    year: 2022,
    price: 38500,
    installment: 642,
    installmentCount: 60,
    mileage: 15000,
    condition: "seminova",
    image: yamahaImage,
    features: ["ABS", "Controle de Tração", "Modos de Pilotagem"],
    type: "naked"
  },
  {
    id: "3",
    name: "Ninja 400",
    brand: "Kawasaki", 
    year: 2023,
    price: 29900,
    installment: 498,
    installmentCount: 60,
    condition: "nova",
    image: kawasakiImage,
    features: ["ABS", "Slip Assist", "LED"],
    type: "esportiva"
  },
  {
    id: "4",
    name: "GSX-S750",
    brand: "Suzuki",
    year: 2022,
    price: 35200,
    installment: 587,
    installmentCount: 60,
    mileage: 8500,
    condition: "seminova",
    image: gsx750Image,
    features: ["ABS", "Tração", "LED", "Digital"],
    type: "naked"
  },
  {
    id: "5",
    name: "CB 650R",
    brand: "Honda",
    year: 2023,
    price: 42500,
    installment: 708,
    installmentCount: 60,
    condition: "nova",
    image: cb650rImage,
    features: ["ABS", "LED", "Digital", "Controle de Tração"],
    type: "naked"
  },
  {
    id: "6",
    name: "YZF-R3",
    brand: "Yamaha",
    year: 2022,
    price: 25900,
    installment: 432,
    installmentCount: 60,
    mileage: 8000,
    condition: "seminova",
    image: r3Image,
    features: ["ABS", "LED", "Painel Digital"],
    type: "esportiva"
  },
  {
    id: "7",
    name: "Ducati Panigale V2",
    brand: "Ducati",
    year: 2023,
    price: 78900,
    installment: 1315,
    installmentCount: 60,
    condition: "nova",
    image: ducatiImage,
    features: ["ABS", "Controle de Tração", "Modos de Pilotagem", "LED", "Digital"],
    type: "esportiva"
  },
  {
    id: "8",
    name: "BMW S1000RR",
    brand: "BMW",
    year: 2022,
    price: 89500,
    installment: 1492,
    installmentCount: 60,
    mileage: 12000,
    condition: "seminova",
    image: bmwImage,
    features: ["ABS", "Controle de Tração", "Modos de Pilotagem", "LED", "Digital", "Quick Shifter"],
    type: "esportiva"
  },
  {
    id: "9",
    name: "KTM 390 Duke",
    brand: "KTM",
    year: 2023,
    price: 28900,
    installment: 482,
    installmentCount: 60,
    condition: "nova",
    image: ktm390dukeImage,
    features: ["ABS", "LED", "Digital", "Controle de Tração"],
    type: "naked"
  },
  {
    id: "10",
    name: "Triumph Street Triple 765",
    brand: "Triumph",
    year: 2022,
    price: 52500,
    installment: 875,
    installmentCount: 60,
    mileage: 6500,
    condition: "seminova",
    image: triumphStreetTriple765Image,
    features: ["ABS", "Controle de Tração", "Modos de Pilotagem", "LED", "Digital"],
    type: "naked"
  },
  {
    id: "11",
    name: "Aprilia RS 660",
    brand: "Aprilia",
    year: 2023,
    price: 45900,
    installment: 765,
    installmentCount: 60,
    condition: "nova",
    image: apriliaRS660Image,
    features: ["ABS", "Controle de Tração", "Modos de Pilotagem", "LED", "Digital", "Quick Shifter"],
    type: "esportiva"
  },
  {
    id: "12",
    name: "Harley-Davidson Sportster",
    brand: "Harley-Davidson",
    year: 2022,
    price: 42500,
    installment: 708,
    installmentCount: 60,
    mileage: 15000,
    condition: "seminova",
    image: harleyDavidsonSportsterImage,
    features: ["ABS", "LED", "Digital", "Cruise Control"],
    type: "custom"
  },
  {
    id: "13",
    name: "Kawasaki Z900",
    brand: "Kawasaki",
    year: 2023,
    price: 38500,
    installment: 642,
    installmentCount: 60,
    condition: "nova",
    image: kawasakiZ900Image,
    features: ["ABS", "Controle de Tração", "Modos de Pilotagem", "LED", "Digital"],
    type: "naked"
  },
  {
    id: "14",
    name: "Yamaha R1",
    brand: "Yamaha",
    year: 2022,
    price: 78900,
    installment: 1315,
    installmentCount: 60,
    mileage: 8000,
    condition: "seminova",
    image: yamahaR1Image,
    features: ["ABS", "Controle de Tração", "Modos de Pilotagem", "LED", "Digital", "Quick Shifter"],
    type: "esportiva"
  },
  {
    id: "15",
    name: "Honda CB 1000R",
    brand: "Honda",
    year: 2023,
    price: 52500,
    installment: 875,
    installmentCount: 60,
    condition: "nova",
    image: hondaCB1000RImage,
    features: ["ABS", "Controle de Tração", "Modos de Pilotagem", "LED", "Digital"],
    type: "naked"
  },
  {
    id: "16",
    name: "Suzuki GSX-R1000",
    brand: "Suzuki",
    year: 2022,
    price: 65900,
    installment: 1098,
    installmentCount: 60,
    mileage: 12000,
    condition: "seminova",
    image: suzukiGSXR1000Image,
    features: ["ABS", "Controle de Tração", "Modos de Pilotagem", "LED", "Digital", "Quick Shifter"],
    type: "esportiva"
  }
];