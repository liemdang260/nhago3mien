import NewsWrapper from 'components/common/NewsWrapper';
// import NewsCard from 'components/common/NewsCard';
import { useRouter } from 'next/router';

const data = [
    {
        id: 1,
        title: 'Thiết kế và thi công nhà gỗ',
        imgLink:
            'https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.4-350x250.JPG',
        views: 7144,
        createAt: '07/09/2022',
        tag: 'Dịch vụ',
        description:
            'Bạn đang ấp ủ ước mơ về một ngôi nhà đẹp, bạn đang loay hoay tìm một đơn vị có thể giúp bạn hiện thực hóa những giấc mơ? Hãy liên hệ nhà gỗ Ba Miền ( Hệ thống nội thất Anphuco ),..',
    },
    {
        id: 2,
        title: 'Thiết kế và thi công không gian thờ',
        imgLink:
            'https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.4-350x250.JPG',
        views: 7144,
        createAt: '07/09/2022',
        tag: 'Dịch vụ',
        description:
            'Trong văn hóa tín ngưỡng của người Việt, thờ cúng tổ tiên có vai trò đặt biệt quan trọng. Chúng ta khi hiểu được rằng mình từ đâu mà ra, mình nhờ ai mà có, mình sống vì mục đích gì thì khả năng sống và làm việc càng trở nên mạnh mẽ!..',
    },
    {
        id: 3,
        title: 'Cung cấp đồ gỗ thành phẩm',
        imgLink:
            'https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.4-350x250.JPG',
        views: 7144,
        createAt: '07/09/2022',
        tag: 'Dịch vụ',
        description:
            'Với tôn chỉ hoạt động là “ Kiến tạo ngôi nhà Việt ! “ Nhà gỗ An Phú cam kết cung cấp các sản phẩm nội thất gỗ chất lượng cao và được chế tác từ các bàn tay thợ lành nghề được tuyển chọn kỹ càng trên khắp các làng nghề truyền thống của Việt Nam...',
    },
    {
        id: 4,
        title: 'Thiết kế và thi công nội thất',
        imgLink:
            'https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.4-350x250.JPG',
        views: 7144,
        createAt: '07/09/2022',
        tag: 'Dịch vụ',
        description:
            'Không gian sống đóng vai trò đặc biệt quan trọng trong đời sống của mỗi gia đình, bởi vậy việc đề cao thiết kế để đạt đến sự hoàn hảo trong một công trình nội thất đòi hỏi người KTS phải thực sự nhạy bén và linh hoạt trong quá trình sáng tạo...',
    },
    {
        id: 5,
        title: 'Tư vấn và thiết kế theo yêu cầu',
        imgLink:
            'https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.4-350x250.JPG',
        views: 7144,
        createAt: '07/09/2022',
        tag: 'Dịch vụ',
        description:
            'Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...',
    },
];
const AllServices = () => {
    const { pathname } = useRouter();
    return (
        <NewsWrapper pathname={{ title: 'Dịch vụ', link: pathname }}>
            <p className='text-primary-color font-bold text-2xl text-center p-4'>
                DỊCH VỤ
            </p>
            {/* <div className='flex flex-wrap'>
                {data &&
                    data.map((item, index) => (
                        <NewsCard key={index} item={item} />
                    ))}
            </div> */}
            <div className='border-8 rounded-[15px] border-double border-primary-color p-3'>
                <p className='indent-[32px]'>
                    Nhà gỗ 3 gian vốn không còn xa lạ với người dân Việt Nam,
                    đặc biệt là vùng Bắc bộ, tuy nhiên, cùng với sự du nhập
                    trong lối kiến trúc, nhà gỗ 3 gian đã có nhiều phát triển
                    hơn trong nhận thức những người yêu kiến trúc. Nếu bạn muốn
                    xây dựng một nhà gỗ 3 gian vừa mang nét đẹp truyền thống,
                    vừa mang nét hiện đại của kiến trúc phương tây nhưng lo ngại
                    về vấn đề giá cả, thì bài viết dưới đây, Nhà Gỗ Làng Mộc sẽ
                    gửi đến bạn bảng báo giá chi tiết dịch vụ thiết kế - xây
                    dựng nhà gỗ 3 gian do chúng tôi cung cấp.
                </p>
                <br />
                <p className='indent-[32px] font-semibold'>
                    Các yếu tố cấu thành giá làm nhà gỗ 3 gian:
                </p>
                <p className='indent-[32px]'>
                    Để cấu thành nên tổng thể chi phí làm nhà gỗ 3 gian, ta cần
                    tính toán chi tiết những yếu tố sau:
                </p>
                <p className='indent-[32px] font-semibold'>Chi phí thiết kế:</p>
                <p className='indent-[32px]'>
                    Giai đoạn đầu tiên để hoàn thiện ngôi nhà gỗ trong mơ của
                    bản thân chính là hoàn thiện chúng trên giấy, đây được gọi
                    là giai đoạn thiết kế. Việc thiết kế giúp bạn và đội ngũ xây
                    dựng xác định được hình dáng, kết cấu của ngôi nhà, từ đó dự
                    trù được số lượng nguyên – vật liệu cần thiết, các bước tiến
                    hành để hoàn thiện chúng. Ngoài ra bản vẽ cũng chính là cách
                    để chúng ta kiểm soát được chất lượng của thành phẩm. Thông
                    thường một bộ bản vẽ thiết kế căn nhà đầy đủ sẽ gồm 4 loại
                    bản vẽ:
                </p>
                <p className='indent-[60px]'>- Bản vẽ kiến trúc</p>
                <p className='indent-[60px]'>- Bản vẽ kết cấu</p>
                <p className='indent-[60px]'>- Bản vẽ điện, nước</p>
                <p className='indent-[60px]'>- Bản vẽ nội, ngoại thất</p>
                <p className='indent-[32px]'>
                    Hiện nay, mức giá thiết kế phổ biến cho một căn nhà gỗ có
                    diện tích dưới 120m2 là 2 triệu đồng, trên 120m2 sẽ có giá
                    65.000đ/m2. Ngoài ra, nếu bạn có kỹ năng chuyên môn về thiết
                    kế, có sẵn ý tưởng trong đầu, bạn hoàn toàn có thể tiết kiệm
                    chi phí bằng cách tự tạo lập hay tính toán các bản vẽ trên.
                    Nếu không có thời gian hoặc không chắc chắn về khả năng
                    thiết kế, bạn có thể tìm đến sự giúp đỡ từ những công ty,
                    doanh nghiệp hoặc kiến trúc sư chuyên nghiệp với một khoảng
                    phí như trên.
                </p>
            </div>
        </NewsWrapper>
    );
};

export default AllServices;

