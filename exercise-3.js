function createStore() {
  let store = [];
  return function addStore(obj) {
    for (const index in obj) {
      if (Object.values(index)) {
        store.push(obj.name);
      }
      console.log(store);
      return store;
    }
  };
}

const redPants = { id: 1, name: "Red Pants" };
const whiteHat = { id: 2, name: "White Hat" };
const blackSneakers = { id: 3, name: "Black Sneakers" };

console.log("--- Dress Store ---");
const dressStore = createStore();
dressStore(redPants);
dressStore(whiteHat);

console.log("--- Shoes Store ---");
const shoesStore = createStore();
shoesStore(blackSneakers);
