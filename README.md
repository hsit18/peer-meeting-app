# WebRTC with react

This is a simple 1-to-1 video chat room example using react with webRTC and share screen API. 

### Running locally

To run this application you need to create a TURN account. You can create one using this service http://numb.viagenie.ca/cgi-bin/numbacct

Change the `.env.example` to `.env`

Put your turn account on the .env file

#### The folders

Front-end files are inside `/src` folder and the server as `server.js` 

#### Install the dependencies

```shell
npm install
```

#### Start the application

## in one of the terminal start server
```shell
node server.js
```
## in another terminal start client
```shell
npm run start:client
```
