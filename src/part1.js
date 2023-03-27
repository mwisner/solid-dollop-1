// Directions:
// Create an publish/subscribe library out of the Events class. The Events class
// should have methods 'subscribe', 'publish', and 'unSubscribe'.

class Events {
  // subscribe to an event handler
  subscribe(eventName, callback) {}

  // Triggers all callbacks associated with a given eventName
  publish(eventName) {}

  // Remove all event handlers associated with the given eventName
  unSubscribe(eventName) {}
}

const testFunc1 = () => {
  console.log("Hello");
};
const testFunc2 = () => {
  console.log("World");
};
const events = new Events();

console.log("Output start:");
events.subscribe("event1", testFunc1);
events.subscribe("event1", testFunc2);
events.publish("event1");
//expected output:
//Hello
//World
events.unSubscribe("event1");
events.publish("event1");
//expected output:
//

const testFunc3 = (firstName, lastName) => {
  console.log(`${firstName} ${lastName}`);
};

events.subscribe("event2", testFunc3);
// events.publish("event2", "John", "Smith");
//expected output:
//John Smith

module.exports = Events;
