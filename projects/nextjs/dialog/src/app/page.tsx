'use client';

import Image from "next/image";
import styles from "./page.module.css";
import { useRef } from "react";



export default function Home() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const onClick = () => {
    alert('ok');
    dialogRef.current?.showModal();
  };

  function PopUp() {
    return (
      <dialog ref={dialogRef}>
        <p>hello</p>
        <button onClick={() => dialogRef.current?.close()}>ok</button>
      </dialog>
    );
  }

  return (
    <main>
      <button onClick={onClick}>click</button>

      <PopUp />

    </main>
  );
}
