import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

export default function useLogin() {
  const { data, error } = useSWR("/api/user/login");

  return data;
}
