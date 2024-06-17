"use client";

import { Heading } from "@/components/heading";
import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from "@/components/table";
import { Text, TextLink } from "@/components/text";
import { Bat } from "@/models/Bat";

import { useBats } from "@/lib-client/react-query/bats/useBats";

export default function Bats() {
  const { queryGetBats } = useBats();

  const { isPending, error, data } = queryGetBats;

  const batsItems = data?.data || [];

  return (
    <>
      <Heading className="mb-4 text-2xl">Bats</Heading>
      <div className="flex flex-col gap-4">
        <Text>
          Api call : <TextLink href={"/api/bats"}>/api/bats</TextLink>
        </Text>
        <div>
          {isPending ? (
            <Text className="">Loading...</Text>
          ) : error ? (
            <Text className="text-red-500">Error: {error.message}</Text>
          ) : (
            <div>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableHeader>id</TableHeader>
                    <TableHeader>text</TableHeader>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {batsItems.map((bat: Bat) => (
                    <TableRow key={bat.id}>
                      <TableCell>{bat.id}</TableCell>
                      <TableCell className="text-zinc-500">
                        {bat.text}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Text className="font-bold my-4">Raw response :</Text>
              <div>
                <pre>
                  <Text className="text-xs">
                    {JSON.stringify(data.data, null, 2)}
                  </Text>
                </pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
