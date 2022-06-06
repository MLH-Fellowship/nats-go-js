![NATS GO + JS LOGO](https://socialify.git.ci/MLH-Fellowship/nats-go-js/image?description=1&descriptionEditable=Building%20a%20NATS%20system%20with%20Go%20and%20JavaScript&font=Bitter&language=1&logo=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F99%2FUnofficial_JavaScript_logo_2.svg%2F480px-Unofficial_JavaScript_logo_2.svg.png&name=1&theme=Light)

# nats-go-js
Summer Fellowship 2022 Hackathon Project. Building a NATS system with Go and JavaScript

## Requirements
- Docker
- npm
- Node
- Go

## First: Run NATS Server
Run NATS Server that serves as a connecting bridge between our **Go Publisher** and **JavaScript Subscriber**.

You need to have Docker installed.

```bash
docker compose up
```

## Second: Run JavaScript Subscriber
Open a different terminal. Use npm to install JS dependencies.

```bash
npm install
node index.js
```

## Third: Run Go Publisher
Open a different terminal.
```bash
go run main.go
```