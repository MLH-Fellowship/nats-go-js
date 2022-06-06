const { connect, StringCodec } = require("nats");

async function demo() {
    
    // to create a connection to a nats-server:
    const nc = await connect();
    const sc = StringCodec();

    const sub = nc.subscribe("my_subject");
    (async () => {
	for await (const m of sub) {
	    console.log(`[${sub.getProcessed()}]: ${m.data}`);
	}
	console.log("subscription closed");
    })();

    nc.publish("hello", sc.encode("world"));
    nc.publish("hello", sc.encode("again"));

}

demo();
