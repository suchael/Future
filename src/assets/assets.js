//logo
import logo from "./logo.png";
// for  img effect

// gadgets
import iphone1 from "./iphone1.png";
import iphone3 from "./iphone3.png";
import iphone4 from "./iphone4.png";
import iphone5 from "./iphone5.png";
import iphone6 from "./iphone6.png";
import laptop1 from "./laptop1.png";
import laptop2 from "./laptop2.png";
import smartwatch1 from "./smartwatch1.png";
import smartwatch2 from "./smartwatch2.png";
import headset1 from "./headset1.png";
import headset2 from "./headset2.png";
import xiaomi from "./xiaomi.png";
//customer support
import support from "./support.png";
import shaking from "./shaking.png";
import ticktick from "./ticktick.png";

export const assets = {
  logo,

  support,
  shaking,
  ticktick,
  //   iphone1,
  //   iphone3,
  //   iphone4,
  //   iphone5,
  //   iphone6,
  //   laptop1,
  //   laptop2,

  //   smartwatch1,
  //   smartwatch2,
  //   headset1,
  //   headset2,
  //   xiaomi,
};
export const products = [
  {
    _id: "aa",
    name: "iPhone 11",
    description:
      "Introducing iPhone 11 Pro Max. With a 6.5-inch Super Retina XDR OLED display, it offers an unprecedented level of visual quality. The device's 5G chip and Neural Engine enable seamless 4K video calls and advanced image and video features.",
    price: 1299.99,
    image: [iphone1],
    category: "Communication devices",
    subcategory: "phones",
    features: ["5G", "Super Retina XDR OLED", "4K Video", "Neural Engine"],
    data: 121212,
    bestseller: true,
  },
  {
    _id: "ab",
    name: "iPhone 12",
    description:
      "Introducing iPhone 11 Pro Max. With a 6.5-inch Super Retina XDR OLED display, it offers an unprecedented level of visual quality. The device's 5G chip and Neural Engine enable seamless 4K video calls and advanced image and video features.",
    price: 2299.99,
    image: [iphone3],
    category: "Communication devices",
    subcategory: "phones",
    features: ["5G", "Super Retina XDR OLED", "4K Video", "Neural Engine"],
    data: 121212,
    bestseller: false,
  },
  {
    _id: "ac",
    name: "iPhone 13",
    description:
      "Introducing iPhone 11 Pro Max. With a 6.5-inch Super Retina XDR OLED display, it offers an unprecedented level of visual quality. The device's 5G chip and Neural Engine enable seamless 4K video calls and advanced image and video features.",
    price: 3299.99,
    image: [iphone4],
    category: "Communication devices",
    subcategory: "phones",
    features: ["5G", "Super Retina XDR OLED", "4K Video", "Neural Engine"],
    data: 121212,
    bestseller: false,
  },
  {
    _id: "ad",
    name: "iPhone 14",
    description:
      "Introducing iPhone 11 Pro Max. With a 6.5-inch Super Retina XDR OLED display, it offers an unprecedented level of visual quality. The device's 5G chip and Neural Engine enable seamless 4K video calls and advanced image and video features.",
    price: 6299.99,
    image: [iphone5],
    category: "Communication devices",
    subcategory: "phones",
    features: ["5G", "Super Retina XDR OLED", "4K Video", "Neural Engine"],
    data: 121212,
    bestseller: false,
  },
  {
    _id: "ae",
    name: "iPhone 15",
    description:
      "Introducing iPhone 11 Pro Max. With a 6.5-inch Super Retina XDR OLED display, it offers an unprecedented level of visual quality. The device's 5G chip and Neural Engine enable seamless 4K video calls and advanced image and video features.",
    price: 8299.99,
    image: [iphone6],
    category: "Communication devices",
    subcategory: "phones",
    features: ["5G", "Super Retina XDR OLED", "4K Video", "Neural Engine"],
    data: 121212,
    bestseller: false,
  },
  {
    _id: "af",
    name: "hp corei5",
    description: "This is an awesome laptop to use for coding etc",
    price: 2000.0,
    image: [laptop1],
    category: "Entertainment gadgets",
    subcategory: "laptop",
    features: ["8GB Ram, corei5, screentouch, 252gig, backlit etc"],
    data: 121212,
    bestseller: false,
  },
  {
    _id: "ag",
    name: "hp corei5",
    description: "This is an awesome laptop to use for coding etc",
    price: 2500.0,
    image: [laptop2],
    category: "Entertainment gadgets",
    subcategory: "laptop",
    features: ["8GB Ram, corei5, screentouch, 252gig, backlit etc"],
    data: 121212,
    bestseller: true,
  },
  {
    _id: "ah",
    name: "smartwatch",
    description:
      "This is an awesome watch for fitness and easy tracking pf activities",
    price: 5500.0,
    image: [smartwatch1],
    category: "others",
    subcategory: "others",
    features: [" touchscreen,bluetooth"],
    data: 121212,
    bestseller: false,
  },
  {
    _id: "ai",
    name: "smartwatch (black)",
    description:
      "This is an awesome watch for fitness and easy tracking pf activities",
    price: 5000.0,
    image: [smartwatch2],
    category: "others",
    subcategory: "others",
    features: [" touchscreen,bluetooth"],
    data: 121212,
    bestseller: true,
  },
  {
    _id: "aj",
    name: "oriamo headphone",
    description: "This is an awesome headset for music ",
    price: 100.0,
    image: [headset1],
    category: "Audio gadgets",
    subcategory: "Headphones",
    features: [" Basslit"],
    data: 121212,
    bestseller: false,
  },
  {
    _id: "ak",
    name: "Zelot headphone",
    description: "This is an awesome headset for music ",
    price: 150.0,
    image: [headset2],
    category: "Audio gadgets",
    subcategory: "Headphones",
    features: [" Basslit"],
    data: 121212,
    bestseller: true,
  },
  {
    _id: "al",
    name: "Xiaomi",
    description: "This is an awesome headset for music ",
    price: 150.0,
    image: [xiaomi],
    category: "Communication devices",
    subcategory: "phone",
    features: ["8ram, 64gig, waterproof"],
    data: 121212,
    bestseller: true,
  },
];
