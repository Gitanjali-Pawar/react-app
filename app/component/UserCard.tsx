"use client";

import {
  Anchor,
  Avatar,
  Box,
  Button,
  Flex,
  Grid,
  GridCol,
  Group,
  Paper,
  Text,
  Tooltip,
} from "@mantine/core";
import { IconAt, IconBluetooth } from "@tabler/icons-react";
import { IconPhoneCall } from "@tabler/icons-react";
import { IconWorldPin } from "@tabler/icons-react";
import { IconUserPlus } from "@tabler/icons-react";
import { IconTrash } from "@tabler/icons-react";
import { CSSProperties, useEffect, useState } from "react";

export default function UserCard() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      ).then((response) => response.json());
      setUsers(response);
    };
    fetchData();
  }, []);

  return (
    <Box m={10}>
      <Grid m={"lg"}>
        {users.map((user, key) => (
          <GridCol span={{ base: 12, md: 6, lg: 3 }}>
            <Paper p={"lg"} shadow={"md"} radius={"md"} withBorder={true}>
              <Tooltip label={user.name} withArrow={true}>
                <Avatar
                  mx={"auto"}
                  alt={user.name}
                  radius={120}
                  size={120}
                  src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.name}`}
                />
              </Tooltip>

              <Text fz={"lg"} fw={500} mt={"md"} ta={"center"}>
                <Box fz={"lg"} fw={500} mt={"md"} ta={"center"}>
                  {user.name}
                </Box>
              </Text>
              <Anchor
                href={`mailto:${user.email}`}
                c={"dimmed"}
                target="_blank"
              >
                <Text>
                  <IconAt stroke={2} style={{ maxHeight: 15, marginTop: 10 }} />
                  {user.email}
                </Text>
              </Anchor>
              <Text>
                <Anchor href={`tel:${user.phone}`} c={"dimmed"}>
                  <IconPhoneCall
                    stroke={2}
                    style={{ maxHeight: 15, marginTop: 10 }}
                  />
                  {user.phone}
                </Anchor>
              </Text>

              <Anchor href={user.phone} c={"dimmed"}>
                <Text>
                  <IconWorldPin
                    stroke={2}
                    style={{ maxHeight: 15, marginTop: 10 }}
                  />
                  {user.website}
                </Text>
              </Anchor>
              <Group justify="center" grow gap={5} mt={15} wrap={"nowrap"}>
                <Flex gap={5}>
                  <Button fullWidth={true}>
                    <IconUserPlus stroke={2} style={{ marginRight: 10 }} />
                    Follow
                  </Button>
                  <Button
                    fullWidth={true}
                    style={{
                      backgroundColor: "white",
                      borderColor: "#228be6",
                      color: "#228be6",
                    }}
                  >
                    <IconTrash stroke={2} style={{ marginRight: 10 }} />
                    Delete
                  </Button>
                </Flex>
              </Group>
            </Paper>
          </GridCol>
        ))}
      </Grid>
    </Box>
  );
}

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
};
