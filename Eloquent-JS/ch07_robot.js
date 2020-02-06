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

const mailRoute = [
  "Alice's House",
  "Cabin",
  "Alice's House",
  "Bob's House",
  "Town Hall",
  "Daria's House",
  "Ernie's House",
  "Grete's House",
  "Shop",
  "Grete's House",
  "Farm",
  "Marketplace",
  "Post Office"
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

function runRobotTester(state, robot, memory) {
  let turn = 0;
  while (++turn) {
    if (state.parcels.length == 0) {
      return turn;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
  }
}

function routeRobot(state, memory) {
  if (!memory || memory.length == 0) {
    memory = mailRoute;
  }
  return { direction: memory[0], memory: memory.slice(1) };
}

function goalOrientedRobot({ place, parcels }, route) {
  if (route.length == 0) {
    let parcel = parcels[0];
    if (parcel.place != place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return { direction: route[0], memory: route.slice(1) };
}

function findRoute(graph, from, to) {
  let work = [{ at: from, route: [] }];
  for (let i = 0; i < work.length; i++) {
    let { at, route } = work[i];
    for (let place of graph[at]) {
      if (place == to) return route.concat(place);
      if (!work.some(w => w.at == place)) {
        work.push({ at: place, route: route.concat(place) });
      }
    }
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
runRobot(testVillageState, goalOrientedRobot, []);
runRobot(testVillageState, routeRobot);
runRobot(testVillageState, randomRobot, []);

// Exercises:

// 1. Measuring a robot
function compareRobots(robot1, memory1, robot2, memory2) {
  // takes two robots, generates 100 tasks and lets each robot solve it, outputs average # of steps each robot took per task
  let robot1Total = 0,
    robot2Total = 0;
  for (let i = 0; i < 100; i++) {
    let task = VillageState.random();
    robot1Total += runRobotTester(task, robot1, []);
    robot2Total += runRobotTester(task, robot2, []);
  }
  return {
    robot1: Math.floor(robot1Total / 100),
    robot2: Math.floor(robot2Total / 100)
  };
}
console.log(
  "compareRobots(routeRobot, [], goalOrientedRobot, [])",
  compareRobots(routeRobot, [], goalOrientedRobot, [])
);
