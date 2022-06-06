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