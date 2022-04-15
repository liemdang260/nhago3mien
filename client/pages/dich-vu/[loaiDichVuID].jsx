import NewsWrapper from "components/common/NewsWrapper";
import ArticalInsights from 'components/common/ArticleInsights';
import Image from "next/image";
import { faEye, faClock } from '@fortawesome/free-regular-svg-icons';
import { faServicestack } from '@fortawesome/free-brands-svg-icons';


const ServiceDetail = () => {
  return (
    <NewsWrapper>
      <p className="text-primary-color font-semibold text-xl text-center p-4 ">Thiết kế và thi công nhà gỗ</p>
      <div className="">
        <p className="text-[0.8rem] text-gray-500 mt-3">
          <ArticalInsights data="07/09/2021" icon={faClock} />
          <ArticalInsights data={7165} icon={faEye} />
          <ArticalInsights data="Dịch vụ" icon={faServicestack} />
        </p>
        <h5 className="mt-6 mb-3 text-sky-900 font-medium">THIẾT KẾ VÀ THI CÔNG NHÀ GỖ THEO YÊU CẦU</h5>
        <div className="text-[15px] text-zinc-600 leading-6">
          <p>
            Bạn đang ấp ủ ước mơ về một ngôi nhà đẹp, bạn đang loay hoay tìm một đơn vị có thể giúp bạn hiện thực hóa những giấc mơ? Hãy liên hệ nhà gỗ An Phú ( Hệ thống nội thất Anphuco ), chúng tôi luôn sẵn sàng chào đón, nâng niu những mong muốn và chắp cánh cho sự sáng tạo bay cao bay xa nhằm hiện thực hóa ước mơ về một ngôi nhà đẹp trao gửi cho quý vị.
            <br />
            <br />
            Nhà gỗ An Phú là đơn vị chuyên tư vấn thiết kế và thi công các công trình kiến trúc nhà gỗ như:
          </p>
          <br />
          <div className="flex justify-center">
            <Image src={"https://nhagoanphu.com/image/catalog/mau-nha-go/nha-tho-tu-duong/NTD-01/nha-tu-duong-2.jpg"} alt="Hinh minh hoa" width={600} height={450} />
          </div>
          <br />
          <ul className="list-disc ml-3">
            <li>Nhà từ đường</li>
            <li>Nhà gỗ truyền thống ( Nhà gỗ 3 gian, nhà gỗ 5 gian  … )</li>
            <li>Nhà lục giác </li>
            <li>Nhà sàn gỗ</li>
            <li>Nhà gỗ hiện đại</li>
          </ul>
          <br />
          <p>… với đội ngũ Kiến trúc sư giàu kinh nghiệm sẽ tư vấn cụ thể cho quý vị sâu về chuyên môn, kết cấu, kiến trúc, bố trí mặt bằng sao cho phù hợp nhất về công năng sử dụng, phong thủy nhà ở, nhà thờ …
            Khi cuộc sống ngày càng được nâng cao kèm theo đó tiêu chuẩn về cái đẹp cũng trở nên khắt khe hơn do đó thiết kế kiến trúc ngày càng khẳng định được vai trò to lớn của mình. Với tôn chỉ “ Kiến tạo ngôi nhà Việt “ và “ Tôn vinh văn hóa Việt “, nhà gỗ An Phú giúp tạo nên cho gia đình bạn những ngôi nhà đẹp nhất, nổi bật nhất khẳng định được vị thế cũng như mong muốn của chủ nhân mà luôn lưu giữ được nét văn hóa truyền thống và phong thủy trong ngôi nhà.</p>
          <p>...</p>
        </div>
        <div className="w-9/12 bg-[#0099CC] text-white mx-auto p-3">
          <h5 className="font-semibold text-center mb-1">THÔNG TIN LIÊN HỆ NHÀ GỖ 3 MIỀN</h5>
          <div className="mb-1">
            <h6 className="font-medium">Văn phòng tại TP.HCM</h6>
            <p>Địa chỉ: 410, Đường 3/2, Phường 12, Quận 10, Tp.HCM</p>
            <p>Điện thoại: 02873.00.83.88- 1900.55.88.05 - 0909.377.365</p>
          </div>
          <div>
            <h6 className="font-medium">Xưởng sản xuất</h6>
            <p>Địa chỉ: Ấp 2, Đường Nhị Bình 15, Xã Nhị Bình, Huyện Hóc Môn, TP HCM</p>
            <p>Điện thoại: 02873.00.83.88- 0932.112.365</p>
          </div>
        </div>
      </div>
    </NewsWrapper>
  )
};

export default ServiceDetail;

