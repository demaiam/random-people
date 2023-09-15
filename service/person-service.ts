import personRepository from "../repository/person-repository";
import { Person } from "./../protocols/person-protocol";

function getPeople(): Promise<Person[]> {
  return personRepository.getPeople();
}

const personService = {
  getPeople
}

export default personService;