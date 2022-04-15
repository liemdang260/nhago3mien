import Title from "../Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

function Contact() {
  return (
    <div className="text-primary-color">
      <Title title={"Liên hệ"} size="25px" />
      <div className="w-[25px] mx-auto">
        <FontAwesomeIcon
          icon={faPhone}
          className="border-primary-color border-2  p-1 rounded-[100%] text-[25px]"
        />
      </div>
      <p className="font-semibold text-center">
        0932.112.365 - 1900.55.88.05 - 0909.377.365
      </p>
      <div className="w-[100px] mx-auto my-2 flex justify-between ">
        <div className="w-[25px] h-[25px] relative inline-block">
          <Image src="/facebooks.png" alt="facebook" layout="fill"></Image>
        </div>
        <div className="w-[25px] h-[25px] relative inline-block">
          <Image src="/youtube.png" alt="facebook" layout="fill"></Image>
        </div>
        <div className="w-[25px] h-[25px] relative inline-block">
          <Image src="/zalo.png" alt="facebook" layout="fill"></Image>
        </div>
      </div>
    </div>
  );
}

export default Contact;
