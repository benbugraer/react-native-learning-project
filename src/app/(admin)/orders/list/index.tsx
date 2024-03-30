import React, { useEffect } from "react";
import { ActivityIndicator, FlatList, Text } from "react-native";

import OrderListItem from "@/components/OrderListItem";
import { useAdminOrderList } from "@/api/orders";
import { supabase } from "@/lib/supabase";
import orders from "@assets/data/orders";

export default function OrdersScreen() {
  const {
    data: orders,
    isLoading,
    error,
  } = useAdminOrderList({ archived: false });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Failed to fetch orders.</Text>;
  }

  useEffect(() => {
    const orders = supabase
      .channel("custom-insert-channel")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "orders" },
        (payload) => {
          console.log("Change received!", payload);
          refetch();
        }
      )
      .subscribe();
    return () => {
      orders.unsubscribe();
    };
  }, []);
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
