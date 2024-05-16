// JASKIS
// paste the MongoDB commands you use underneath each prompt
db jaskis
use jaskis
switched to db jaskis
db.createCollection('bounties')
{ ok: 1 }
show collections
bounties
db.bounties.insertOne({
})
{
  acknowledged: true,
  insertedId: ObjectId('66430390ccb53ff8b2387b63')
}
db.bounties.insertOne({
  name: "Thanoceros",
  species: "Rhinoceros",
  location: "Grasslands",
  wantedFor: "Eating too much grass",
  client: "Songbird",
  reward: 10000,
  captured: false


})
{
  acknowledged: true,
  insertedId: ObjectId('664303f5ccb53ff8b2387b64')
}
db.bounties.insertMany([
  {
    "name": "Lokinkajou",
    "species": "Kinkajou",
    "location": "Tropical rainforest",
    "wantedFor": "Partying too late at night",
    "client": "White tiger",
    "reward": 1000,
    "captured": false
  },
  {
    "name": "Nebullama",
    "species": "Llama",
    "location": "Grasslands",
    "wantedFor": "Drinking all the water from the ocean",
    "client": "Songbird",
    "reward": 2500,
    "captured": false
  },
  {
    "name": "Polarwind",
    "species": "Polar Bear",
    "location": "Arctic",
    "wantedFor": "Not hibernating",
    "client": "Sabertooth",
    "reward": 4000,
    "captured": false
  },
  {
    "name": "Wrecking Crows",
    "species": "Crow",
    "location": "Grasslands",
    "wantedFor": "Cawing too loudly",
    "client": "Red wolf",
    "reward": 40000,
    "captured": false
  },
  {
    "name": "Grandhog",
    "species": "Groundhog",
    "location": "Woodlands",
    "wantedFor": "Not coming out of the hole on time and prolonging winter",
    "client": "Songbird",
    "reward": 50000,
    "captured": false
  },
  {
    "name": "Grim Panda",
    "species": "Giant Panda",
    "location": "Temperate forest",
    "wantedFor": "Eating all the bamboo",
    "client": "Red wolf",
    "reward": 5000,
    "captured": false
  }
]

)
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('66430508ccb53ff8b2387b65'),
    '1': ObjectId('66430508ccb53ff8b2387b66'),
    '2': ObjectId('66430508ccb53ff8b2387b67'),
    '3': ObjectId('66430508ccb53ff8b2387b68'),
    '4': ObjectId('66430508ccb53ff8b2387b69'),
    '5': ObjectId('66430508ccb53ff8b2387b6a')
  }
}
db
jaskis
db.bounties.find({ location: "Grasslands"})
{
  _id: ObjectId('664303f5ccb53ff8b2387b64'),
  name: 'Thanoceros',
  species: 'Rhinoceros',
  location: 'Grasslands',
  wantedFor: 'Eating too much grass',
  client: 'Songbird',
  reward: 10000,
  captured: false
}
{
  _id: ObjectId('66430508ccb53ff8b2387b66'),
  name: 'Nebullama',
  species: 'Llama',
  location: 'Grasslands',
  wantedFor: 'Drinking all the water from the ocean',
  client: 'Songbird',
  reward: 2500,
  captured: false
}
{
  _id: ObjectId('66430508ccb53ff8b2387b68'),
  name: 'Wrecking Crows',
  species: 'Crow',
  location: 'Grasslands',
  wantedFor: 'Cawing too loudly',
  client: 'Red wolf',
  reward: 40000,
  captured: false
}
db.bounties.find({ reward: { $gte: 10000 } })
{
  _id: ObjectId('664303f5ccb53ff8b2387b64'),
  name: 'Thanoceros',
  species: 'Rhinoceros',
  location: 'Grasslands',
  wantedFor: 'Eating too much grass',
  client: 'Songbird',
  reward: 10000,
  captured: false
}
{
  _id: ObjectId('66430508ccb53ff8b2387b68'),
  name: 'Wrecking Crows',
  species: 'Crow',
  location: 'Grasslands',
  wantedFor: 'Cawing too loudly',
  client: 'Red wolf',
  reward: 40000,
  captured: false
}
{
  _id: ObjectId('66430508ccb53ff8b2387b69'),
  name: 'Grandhog',
  species: 'Groundhog',
  location: 'Woodlands',
  wantedFor: 'Not coming out of the hole on time and prolonging winter',
  client: 'Songbird',
  reward: 50000,
  captured: false
}
db.bounties.find({ client: { $ne: "Red wolf"} })
{
  _id: ObjectId('66430390ccb53ff8b2387b63')
}
{
  _id: ObjectId('664303f5ccb53ff8b2387b64'),
  name: 'Thanoceros',
  species: 'Rhinoceros',
  location: 'Grasslands',
  wantedFor: 'Eating too much grass',
  client: 'Songbird',
  reward: 10000,
  captured: false
}
{
  _id: ObjectId('66430508ccb53ff8b2387b65'),
  name: 'Lokinkajou',
  species: 'Kinkajou',
  location: 'Tropical rainforest',
  wantedFor: 'Partying too late at night',
  client: 'White tiger',
  reward: 1000,
  captured: false
}
{
  _id: ObjectId('66430508ccb53ff8b2387b66'),
  name: 'Nebullama',
  species: 'Llama',
  location: 'Grasslands',
  wantedFor: 'Drinking all the water from the ocean',
  client: 'Songbird',
  reward: 2500,
  captured: false
}
{
  _id: ObjectId('66430508ccb53ff8b2387b67'),
  name: 'Polarwind',
  species: 'Polar Bear',
  location: 'Arctic',
  wantedFor: 'Not hibernating',
  client: 'Sabertooth',
  reward: 4000,
  captured: false
}
{
  _id: ObjectId('66430508ccb53ff8b2387b69'),
  name: 'Grandhog',
  species: 'Groundhog',
  location: 'Woodlands',
  wantedFor: 'Not coming out of the hole on time and prolonging winter',
  client: 'Songbird',
  reward: 50000,
  captured: false
}
db.bounties.find({ $and: [{ species: "Groundhog" }, { location: "woodland"} ] })
db.bounties.updateOne(
{ name: "Polarwind" },
  { $set: { reward: 10000 } }

);
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
db.bounties.deleteOne(
  { name: "Lokinkajou" }
);
{
  acknowledged: true,
  deletedCount: 1
}
db.bounties.deleteMany(
  { client: "Songbird"}
);
{
  acknowledged: true,
  deletedCount: 3
}
db.bounties.updateMany(
  {},
  { $set: { captured: true}}
);
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 4,
  modifiedCount: 4,
  upsertedCount: 0
}
jaskis



// GETTING STARTED
// 1. Create a database called jaskis
const dbName = "jaskis";

// 2. Create a collection called bounties
const collectionName = 'bounties';

// ADD THE ANIMAL BOUNTIES
// 1. Insert the given "Thanoceros" bounty object
await collection.insertOne([
    {name: "Thanoceros", location: "Grasslands", reward:10000, captured:false, client: "Songbird"},
]);
// 2. Query for all bounties in the bounties collection
const allBountieas = await collection.find({}).toArray();
console.log('All bounties:', allBountieas);


// 3. Insert many bounties at once using the given objects

await collection.insertMany([
    {name: "Polorwind", location: "tundra", reward:5000, captured:false, client: "Redwolf"},
    {name: "Lokinkajou", location: "Rainforest", reward:2000, captured:false, client: "Bluefox"},
    {name: "Fluffy", location: "Mountain", reward:3000, captured:false, client: "Green bear"},
    {name: "Polorwind", location: "Grasslands", reward:5000, captured:false, client: "Songbird"},
    {name: "Shadow", location: "Desert", reward:6000, captured:false, client: "Hawk"},
    {name: "Blitz", location: "Urban", reward:8000, captured:false, client: "Falcon"},
]);

// MANAGE THE DATABASE
// Queries
// 1. Query for all bounties in the Grasslands
const grasslandAnimals = await collection.find({ location: "Grasslands"}).toArray();
console.log('Animals in the Grasslands:', grasslandsAnimals);

// 2. Query for all bounties with a reward worth 10000 or more
const highRewardAnimals = await collection.find({ reward: {$gte:10000} }).toArray();
console.log('Animals with reward $10,000 or more:', highRewardAnimals);

// 3. Query for all bounties, but exclude the client attribute from being shown
const nonRedWolfAnimals = await collection.find({ client: { $ne: "Red wolf"} }).toArray();
console.log('Animals excluding Red wolf:', nonRedWolfAnimals);

// 4. Query for a Groundhog in the Woodlands
const GroundhogWoodlands = await collection.find({ $and: [{ species: "Groundhog"},{ location: "Woodlands"}] }).toArray();
console.log('Groundhog in the Woodlands:', GroundhogWoodlands);

// Update and Delete
// 1. Update the reward for Polarwind to 10000
await collection.updateOne({ name: "Polarwind" }, { $set: { reward: 10000} });
// 2. Remove Lokinkajou
await collection.deleteOne({ name: "lokinkajou" });

// 3. Delete all bounties sent by Songbird
await collection.deleteOne({ client: "Songbird" });

// 4. Update all captured statuses to true
await collection.updateMany({ $set: { captured:true } });
console.log('Database Completed');
