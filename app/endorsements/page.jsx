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
      <h1 className={title()}>Who supports us?</h1>
      <p
        style={{ textAlign: "center" }}
        className={subtitle({ class: "mt-2	" })}
      >
        Our Endorsers
      </p>
      <br></br>
      <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8 place-content">
        <Card
          className="col-span-12 sm:col-span-6 h-[300px]"
          isPressable
          onClick={modalW.onOpen}
        >
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Gun Control
            </p>
            <h4 className="text-white font-medium text-large">
              National Rifle Association (NRA)
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1SlwqVnkl1LBMQniXt4LR-64oc9np1rJfPQ&s"
          />
        </Card>
        <Modal isOpen={modalW.isOpen} onOpenChange={modalW.onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Increasing Wages - Step by Step
                </ModalHeader>
                <ModalBody>
                  <p>
                    We chose this group because the NRA continues to be the
                    leader in firearm education. The NRA offers over 12,500
                    certified instructors that train about 100,000 gun owners a
                    year. This ties in with our policy on gun control since we
                    believe that gun owners and potential gun owners need to be
                    better educated about firearms than they are now
                  </p>
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
          className="col-span-12 sm:col-span-6 h-[300px]"
          isPressable
          onClick={modalE.onOpen}
        >
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Education
            </p>
            <h4 className="text-white font-medium text-large">Lebron James</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmJUwyc4Bz79C-p15Zi9tWmL15VU_gi1wBbaMH76DdcA&s"
          />
        </Card>
        <Modal isOpen={modalE.isOpen} onOpenChange={modalE.onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Lebron James
                </ModalHeader>
                <ModalBody>
                  <p>
                    Lebron is one of our celebrity endorsers because he has made countless donations to education. For example, Lebron James opened a family foundation for the impoverished and encouraged the youth to explore their interests. Lebron has also made it easier for each person to obtain an education with the best quality possible.


                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onPress={onClose}>
                    Action
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
        <Card
          className="col-span-12 sm:col-span-6 h-[300px]"
          isPressable
          onClick={modalG.onOpen}
        >
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Education & Immigration
            </p>
            <h4 className="text-white font-medium text-large">AFL-CIO</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://media.npr.org/assets/img/2022/06/16/ap22165568095855_custom-d0aece53a2242a659e4894f98c04474b37ef1f44-s1100-c50.jpg"
          />
        </Card>
        <Modal isOpen={modalG.isOpen} onOpenChange={modalG.onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">AFL-CIO</ModalHeader>
                <ModalBody>
                  <p>

The AFL-CIO is one of our interest groups because they promote wages that allow the members of our society to support themselves and their loved ones. Our party wishes for every person to support themselves independently. The AFL-CIO also agrees with our immigration policy. Ourselves and the AFL-CIO also believe immigration will benefit the current labor standards.
                  </p>
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
            <p className="text-tiny text-white/60 uppercase font-bold">
              Education
            </p>
            <h4 className="text-white font-medium text-2xl">Drake</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card example background"
            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUU9N11vLAvm0TWEn8UPSFE04idZz198Y9xoDNmdxL-A&s"
          />
        </Card>
        <Modal isOpen={modalI.isOpen} onOpenChange={modalI.onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Immigration
                </ModalHeader>
                <ModalBody>
                  <p>
                    We believe that we need to support and acknowledge the fact
                    that the US is made of immigrants, while also addressing the
                    key issues that are happening right now. We believe that we
                    should build large towns around the border to hold the
                    immigrants while they go through the citizenship process.
                    This is so that they are safe while also going through the
                    process. These towns will be separated from U.S. citizens
                    but visitation will be allowed for immediate family during
                    the process.
                  </p>
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
    </>
  );
}
