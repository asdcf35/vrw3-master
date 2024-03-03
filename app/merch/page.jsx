"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import "./class.css";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { title, subtitle } from "@/components/primitives";

export default function App() {
  const modalI = useDisclosure();
  const modalNS = useDisclosure();
  const modalW = useDisclosure();
  const modalE = useDisclosure();
  const modalG = useDisclosure();

  return (
    <>
      <h1 className={title()}>Buy Stuff, to Support Us!</h1>
      <br></br>
      <p
        style={{ textAlign: "center" }}
        className={subtitle({ class: "mt-2	" })}
      >
        Our Merchandise
      </p>
      <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
        <Card
          className="col-span-12 sm:col-span-4 h-[300px]"
          isPressable
          onClick={modalW.onOpen}
        >
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <h4 className="text-white font-medium text-large">Shirt</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="/image4.png"
          />
        </Card>
        <Modal isOpen={modalW.isOpen} onOpenChange={modalW.onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Shirt - $25
                </ModalHeader>
                <ModalBody>
                  <img
                    removeWrapper
                    alt="Card background"
                    className="z-0 object-cover"
                    src="/image4.png"
                    width="72%"
                  />
                  <img
                    removeWrapper
                    alt="Card background"
                    className="z-0 object-cover"
                    src="/image5.png"
                    width="72%"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
        <Card
          className="col-span-12 sm:col-span-4 h-[300px]"
          isPressable
          onClick={modalE.onOpen}
        >
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <h4 className="text-black font-medium text-large">Sticker - $5</h4>
          </CardHeader>
          <img
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="/image1.jpg"
            width="72%"
          />
        </Card>
        <Modal isOpen={modalE.isOpen} onOpenChange={modalE.onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Sticker - $5
                </ModalHeader>
                <ModalBody>
                  <Image
                    removeWrapper
                    alt="Card background"
                    className="z-0 w-full h-full object-cover"
                    src="/image1.png"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
        <Card
          className="col-span-12 sm:col-span-4 h-[300px]"
          isPressable
          onClick={modalG.onOpen}
        >
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <h4 className="text-black font-medium text-large">Socks</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="/image3.png"
          />
        </Card>
        <Modal isOpen={modalG.isOpen} onOpenChange={modalG.onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Socks - $7
                </ModalHeader>
                <ModalBody>
                  <Image
                    removeWrapper
                    alt="Card background"
                    className="z-0 w-full h-full object-cover"
                    src="/image3.png"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
        <Card
          isPressable
          onClick={modalI.onOpen}
          isFooterBlurred
          className="w-full h-[300px] col-span-12 sm:col-span-6"
        >
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <h4 className="text-black font-medium text-2xl">Bumper Stickers</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card example background"
            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
            src="/image2.png"
          />
        </Card>
        <Modal isOpen={modalI.isOpen} onOpenChange={modalI.onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Bumper Stickers - $8
                </ModalHeader>
                <ModalBody>
                  <Image
                    removeWrapper
                    alt="Card example background"
                    className="z-0 w-full h-full object-cover"
                    src="/image2.png"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
        <Card
          isPressable
          onClick={modalNS.onOpen}
          isFooterBlurred
          className="w-full h-[300px] col-span-12 sm:col-span-6"
        >
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <h4 className="text-black font-medium text-xl">Phone Case</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src="/image6.png"
          />
        </Card>
        <Modal isOpen={modalNS.isOpen} onOpenChange={modalNS.onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Phone Case - $20
                </ModalHeader>
                <ModalBody>
                  <Image
                    removeWrapper
                    alt="Relaxing app background"
                    className="z-0 w-full h-full object-cover"
                    src="/image6.png"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
<div className="w-[70ch] text-center flex flex-col align-center">
          <p className="df">Backstory</p>
          <div className="limitations-apply"></div>
          <p>
            Kyle is a great fit to be our candidate. He speaks clearly and
            confidently and gets the point across. <br />
            <br />
            Kyle is from the streets of Sugar Creek, North Carolina. Growing up
            his family was below the poverty line and unfortunately split and
            that resulted in him being from a broken home. <br />
            <br />
            He has learned to battle through financial and behavioral hardships.
            This makes him a fearless leader learning to navigate through a
            world that may have seemed against him from the start. Kyle is very
            compassionate throughout his works and he loves helping throughout
            the community to lead other children who may or may not have been
            through the same difficulties he has to prove that no matter your
            background things will work out in the end.
          </p>
        </div>
    </>
  );
}
