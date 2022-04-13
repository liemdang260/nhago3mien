import PostsTitle from "components/common/SideBar/PostsTitle";
import Category from "components/common/SideBar/Category";
import Support from "components/common/SideBar/Support";
import Contact from "components/common/SideBar/Contact";
import BreadCrumb from 'components/common/SideBar/Breadcrumb'
import { PageItem, PageWrapper } from "components/common/PageWrapper";

const Introduction = () => {
  return (
    <PageWrapper>
      <PageItem><BreadCrumb location={['Trang chủ', 'Giới Thiệu']} /></PageItem>
      <PageItem>
        <PostsTitle />
        <Category />
        <Support />
        <Contact />
      </PageItem>
      <PageItem>
        <h2 className="font-bold text-xl text-primary-color">Giới thiệu</h2>
        <p className="border-2 p-3 text-sm">
          <span className="text-primary-color font-semibold">
            Nhà gỗ An Phú xin kính chào Quý khách hàng!
          </span>
          <span className="indent-[70px] inline-block">
            Lời đầu tiên Nhà gỗ An Phú xin gửi tới Quý khách hàng lới chào trân
            trọng, lời cảm ơn chân thành nhất đến Quý khách hàng đã và đang sử
            dụng sản phẩm, cũng như quan tâm và gắn bó với Nhà gỗ An Phú trong
            suốt thời gian qua!
          </span>
          <br />
          <br />
          <span className="indent-[70px] inline-block">
            <span className="font-semibold text-primary-color">Nhà gỗ An Phú</span> là một thương hiệu uy tín trong lĩnh vực
            thiết kế, thi công và cung cấp nhà gỗ tại TPHCM cũng như ở nhiều
            tỉnh thành khác trên toàn quốc. Với kinh nghiệm đã tích lũy được
            trong thời gian dài hoạt động cùng đội ngũ nhân viên chuyên nghiệp,
            có tay nghề và trình độ cao, nhà gỗ An Phú tự hào mang đến cho Quý
            khách hàng những sản phẩm và dịch vụ tốt nhất với chi phí về tài
            chính và thời gian là thấp nhất.
          </span>
          <br />
          <span className="indent-[70px] inline-block text-sm">
            Nhà gỗ An Phú được thành lập với nghành nghề kinh doanh chính:
          </span>
          <br />
          <br />
          <span className="indent-[140px] inline-block">
            - Tư vấn và thiết kế nhà gỗ;
          </span>
          <br />
          <span className="indent-[140px] inline-block">
            - Thi công và hoàn thiện nhà gỗ theo yêu cầu;
          </span>
          <br />
          <span className="indent-[140px] inline-block">
            - Kinh doanh gỗ nguyên liệu;
          </span>
          <br />
          <span className="indent-[140px] inline-block">
            - Kinh doanh các sản phẩm đồ thờ cúng
          </span>
          <br />
          <span className="indent-[140px] inline-block">
            - Sản xuất và kinh doanh đồ gỗ nội thất;
          </span>
          <br />
          <span className="indent-[140px] inline-block">
            - Nhận đặt các mặt hàng về gỗ theo yêu cầu;
          </span>
          <br />
          <br />
          <span className="indent-[70px] inline-block">
            Trong thời gian qua cùng với sự cố gắng không ngừng của tập thể cán
            bộ công nhân viên và sự tin yêu của khách hàng cộng với phương châm
            hoạt động là “ Kiến tạo ngôi nhà Việt “. Nhà Gỗ An Phú đã góp phần
            tôn vinh nét đẹp ngôi nhà Việt, làm trang nghiêm nơi thờ phụng trong
            mỗi gia đình Việt. Với quan niệm: Chúng tôi là người Việt Nam, Chúng
            tôi tự hào về bản sắc văn hóa Việt, Chúng tôi tôn vinh nền văn hóa
            Việt đã làm nên một thương hiệu nhà gỗ An Phú như ngày hôm nay.
          </span>
          <br />
          <br />
          <span className="indent-[70px] inline-block">
            Với đội ngũ thờ lành nghề được tuyển chọn khắt khe từ các làng nghề
            truyền thống trên khắp mọi miền đất nước. Cùng sự giám sát chặt chẽ
            về kỹ, mỹ thuật kết hợp với dây truyền thiết bị máy móc hiện đại nhà
            gỗ An Phú đã cho ra đời những sản phẩm, dịch vụ tinh túy nhất về
            đường nét, kiểu dáng… và giá thành hợp lý. Đến nay sản phẩm và dịch
            vụ mang thương hiệu Nhà gỗ An Phú được đông đảo khách hàng gần xa
            yêu quí và tin tưởng sử dụng.
          </span>
          <br />
          <br />
          <span className="indent-[70px] inline-block">
            Nhà gỗ An Phú đã thiết kế và thi công rất nhiều công trình và hạng
            mục trên mọi miền đất nước và có một số sản phẩm, dịch vụ xuất khẩu
            đi một số thị trường nước ngoài khó tính như: Trung Quốc, Nhật Bản,
            Mỹ, Canada…được khách hàng tin tưởng và đánh giá cao đã và đang mang
            lại sự hài lòng của Quí khách hàng.
          </span>
          <br />
          <br />
          <span className="indent-[70px] inline-block">
            Đến với Nhà gỗ An Phú quý khách được tư vấn tỉ mỷ đến từng chi tiết,
            mọi thắc mắc của Quý khách hàng sẽ được giải quyết thấu đáo, Quý
            khách hoàn toàn có thể lựa chọn được dịch vụ và sản phẩm ý nhất, với
            rất nhiều mẫu mã đa dạng …các loại nhà gỗ cao cấp, đẹp, hiện đại,
            mang lại cho người sử dụng cảm giác hài hòa, thoải mái và yên tâm
            khi ở trong một không gian thanh bình, ấm áp được làm hoàn toàn từ
            các loại gỗ có chất lượng tốt nhất. Đến với nhà Gỗ An Phú Quý khách
            sẽ luôn hài lòng với đội nghũ nhân viên nhiều kinh nghiệm, nhiệt
            tình, tận tâm.
          </span>
          <br />
          <br />
          <span className="text-center text-primary-color">
            <span>
              Mọi chi tiết xin liên hệ:
              <br />
              Văn phòng tại Hồ Chí Minh
              <br />
              Địa chỉ : 410, đường 3/2, phường 12, quận 10 , Tp.HCM
              <br />
              Điện thoại : 02873.00.83.88- 1900 55 88 05 - 0909 377 365
            </span>
          </span>
          <br />
          <br />
          <span className="text-center text-primary-color">
            <span>
              Xưởng sản xuất
              <br />
              Địa chỉ: Ấp 2, đường Nhị Bình 15, xã Nhị Bình, huyện Hóc Môn, TP
              HCM
              <br />
              Điện thoại : 02873.00.83.88- 0932.112.365
              <br /> Hoặc truy cập: https://nhagoanphu.com/
            </span>
          </span>
        </p>
      </PageItem>
    </PageWrapper>
  );
};

export default Introduction;
