import React, { useEffect } from "react";
import { ActivityIndicator, FlatList, Text } from "react-native";

import OrderListItem from "@/components/OrderListItem";
import { useAdminOrderList } from "@/api/orders";
import { supabase } from "@/lib/supabase";
import { useQueryClient } from "@tanstack/react-query";
import { useInsertOrderSubscription } from "@/api/orders/subscription";

export default function OrdersScreen() {
  const {
    data: orders,
    isLoading,
    error,
  } = useAdminOrderList({ archived: false });

  useInsertOrderSubscription();

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Failed to fetch orders.</Text>;
  }

  return (
    <>
      <FlatList
        data={orders}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        renderItem={({ item }) => <OrderListItem order={item} />}
      />
    </>
  );
}
function subscribe() {
  throw new Error("Function not implemented.");
}
