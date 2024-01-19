"use client";
import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";
import axios from "axios";
import { useEffect, useState } from "react";
import DialogForm from "@/components/DialogForm";

async function getData() {
  try {
    const response = await axios.get("http://localhost:3000/api/patients/");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getData();
        setData(result);
      } catch (error: any) {
        console.error(error.message);
      }
    }

    fetchData();
  }, []);

  // const jsonData = data;
  // const idArray = jsonData.map((item: any) => item.id);

  // console.log(idArray);

  return (
    <div>
      <div className="container mx-auto py-10">
        <DialogForm />
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
