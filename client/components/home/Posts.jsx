import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
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
      "https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-nam-bo/mau-hue4/nha-hue1-300x300.jpg",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-nam-bo/mau-hue4/nha-hue1-300x300.jpg",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-nam-bo/mau-hue4/nha-hue1-300x300.jpg",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-nam-bo/mau-hue4/nha-hue1-300x300.jpg",
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
      "https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-nam-bo/mau-hue4/nha-hue1-300x300.jpg",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-nam-bo/mau-hue4/nha-hue1-300x300.jpg",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-nam-bo/mau-hue4/nha-hue1-300x300.jpg",
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
      "https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-nam-bo/mau-hue4/nha-hue1-300x300.jpg",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-nam-bo/mau-hue4/nha-hue1-300x300.jpg",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-nam-bo/mau-hue4/nha-hue1-300x300.jpg",
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
      "https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-nam-bo/mau-hue4/nha-hue1-300x300.jpg",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-nam-bo/mau-hue4/nha-hue1-300x300.jpg",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-nam-bo/mau-hue4/nha-hue1-300x300.jpg",
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
      "https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-nam-bo/mau-hue4/nha-hue1-300x300.jpg",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-nam-bo/mau-hue4/nha-hue1-300x300.jpg",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-nam-bo/mau-hue4/nha-hue1-300x300.jpg",
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
      "https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-nam-bo/mau-hue4/nha-hue1-300x300.jpg",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-nam-bo/mau-hue4/nha-hue1-300x300.jpg",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-nam-bo/mau-hue4/nha-hue1-300x300.jpg",
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
      "https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-nam-bo/mau-hue4/nha-hue1-300x300.jpg",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-nam-bo/mau-hue4/nha-hue1-300x300.jpg",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-nam-bo/mau-hue4/nha-hue1-300x300.jpg",
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
      "https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-nam-bo/mau-hue4/nha-hue1-300x300.jpg",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-nam-bo/mau-hue4/nha-hue1-300x300.jpg",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-nam-bo/mau-hue4/nha-hue1-300x300.jpg",
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
      "https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-nam-bo/mau-hue4/nha-hue1-300x300.jpg",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-nam-bo/mau-hue4/nha-hue1-300x300.jpg",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-nam-bo/mau-hue4/nha-hue1-300x300.jpg",
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
      "https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-nam-bo/mau-hue4/nha-hue1-300x300.jpg",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-nam-bo/mau-hue4/nha-hue1-300x300.jpg",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-nam-bo/mau-hue4/nha-hue1-300x300.jpg",
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
      "https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-nam-bo/mau-hue4/nha-hue1-300x300.jpg",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-nam-bo/mau-hue4/nha-hue1-300x300.jpg",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-nam-bo/mau-hue4/nha-hue1-300x300.jpg",
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
      "https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-nam-bo/mau-hue4/nha-hue1-300x300.jpg",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-nam-bo/mau-hue4/nha-hue1-300x300.jpg",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-nam-bo/mau-hue4/nha-hue1-300x300.jpg",
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
      "https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-nam-bo/mau-hue4/nha-hue1-300x300.jpg",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-nam-bo/mau-hue4/nha-hue1-300x300.jpg",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-nam-bo/mau-hue4/nha-hue1-300x300.jpg",
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
      "https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-nam-bo/mau-hue4/nha-hue1-300x300.jpg",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-nam-bo/mau-hue4/nha-hue1-300x300.jpg",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-nam-bo/mau-hue4/nha-hue1-300x300.jpg",
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
      "https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-nam-bo/mau-hue4/nha-hue1-300x300.jpg",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-nam-bo/mau-hue4/nha-hue1-300x300.jpg",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-nam-bo/mau-hue4/nha-hue1-300x300.jpg",
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
      "https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-nam-bo/mau-hue4/nha-hue1-300x300.jpg",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-nam-bo/mau-hue4/nha-hue1-300x300.jpg",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
  {
    image:
      "https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-nam-bo/mau-hue4/nha-hue1-300x300.jpg",
    title: "Tư vấn và thiết kế theo yêu cầu",
    content:
      "Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...",
  },
];

function Post({ image, title, content }) {
  return (
    <div className=" flex justify-between items-center">
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
    <div
      className={
        "inline-block p-1 text-center mx-1 w-[30px] " +
        (active
          ? "bg-primary-color text-white"
          : "text-primary-color hover:bg-gray-200 ")
      }
      onClick={() => setActive(index)}
    >
      {index + 1}
    </div>
  );
}

function Posts() {
  const [landingIndex, setLandingIndex] = useState(0);
  const [landingVisionIndex, setLandingVisionIndex] = useState(0);
  const handleLandingVision = (action) => {
    setLandingVisionIndex(landingVisionIndex + action);
  };

  useEffect(() => {
    setLandingIndex(landingVisionIndex * 10);
  }, [landingVisionIndex]);
  const handleLandingIndex = (index) => {
    setLandingIndex(index);
  };
  return (
    <div className="flex-1 ml-4 relative">
      <Title title={"Tin tức"} />
      <div className="">
        {data.slice(landingIndex * 3, landingIndex * 3 + 3).map((d, index) => (
          <div key={d.id}>
            <Post image={d.image} title={d.title} content={d.content} />
            <hr className="border-dashed border-primary-color border-2 border-b-0 border-l-0 border-r-0 " />
          </div>
        ))}
      </div>
      <a href="" className="absolute right-2 px-2 text-xl text-primary-color ">
        Xem tất cả
      </a>
      <div className="mt-8 mx-auto w-[500px]">
        <div
          className={
            "inline-block p-1 text-center mx-1 w-[30px] hover:bg-gray-200 text-primary-color " +
            (landingVisionIndex == 0 ? "invisible" : "")
          }
          onClick={() => handleLandingVision(-1)}
        >
          «
        </div>
        {Array.from(
          new Array(
            (data.length - landingVisionIndex * 10 * 3) / 3 < 10
              ? (data.length - landingVisionIndex * 10 * 3) / 3
              : 10
          ),
          (a, b) => (
            <LandingPage
              key={b}
              index={landingVisionIndex * 10 + b}
              active={landingVisionIndex * 10 + b == landingIndex}
              setActive={handleLandingIndex}
            />
          )
        )}
        <div
          className={
            "inline-block p-1 text-center mx-1 w-[30px] hover:bg-gray-200 text-primary-color " +
            ((data.length - landingVisionIndex * 10 * 3) / 3 < 10
              ? "hidden"
              : "")
          }
          onClick={() => handleLandingVision(1)}
        >
          »
        </div>
      </div>
    </div>
  );
}

export default Posts;
