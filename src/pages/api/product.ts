// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { resrieveData } from "@/lib/firebase/service";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: Boolean;
  statusCode: Number;
  data: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = await resrieveData("products");

  res.status(200).json({ status: true, statusCode: 200, data });
}
