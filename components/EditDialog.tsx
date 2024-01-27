// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import DialogForm from "@/components/DialogForm";
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog";
// import * as z from "zod";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import {
//   SelectValue,
//   SelectTrigger,
//   SelectContent,
//   SelectItem,
//   Select,
// } from "@/components/ui/select";
// import axios from "axios";
// import { useRouter } from "next/navigation";

// const formSchema = z.object({
//   id: z.string(),
//   age: z.string(),
//   name: z.string().min(2, {
//     message: "Username must be at least 2 characters.",
//   }),
//   sex: z.enum(["Male", "Female"]),
//   contact: z
//     .string()
//     .min(10, {
//       message: "Contact must be at least 10 numbers.",
//     })
//     .max(10, {
//       message: "Contact must be at most 10 numbers",
//     }),
// });

// export function EditDialog({
//   id,
//   age,
//   name,
//   sex,
//   contact,
// }: z.infer<typeof formSchema>) {
//   const router = useRouter();

//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name: `${name}`,
//       age: `${age}`,
//       sex: `${sex}`,
//       contact: `${contact}`,
//     },
//   });

//   const handleSubmit = ({
//     age,
//     name,
//     sex,
//     contact,
//   }: z.infer<typeof formSchema>) => {
//     console.log({ age, name, sex, contact });

//     axios
//       .put(`${process.env.NEXT_PUBLIC_URL}/api/patients/${id}`, {
//         name,
//         age,
//         sex,
//         contact,
//       })
//       .then((response) => {
//         console.log(response.status, response.data.token);
//         router.refresh();
//       })
//       .catch((error) => {
//         console.error("Error while submitting data:", error.message);
//       })
//       .finally(() => {
//         router.refresh();
//       });

//     window.location.reload();
//   };
//   return (
//     <div>
//       <AlertDialog>
//         <AlertDialogTrigger>
//           <Button variant="drop" className=" w-[100%]">
//             Edit
//           </Button>
//         </AlertDialogTrigger>
//         <AlertDialogContent>
//           <AlertDialogHeader>
//             <AlertDialogTitle>New Patient ?</AlertDialogTitle>
//             <AlertDialogDescription>
//               Fill patient details:
//             </AlertDialogDescription>
//           </AlertDialogHeader>
//           <Form {...form}>
//             <form
//               onSubmit={form.handleSubmit(handleSubmit)}
//               className="max-w-md w-full flex flex-col gap-4">
//               <FormField
//                 control={form.control}
//                 name="name"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Username</FormLabel>
//                     <FormControl>
//                       <Input placeholder="Patient name" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="age"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Age</FormLabel>
//                     <FormControl>
//                       <Input type="number" placeholder="" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="sex"
//                 render={({ field }) => {
//                   return (
//                     <FormItem>
//                       <FormLabel>Gender</FormLabel>
//                       <Select onValueChange={field.onChange}>
//                         <FormControl>
//                           <SelectTrigger>
//                             <SelectValue placeholder="Choose gender" />
//                           </SelectTrigger>
//                         </FormControl>
//                         <SelectContent>
//                           <SelectItem value="Male">Male</SelectItem>
//                           <SelectItem value="Female">Female</SelectItem>
//                         </SelectContent>
//                       </Select>
//                       <FormMessage />
//                     </FormItem>
//                   );
//                 }}
//               />
//               <FormField
//                 control={form.control}
//                 name="contact"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Contact</FormLabel>
//                     <FormControl>
//                       <Input placeholder="Contact" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               {/* <Button type="submit" className="w-full">
//                 Submit
//               </Button> */}
//               <AlertDialogFooter>
//                 <AlertDialogCancel>Cancel</AlertDialogCancel>

//                 <AlertDialogAction>
//                   <Button onClick={handleSubmit} type="submit">
//                     Submit
//                   </Button>
//                 </AlertDialogAction>
//               </AlertDialogFooter>
//             </form>
//           </Form>
//         </AlertDialogContent>
//       </AlertDialog>
//     </div>
//   );
// }
