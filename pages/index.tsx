import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { useState } from "react";

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div className={styles.container}>
      <AlertDialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialog.Portal>
          <AlertDialog.Overlay className="fixed inset-0 bg-black bg-opacity-40" />
          <AlertDialog.Content className="fixed max-h-screen h-auto max-w-[450px] w-[90vw] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white py-6 px-4">
            <div className="flex justify-between">
              <AlertDialog.Title className="font-bold text-gray-600 text-md">
                Create Group
              </AlertDialog.Title>
            </div>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    </div>
  );
};

export default Home;
