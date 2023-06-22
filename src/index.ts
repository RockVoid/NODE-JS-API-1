import { Knex } from './server/database/knex';
import { server } from './Server';
import 'dotenv/config';

const PORT = process.env.PORT || 3333;

const startServer = () => {
    server.listen(PORT, () => {
        console.log(`App running on PORT ${PORT}!`);
    });
};

if(process.env.IS_LOCALHOST !== 'true') {
    console.log('Rodando migration!');
    
    Knex.migrate
        .latest()
        .then(() => {
            Knex.seed.run()
                .then(() => startServer())
                .catch(console.log);
        })
        .catch(console.log);
} else {
    startServer();
}

