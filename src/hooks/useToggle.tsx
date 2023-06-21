import React, { useState } from "react";

export const useToggle = () => {
  const [activeDelivery, setActiveDelivery] = useState<"Delivery" | "Pickup">(
    "Delivery"
  );

  const clickHandler = (e: React.SyntheticEvent) => {
    const activeID = (e.target as Element).id;
    setActiveDelivery(activeID as "Delivery" | "Pickup");
  };

  return { activeDelivery, clickHandler };
};
