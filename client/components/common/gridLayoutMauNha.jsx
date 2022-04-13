import Image from "next/image";
import mauHinhAnh from "../../public/nhago.jpg";
import Title from "components/home/Title";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhoneFlip} from "@fortawesome/free-solid-svg-icons";

const Item = ({params}) => {
  return (
    <>
      <div
        className="w-65 bg-slate-50 shadow-[0px_3px_5px_0px_rgba(0,0,0,0.3)] h-80 
        flex flex-col items-center text-base cursor-pointer ease-in-out duration-300
      hover:shadow-primary-color hover:bg-slate-200 hover:scale-105 group
      "
      >
        <div
          className="hidden group-hover:first:block absolute -translate-y-full -m-3
          border-2 border-solid border-primary-color"
        >
          <ItemHover />
          <div className="absolute w-full flex justify-center">
            <div className="w-16 overflow-hidden inline-block">
              <div className=" h-3 w-3 bg-primary-color -rotate-45 transform origin-top-left" />
            </div>
          </div>
        </div>
        <div className="">
          <Image
            className="z-0"
            layout="intrinsic"
            height={900}
            priority
            src={mauHinhAnh}
            alt="Error while display image"
          />
        </div>

        <div
          className={`font-semibold text-primary-color text-center ${
            params.title.split(" ").length > 7 ? "text-sm mt-2" : "text-lg"
          }`}
        >
          {params.title.substring(0, 40)}
        </div>
        <div className="text-base font-semibold text-primary-color">
          Mã SP: {params.codeProduct}
        </div>
        <div className="w-full border-2 bg-slate-300 mb-3 mt-2 bg-gradient-to-l"></div>
        <div className="uppercase text-gray-500 font-medium w-full text-center">
          Liên hệ: 0333619358{" "}
          <FontAwesomeIcon icon={faPhoneFlip} className="mr-4" />
        </div>
      </div>
    </>
  );
};

const ItemHover = urlImage => {
  return (
    <Image
      className="z-20"
      alt="Error while display image"
      src={mauHinhAnh}
      layout="fixed"
      width={600}
      height={350}
    />
  );
};

const GridLayoutMauNha = () => {
  return (
    <div className="container flex flex-col justify-around  hover:first:block">
      <Title title="Mẫu nhà gỗ đẹp" />
      <div className="grid grid-cols-4 gap-7 w-full">
        <Item params={{title: "Nhà 1", codeProduct: "1245D5"}} />
        <Item params={{title: "Nhà 2", codeProduct: "1245D5"}} />
        <Item params={{title: "Nhà 3", codeProduct: "1245D5"}} />
        <Item params={{title: "Nhà 4", codeProduct: "1245D5"}} />
        <Item params={{title: "Nhà 5", codeProduct: "1245D5"}} />
        <Item params={{title: "Nhà 6", codeProduct: "1245D5"}} />
        <Item params={{title: "Nhà 7", codeProduct: "1245D5"}} />
        <Item params={{title: "Nhà 8", codeProduct: "1245D5"}} />
        <Item params={{title: "Nhà 9", codeProduct: "1245D5"}} />
        <Item params={{title: "Nhà 9", codeProduct: "1245D5"}} />
        <Item params={{title: "Nhà 9", codeProduct: "1245D5"}} />
        <Item params={{title: "Nhà 9", codeProduct: "1245D5"}} />
      </div>
    </div>
  );
};

export default GridLayoutMauNha;
export {Item};
