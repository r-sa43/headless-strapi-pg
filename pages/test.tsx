import { GetServerSideProps, GetStaticProps } from "next";
import { apiClient } from "./index";

type Data = {
  id: number;
  Title: string;
  Price: number;
  published_at: string;
  created_at: string;
  updated_at: string;
};

function Page(data: Data) {
  console.log(data, "hello");

  return (
    <>
      <div>{"hello"}</div>
    </>
  );
}

// export const getServerSideProps: GetServerSideProps = async () => {
export const getStaticProps: GetStaticProps = async () => {
  const res = await apiClient.get("/sample-shops/1");

  return {
    props: res.data,
  };
};

// export default getServerSideProps();

export default Page;
