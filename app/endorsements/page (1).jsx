import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
import { title, subtitle } from "@/components/primitives";

export default function App() {
  return (
    <>
      <h1 className={title()}>Who Supports Us</h1>
      <p
        style={{ textAlign: "center" }}
        className={subtitle({ class: "mt-2	" })}
      >
        Our Endorsements
      </p>

      <div className="grid grid-cols-3 w-[80%]">
        <Card className="w-[320px]">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md">NextUI</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>Make beautiful websites regardless of your design experience.</p>
          </CardBody>
          <Divider />
          <CardFooter></CardFooter>
        </Card>

        <Card className="w-[320px]">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md">NextUI</p>
            </div>
          </CardHeader>
          <Divider />
          <CardFooter></CardFooter>
        </Card>

        <Card className="w-[320px]">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md">NextUI</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>Make beautiful websites regardless of your design experience.</p>
          </CardBody>
          <Divider />
          <CardFooter></CardFooter>
        </Card>
      </div>
      <div className="grid grid-cols-2 w-[80%]">
        <Card className="w-[480px]">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md">NextUI</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>Make beautiful websites regardless of your design experience.</p>
          </CardBody>
          <Divider />
          <CardFooter></CardFooter>
        </Card>

        <Card className="w-[475px]">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md">NextUI</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>Make beautiful websites regardless of your design experience.</p>
          </CardBody>
          <Divider />
          <CardFooter></CardFooter>
        </Card>
      </div>
    </>
  );
}
