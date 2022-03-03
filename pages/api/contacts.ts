import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type Data = {
  id: number;
  firstName: string;
};
//api/contacts

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // res.status(200).json({ name: "John Doe" });
  // const result = await axios.get("http://localhost:8000/contacts");
  // console.log(result);
  res.status(201).json({ id: 1, firstName: "Jelena" });
}
