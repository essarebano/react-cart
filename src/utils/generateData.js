import { faker } from "@faker-js/faker";

export function generateDataArr(length) {
  return Array.from({ length }, () => {
    return {
      id: Number(faker.string.numeric({ length: 5 })),
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      maxCount: faker.number.int({ min: 5, max: 20 })
    };
  });
}
