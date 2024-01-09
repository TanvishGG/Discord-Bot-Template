
module.exports = {
    name:"ready", // Event Name
    once: true, // Whether the event should only be executed once
    async execute(client) { // Event Function
        console.log(`[Client] ${client.user.username} is ready!`);
    }
}