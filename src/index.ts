import { server } from './Server';
import 'dotenv/config';

const PORT = process.env.PORT || 3333;

server.listen(PORT, () => {
    console.log(`App running on PORT ${PORT}!`);
});
