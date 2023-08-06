// CODE
import { z } from "zod";

const StarWarsPerson = z.object({
  name: z.string(),
});

const StarWarsPeopleResults = z.object({
  results: z.array(StarWarsPerson.pick({ name: true })),
});

type name = z.infer<typeof StarWarsPeopleResults>;

const logStarWarsPeopleResults = (data: name) => {

  data.results.map((person) => {
    console.log(person.name);
  });
};
