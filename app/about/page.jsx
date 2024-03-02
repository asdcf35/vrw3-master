import { title, subtitle } from "@/components/primitives";
import { Divider } from "@nextui-org/react";
import "./class.css";
export default function AboutPage() {
  return (
    <>
      <div className="flx">
        <img
          src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="flx-col">
          <h1 className={title()}>Kyle Snyder</h1>
          <br></br>
          <p className={subtitle({ class: "mt-2	" })}>Our Candidate</p>
        </div>
      </div>
      <div className="ff"></div>
      <div className="sp fdf">
        <p className="df">Backstory</p>
        <div className="limitations-apply"></div>
        <p>
          Kyle is a great fit to be our candidate. He speaks clearly and
          confidently and gets the point across. <br />
          <br />
          Kyle is from the streets of Sugar Creek, North Carolina. Growing up
          his family was below the poverty line and unfortunately split and that
          resulted in him being from a broken home. <br />
          <br />
          He has learned to battle through financial and behavioral hardships.
          This makes him a fearless leader learning to navigate through a world
          that may have seemed against him from the start. Kyle is very
          compassionate throughout his works and he loves helping throughout the
          community to lead other children who may or may not have been through
          the same difficulties he has to prove that no matter your background
          things will work out in the end.
        </p>
      </div>

    </>
  );
}
