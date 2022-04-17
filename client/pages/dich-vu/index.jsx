import NewsWrapper from 'components/common/NewsWrapper';
import NewsCard from 'components/common/NewsCard';
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
            <p className='text-primary-color font-bold text-xl text-center p-4 '>
                DỊCH VỤ
            </p>
            <div className='flex flex-wrap'>
                {data &&
                    data.map((item, index) => (
                        <NewsCard key={index} item={item} />
                    ))}
            </div>
        </NewsWrapper>
    );
};

export default AllServices;

