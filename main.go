package main

import (
    "fmt"
    "github.com/nats-io/nats.go"
)

var subject = "my_subject"

func main() {

    // to create a connection to a nats-server:
    nc, err := nats.Connect(nats.DefaultURL)

    if err != nil {
        fmt.Println(err)
    }

    // to publish a message
	nc.Publish(subject, []byte("Sending a message with Go publisher!"))
	fmt.Println("Sent!")

	nc.Drain()
}