package main

import (
    "fmt"
    "github.com/nats-io/nats.go"
)

var subject = "my_subject"

func main() {
    nc, err := nats.Connect(nats.DefaultURL)

    if err != nil {
        fmt.Println(err)
    }

	nc.Publish(subject, []byte("Sending a message with Go publisher!"))
	fmt.Println("Sent!")

	nc.Drain()
}