import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    // url: api/heroes
    const toppings = [
      {
        id: 1,
        name: "anchovy"
      },
      {
        id: 2,
        name: "bacon"
      },
      {
        id: 3,
        name: "basil"
      },
      {
        id: 4,
        name: "chili"
      },
      {
        id: 5,
        name: "mozzarella"
      },
      {
        id: 6,
        name: "mushroom"
      },
      {
        id: 7,
        name: "olive"
      },
      {
        id: 8,
        name: "onion"
      },
      {
        id: 9,
        name: "pepper"
      },
      {
        id: 10,
        name: "pepperoni"
      },
      {
        id: 11,
        name: "sweetcorn"
      },
      {
        id: 12,
        name: "tomato"
      }
    ];

    // url: api/countries
    const pizzas = [
      {
        name: "Blazin' Inferno",
        toppings: [
          {
            id: 10,
            name: "pepperoni"
          },
          {
            id: 9,
            name: "pepper"
          },
          {
            id: 3,
            name: "basil"
          },
          {
            id: 4,
            name: "chili"
          },
          {
            id: 7,
            name: "olive"
          },
          {
            id: 2,
            name: "bacon"
          }
        ],
        id: 1
      },
      {
        name: "Seaside Surfin'",
        toppings: [
          {
            id: 6,
            name: "mushroom"
          },
          {
            id: 7,
            name: "olive"
          },
          {
            id: 2,
            name: "bacon"
          },
          {
            id: 3,
            name: "basil"
          },
          {
            id: 1,
            name: "anchovy"
          },
          {
            id: 8,
            name: "onion"
          },
          {
            id: 11,
            name: "sweetcorn"
          },
          {
            id: 9,
            name: "pepper"
          },
          {
            id: 5,
            name: "mozzarella"
          }
        ],
        id: 2
      },
      {
        name: "Plain Ol' Pepperoni",
        toppings: [
          {
            id: 10,
            name: "pepperoni"
          }
        ],
        id: 3
      }
    ];

    return { toppings, pizzas };
  }
}
