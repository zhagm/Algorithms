const roads = [
  "Alice's House-Bob's House",
  "Alice's House-Cabin",
  "Alice's House-Post Office",
  "Bob's House-Town Hall",
  "Daria's House-Ernie's House",
  "Daria's House-Town Hall",
  "Ernie's House-Grete's House",
  "Grete's House-Farm",
  "Grete's House-Shop",
  "Marketplace-Farm",
  "Marketplace-Post Office",
  "Marketplace-Shop",
  "Marketplace-Town Hall",
  "Shop-Town Hall"
];

function buildGraph(edges) {
  return edges.reduce((graph, str) => {
    let [key, valItem] = str.split("-");
    if (graph[key]) graph[key].push(valItem);
    else graph[key] = [valItem];
    if (graph[valItem]) graph[valItem].push(key);
    else graph[valItem] = [key];
    return graph;
  }, {});
}

class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }

  move(destination) {
    if (!roadGraph[this.place].includes(destination)) return this;
    let newParcels = [];
    for (let parcel of this.parcels) {
      if (parcel.address !== destination)
        newParcels.push({ ...parcel, place: destination });
    }
    return new VillageState(destination, newParcels);
  }
}

// robot is a function that takes a villageState and memory and returns an object with direction to move and a memory value
function runRobot(state, robot, memory) {
  let turn = 0;
  while (++turn) {
    if (state.parcels.length == 0) {
      console.log(`Done in ${turn} turns`);
      break;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    console.log(`Moved to ${action.direction}`);
  }
}

// Random picker and generators for testing
function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

function randomRobot(state) {
  return { direction: randomPick(roadGraph[state.place]) };
}

VillageState.random = function(parcelCount = 5) {
  let parcels = [];
  for (let i = 0; i < parcelCount; i++) {
    let address = randomPick(Object.keys(roadGraph));
    let place;
    do {
      place = randomPick(Object.keys(roadGraph));
    } while (place == address);
    parcels.push({ place, address });
  }
  return new VillageState("Post Office", parcels);
};

const roadGraph = buildGraph(roads);
let testVillageState = VillageState.random();
runRobot(testVillageState, randomRobot);
