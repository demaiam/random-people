import { Request, Response } from "express";
import personService from "../service/person-service";

export async function getRandomPerson(req: Request, res: Response) {
  const people = await personService.getPeople();
  const random = Math.floor(Math.random() * people.length);
  const randomPerson = people[random];
  res.status(200).send(randomPerson);
}