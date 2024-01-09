import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

// interface Recipe {
//   title: string;
//   image: string;
//   time: number;
//   description: string;
//   vegan: boolean;
//   id: string;
// }

// async function getData(): Promise<Payment[]> {
//   // Fetch data from your API here.
//   return [
//     {
//       id: "728ed52f",
//       amount: 100,
//       status: "pending",
//       email: "m@example.com",
//     },
//     // ...
//   ];
// }

async function getData(): Promise<Payment[]> {
  const result = await fetch("http://localhost:4000/people");

  return result.json();
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
