const { connect, StringCodec } = require("nats");

const subject = "my_subject";

async function demo() {
    
    // to create a connection to a nats-server:
    const nc = await connect();
    const sc = StringCodec();

    // to subscribe to the publisher:
    const sub = nc.subscribe(subject);
    console.log("Subscibed to " + subject);
    (async () => {
	for await (const m of sub) {
	    console.log(`[${sub.getProcessed()}]: ${m.data}`);
	}
	console.log("subscription closed");
    })();
}

demo();
