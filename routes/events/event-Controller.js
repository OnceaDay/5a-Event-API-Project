const Event = require("./event-Model");

const getEvents = async () => {
  try {
    const events = await Event.find();
    return events;
  } catch (error) {
    throw error;
  }
};

const getEventByID = async (id) => {
  try {
    const event = await Event.findById(id);
    return event;
  } catch (error) {
    throw error;
  }
};

const createEvent = async (eventData) => {
  try {
    const newEvent = await Event.create(eventData);
    return newEvent;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createEvent,
  getEvents,
  getEventByID,
};
