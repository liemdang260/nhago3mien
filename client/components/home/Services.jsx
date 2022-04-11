import {data} from "autoprefixer";
import Image from "next/image";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import Title from "./Title";

const datas = [
  {
    title: "Tư vấn và thiết kế theo yêu cầu",
    image:
      "https://nhagoanphu.com/image/catalog/mau-nha-go/nha-tho-tu-duong/NTD-04/nha-tu-duong-4.8.jpg",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    title: "Thiết kế và thi công không gian thờ",
    image:
      "https://nhagoanphu.com/image/catalog/mau-nha-go/nha-tho-tu-duong/NTD-04/nha-tu-duong-4.8.jpg",
    content:
      "Trong văn hóa tín ngưỡng của người Việt, thờ cúng tổ tiên có vai trò đặt biệt quan trọng. Chúng ta khi hiểu được rằng mình từ đâu mà ra, mình nhờ ai mà có, mình sống vì mục đích gì thì khả năng sốn..",
  },
  {
    title: "Cung cấp đồ gổ thành phẩm",
    image:
      "https://nhagoanphu.com/image/catalog/mau-nha-go/nha-tho-tu-duong/NTD-04/nha-tu-duong-4.8.jpg",
    content:
      "Với tôn chỉ hoạt động là “ Kiến tạo ngôi nhà Việt ! “ Nhà gỗ An Phú cam kết cung cấp các sản phẩm nội thất gỗ chất lượng cao và được chế tác từ các bàn tay thợ lành nghề được tuyển chọn kỹ càng trên ..",
  },
  {
    title: "Thiết kế và thi công nội thất",
    image:
      "https://nhagoanphu.com/image/catalog/mau-nha-go/nha-tho-tu-duong/NTD-04/nha-tu-duong-4.8.jpg",
    content:
      "Không gian sống đóng vai trò đặc biệt quan trọng trong đời sống của mỗi gia đình, bởi vậy việc đề cao thiết kế để đạt đến sự hoàn hảo trong một công trình nội thất đòi hỏi người KTS phải thực sự nhạy ..",
  },
  {
    title: "Thiết kế và thi công nhà gỗ",
    image:
      "https://nhagoanphu.com/image/catalog/mau-nha-go/nha-tho-tu-duong/NTD-04/nha-tu-duong-4.8.jpg",
    content:
      "Bạn đang ấp ủ ước mơ về một ngôi nhà đẹp, bạn đang loay hoay tìm một đơn vị có thể giúp bạn hiện thực hóa những giấc mơ? Hãy liên hệ nhà gỗ An Phú ( Hệ thống nội thất Anphuco ),..",
  },
];

import React from "react";

function Service({title, image, content, expand, index, handleExpand}) {
  return (
    <div className="cursor-pointer p-2">
      <div
        className="bg-primary-color text-white px-5 py-3 rounded-md"
        onClick={() => handleExpand(index)}
      >
        <FontAwesomeIcon
          icon={faChevronRight}
          className={"mr-3"}
          rotation={expand ? 90 : 0}
        />
        <span className={"hover:underline " + (expand ? "underline" : "")}>
          {title}
        </span>
      </div>
      <div
        className={"flex p-2 border-2 rounded-md " + (expand ? "" : "hidden")}
      >
        <div className="mr-3 w-72">
          <Image src={image} width={500} height={500} alt={title}></Image>
        </div>

        <div className="">{content}</div>
      </div>
    </div>
  );
}

function Services() {
  const [expandIndex, setExpandIndex] = useState(null);
  const handleExpand = index => {
    index === expandIndex ? setExpandIndex(null) : setExpandIndex(index);
  };
  return (
    <div className="flex-1 mr-2">
      <Title title="Dịch vụ" />
      <div className="relative">
        {datas.map((data, index) => (
          <Service
            key={index}
            title={data.title}
            image={data.image}
            content={data.content}
            expand={index === expandIndex ? true : false}
            index={index}
            handleExpand={handleExpand}
          />
        ))}

        <a
          href=""
          className="absolute right-2 px-2 text-xl text-primary-color "
        >
          Xem tất cả
        </a>
      </div>
    </div>
  );
}

export default Services;
