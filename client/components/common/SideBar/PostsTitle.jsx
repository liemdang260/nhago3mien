import React from "react";
const data = [
  { title: "Hướng dẫn thanh toán", link: "" },
  { title: "Quy trình thi công", link: "" },
  { title: "Chính sách bảo mật", link: "" },
  { title: "Chính sách và quy định chung", link: "" },
  { title: "Thông tin chuyển khoản", link: "" },
];
function PostsTitle() {
  return (
    <div className="w-[100%] bg-primary-color text-white p-4 text-base">
      <p className="text-center font-bold text-[20px]">Nội dung bài viết</p>
      <ul>
        {data.map((d, index) => (
          <li key={index} className='my-2'>
            <span>{index + 1}. </span>
            <a href={d.link} className='hover:underline'>{d.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsTitle;
