import { useRouter } from "next/router";
import React from "react";

export default function ContactItem({ id, firstName, onClick }: any) {
  const router = useRouter();

  function showDetails() {
    router.push("/" + id);
  }
  return (
    <>
      <ul>
        <li onClick={showDetails}>
          <a>
            {firstName}, {id}
          </a>
        </li>
      </ul>
    </>
  );
}
