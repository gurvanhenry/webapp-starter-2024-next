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
import { Bat } from "@/types/models/Bat";

import { useBats } from "@/lib-client/react-query/bats/useBats";
import { Badge } from "@/components/badge";
import { Divider } from "@/components/divider";

import { PlusIcon, TrashIcon, PencilIcon } from "@heroicons/react/16/solid";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { useState } from "react";
import { useCreateBat } from "@/lib-client/react-query/bats/useCreateBat";

export default function Bats() {
  const [batTextAdd, setBatTextAdd] = useState("new-bat ✅");
  const [batId, setBatId] = useState(0);

  const { query: queryGetBats } = useBats();
  const { mutation: muatationCreateBat } = useCreateBat();

  const { isPending, error, data } = queryGetBats;

  const batsItems = data?.data || [];

  return (
    <>
      <Heading className="mb-4 text-2xl">Bats</Heading>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-2">
            <Input
              className="max-w-48"
              type="text"
              value={batTextAdd}
              onChange={(x) => setBatTextAdd(x.currentTarget.value)}
            />
            <Button
              disabled={muatationCreateBat.isPending}
              onClick={() => {
                muatationCreateBat.mutate({ text: batTextAdd });
              }}
            >
              <PlusIcon />
              Add bat
            </Button>
            {muatationCreateBat.isError && (
              <Badge color="rose">{muatationCreateBat.error.message}</Badge>
            )}
          </div>
          {/* <div>
            <div className="flex flex-row gap-2">
              <Input
                className="max-w-48"
                type="number"
                value={batId}
                onChange={(x) => setBatId(Number(x.currentTarget.value))}
              />
              <Button
                disabled={mutationDeleteBat.isPending}
                onClick={() => {
                  mutationDeleteBat.mutate({ id: String(batId) });
                }}
              >
                <TrashIcon />
                Detete a bat
              </Button>
              {mutationDeleteBat.isError && (
                <Badge color="rose">{mutationDeleteBat.error.message}</Badge>
              )}
            </div>
          </div>
          <div>
            <div>
              <Button
                disabled={mutationEditBat.isPending}
                onClick={() => {
                  mutationEditBat.mutate({
                    id: String(batId),
                    text: batTextAdd,
                  });
                }}
              >
                <PencilIcon />
                Patch bat
              </Button>
              {mutationEditBat.isError && (
                <Badge color="rose">{mutationEditBat.error.message}</Badge>
              )}
            </div> */}
        </div>
      </div>
      <Divider />
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
