const { faker } = require("@faker-js/faker");

module.exports = [
  {
    product_link: "https://tokopedia.link/C3MswTnHHBb",
    title: faker.commerce.productName(),
    price: faker.commerce.price({ min: 10000, max : 1000000 }),
    img_url: "https://picsum.photos/400",
  },
  {
    product_link: "https://tokopedia.link/C3MswTnHHBb",
    title: faker.commerce.productName(),
    price: faker.commerce.price({ min: 10000, max : 1000000 }),
    img_url: "https://picsum.photos/400",
  },
  {
    product_link: "https://tokopedia.link/C3MswTnHHBb",
    title: faker.commerce.productName(),
    price: faker.commerce.price({ min: 10000, max : 1000000 }),
    img_url: "https://picsum.photos/400",
  },
  {
    product_link: "https://tokopedia.link/C3MswTnHHBb",
    title: faker.commerce.productName(),
    price: faker.commerce.price({ min: 10000, max : 1000000 }),
    img_url: "https://picsum.photos/400",
  }
];
