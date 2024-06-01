import CardComponent from "@/components/common/card/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

const Partners = () => {
  const invoices = [
    {
      listingName: "Lindsay Walton",
      submission: "0",
      deadline: "29 May 10:31 PM",
      prize: "$250.00",
      status: "Draft",

    },
    {
      listingName: "Courtney Henry",
      submission: "4",
      deadline: "29 May 10:31 PM",
      prize: "$150.00",
      status: "Open",
    },
    {
      listingName: "Tom Cook",
      submission: "5",
      deadline: "29 May 10:31 PM",
      prize: "$350.00",
      status: "In Review",
    },
    {
      listingName: "Whitney Francis",
      submission: "3",
      deadline: "29 May 10:31 PM",
      prize: "$450.00",
      status: "Completed",
    },
    {
      listingName: "Leonard Krasner",
      submission: "1",
      deadline: "29 May 10:31 PM",
      prize: "$550.00",
      status: "Completed",
    },
    {
      listingName: "Floyd Miles",
      submission: "4",
      deadline: "29 May 10:31 PM",
      prize: "$200.00",
      status: "Draft",
    },
  ];
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between ">
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="">Listing Name</TableHead>
            <TableHead>Submissions</TableHead>
            <TableHead>Deadline</TableHead>
            <TableHead className="">Prize</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.listingName}>
              <TableCell className="font-medium">{invoice.listingName}</TableCell>
              <TableCell>{invoice.submission}</TableCell>
              <TableCell>{invoice.deadline}</TableCell>
              <TableCell className="">
                {invoice.prize}
              </TableCell>
              <TableCell className="">
                {invoice.status}
              </TableCell>
              <TableCell className="">
                {invoice.status}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

    </div>
  );
};

export default Partners;
