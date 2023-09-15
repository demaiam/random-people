import { connection } from "../configs/database-connection";
import { Person } from "../protocols/person-protocol";

async function getPeople() {
  const result = await connection.query<Person[]>(`
    SELECT * FROM people;`
  );
  return result.rows;
}

const personRepository = {
  getPeople
}

export default personRepository;