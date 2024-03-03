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
      <h1 className={title()}>Where we stand</h1>
      <br></br>
      <p
        style={{ textAlign: "center" }}
        className={subtitle({ class: "mt-2	" })}
      >
        Our Party Platform
      </p>
      <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
        <Card
          className="col-span-12 sm:col-span-4 h-[300px]"
          isPressable
          onClick={modalW.onOpen}
        >
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Plank #1
            </p>
            <h4 className="text-white font-medium text-large">
              Increasing Wages - Step by Step
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://cdn.shopify.com/s/files/1/2643/9914/files/5maYumusplHiebPzshiFlmeoc8vlo5qX1632332951.jpg?v=1632951145"
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
                    We want wages to be able to support everyone financially,
                    but we will not use unemployment checks anymore
                  </p>
                  <p>
                    Unemployment checks are not very conducive for a thriving
                    economy.
                  </p>
                  <p>
                    Since we will not have unemployment checks, we will have a
                    graduated minimum wage system. This will make our country's
                    economy better. If the minimum wage is too low our country
                    will be economically low and the homeless rate will
                    increase. The graduated minimum wage system will be:
                  </p>
                  <ul>
                    <li>$7.25 working 13-15</li>
                    <li>$8.50 working 16- 18</li>
                    <li>$10 working 18-21 (or not living with parents)</li>
                    <li>$13 working 21 and older</li>
                  </ul>
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
            <p className="text-tiny text-white/60 uppercase font-bold">
              Plank #2
            </p>
            <h4 className="text-white font-medium text-large">
              Reforming Education
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://habitatbroward.org/wp-content/uploads/2020/01/10-Benefits-Showing-Why-Education-Is-Important-to-Our-Society.jpg"
          />
        </Card>
        <Modal isOpen={modalE.isOpen} onOpenChange={modalE.onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Reforming Education
                </ModalHeader>
                <ModalBody>
                  <p>
                    We should use the money we save from backing out of the
                    Middle East to radically improve our education system
                  </p>

                  <ul className="list-disc">
                    <li>
                      <p>Having a higher rigor to teachers</p>
                    </li>
                    <li>
                      <p>Universal Standards</p>
                    </li>
                    <li>
                      <p>Minimum GPA: 3.5</p>
                    </li>
                    <li>
                      <p>
                        Removal of old outdated study techniques in favor for
                        high-efficiency study techniques like Feynman Method and
                        Bloom’s Taxonomy
                      </p>
                    </li>
                    <li>
                      <p>
                        Allow for unique interests to flourish rather than get
                        squished
                      </p>
                    </li>
                    <li>
                      <p>Culture Problem Solving, instead of Plug and Chug</p>
                    </li>
                    <li>
                      <p>Higher payment to teachers</p>
                    </li>
                  </ul>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Action
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
            <p className="text-tiny text-white/60 uppercase font-bold">
              Plank #3
            </p>
            <h4 className="text-white font-medium text-large">Gun Control</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://img.grouponcdn.com/seocms/ERnU2ng3opVPagNewuguUJwBPc6/1080x648_hero_jpg-1080x648"
          />
        </Card>
        <Modal isOpen={modalG.isOpen} onOpenChange={modalG.onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Modal Title
                </ModalHeader>
                <ModalBody>
                  <p>
                    The government should require more extensive background
                    checks, including physiological and psychological checks.
                    And they should require you to take a course to purchase a
                    gun. You should have to renew your license every 3 years,
                    and redo testing. We stand on making guns harder to get but
                    still accessible for citizens who need them.
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
          className="w-full h-[300px] col-span-12 sm:col-span-5"
        >
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Plank #4
            </p>
            <h4 className="text-white font-medium text-2xl">Immigration</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card example background"
            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
            src="https://www.americanprogress.org/wp-content/uploads/sites/2/2021/10/ImmigrationPolicyPage.jpg"
          />
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-black text-tiny">
                A novel way to solve immigration, one that doesn't compromise on
                security while not being harsh.
              </p>
            </div>
          </CardFooter>
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
                    the process. Each person 
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
          onClick={modalNS.onOpen}
          isFooterBlurred
          className="w-full h-[300px] col-span-12 sm:col-span-7"
        >
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              National Security
            </p>
            <h4 className="text-white/90 font-medium text-xl">
              The US checklist for better security
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src="https://api.army.mil/e2/c/images/2023/11/03/b4b385f7/size1.jpg"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <div className="flex flex-col marigold">
                <p className="text-tiny text-white/60">
                  What we think the government should do first for national
                  security.
                </p>
              </div>
            </div>
          </CardFooter>
        </Card>
        <Modal isOpen={modalNS.isOpen} onOpenChange={modalNS.onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Modal Title
                </ModalHeader>
                <ModalBody>
                  <p>
                    We should back out of the Middle East and encourage other
                    countries to step forward. The U.S. is the highest-paying
                    country for wars in the Middle East. An example was the
                    Isreal-Palestine War. We spent way more money than other
                    countries and we could have saved way more by encouraging
                    others to put forward their fair share.
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Action
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
