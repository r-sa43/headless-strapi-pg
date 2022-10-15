import { GetServerSideProps } from "next";
import type { NextApiRequest, NextApiResponse } from "next";
import { apiClient } from "..";

type Data = {
  name: string;
};

export default async function sample(req: NextApiRequest, res: NextApiResponse<Data>) {
  console.log("test");
  // const _ = {
  //   name: "tomato",
  // };
  // return {
  //   props: _,
  // };
  const products = await apiClient.get("/sample-shops");
  console.log(products.data);

  res.status(200).json({ name: "John Api" });
}
