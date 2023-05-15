import { server } from './server/server';

const PORT = process.env.PORT || 3733;

server.listen(PORT, () => {
    console.log(`App running on PORT ${PORT}!`);
});
