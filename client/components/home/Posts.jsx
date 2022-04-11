import Image from "next/image";
import { useState } from "react";
import Title from "./Title";

const data = [
  {
    image:
      "https://nhagoanphu.com/image/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.1.JPG",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.1.JPG",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.1.JPG",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.1.JPG",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.1.JPG",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.1.JPG",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.1.JPG",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.1.JPG",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.1.JPG",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.1.JPG",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.1.JPG",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.1.JPG",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.1.JPG",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.1.JPG",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.1.JPG",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.1.JPG",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.1.JPG",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.1.JPG",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.1.JPG",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.1.JPG",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.1.JPG",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.1.JPG",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.1.JPG",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.1.JPG",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.1.JPG",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.1.JPG",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.1.JPG",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.1.JPG",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.1.JPG",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.1.JPG",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.1.JPG",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.1.JPG",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.1.JPG",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.1.JPG",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.1.JPG",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.1.JPG",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.1.JPG",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.1.JPG",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.1.JPG",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.1.JPG",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.1.JPG",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.1.JPG",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.1.JPG",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.1.JPG",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.1.JPG",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.1.JPG",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.1.JPG",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.1.JPG",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.1.JPG",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.1.JPG",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.1.JPG",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.1.JPG",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.1.JPG",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.1.JPG",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
];
//style={{display:'flex', justifyContent:'space-between'}}
function Post({ image, title, content }) {
  return (
    <div className=" flex justify-between items-center">
      {/* <div className=' mr-3 border-primary-color overflow-hidden'  style={{borderRadius:'50%', height:'96px', border:'3px solid'}}>
        <img src={image} style={{borderRadius:'50%', width:'300px',height:'100px'}}></img>
        <Image src={image} alt={title} width={300} height={300} ></Image>
      </div> */}
      <div style={{ width: "150px", height: "150px" }} className="p-4">
        <div
          className="overflow-hidden relative "
          style={{ width: "100%", height: "100%", borderRadius: "50%" }}
        >
          <Image src={image} alt={title} layout="fill"></Image>
        </div>
      </div>
      <div style={{ width: "75%" }} className="p-3">
        <h4 className="font-medium">{title}</h4>
        <span className="text-xs">{content}</span>
      </div>
    </div>
  );
}

function LandingPage({ index, active, setActive }) {
  return (
    <div className={"inline-block border-2 w-[30px] hover:bg-grey" + (active? 'bg-primary-color text-white':'text-primary-color')} onClick={() => setActive(index)}>
      {index + 1}
    </div>
  );
}


function Posts() {
  const [landingIndex, setLandingIndex] = useState(0);
  const handleClick = (index) => {
    setLandingIndex(index);
  };
  return (
    <div className="flex-1 mr-2 relative">
      <Title title={"Tin tức"} />
      <div className="">
        {data.slice(landingIndex * 3, landingIndex * 3 + 3).map((d, index) => (
          <div key={index}>
            <Post image={d.image} title={d.title} content={d.content} />
            <hr className="border-dashed border-primary-color border-2 border-b-0 border-l-0 border-r-0 " />
          </div>
        ))}
      </div>
      <a href="" className="absolute right-2 px-2 text-xl text-primary-color ">
        Xem tất cả
      </a>
      <div className="mt-8">
        {Array.from(new Array(data.length / 3), (a, b) => (
          <LandingPage index={b} active={b==landingIndex} setActive={handleClick} />
        ))}
      </div>
    </div>
  );
}

export default Posts;
