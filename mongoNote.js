const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  city: String
});

const User = mongoose.model("User", UserSchema);

async function main() {
  await mongoose.connect("mongodb://localhost:27017/mydatabase");

  // Insert Single
  const user = new User({ name: "Alice", age: 25, city: "New York" });
  await user.save();

  // Insert Many
  await User.insertMany([
    { name: "Bob", age: 30, city: "San Francisco" },
    { name: "Charlie", age: 28, city: "Chicago" }
  ]);

  // Update One
  await User.updateOne({ name: "Alice" }, { $set: { age: 26 } });

  // Update Many
  await User.updateMany({ city: "San Francisco" }, { $set: { city: "Los Angeles" } });

  // Get One
  const singleUser = await User.findOne({ name: "Alice" });
  console.log("User found:", singleUser);

  // Get All
  const allUsers = await User.find();
  console.log("All users:", allUsers);

  // Delete One
  await User.deleteOne({ name: "Alice" });

  // Delete Many
  await User.deleteMany({ city: "Los Angeles" });

  console.log("Operations completed");
}

main();
