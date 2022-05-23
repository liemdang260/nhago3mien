import NewsWrapper from 'components/common/NewsWrapper';
// import NewsCard from 'components/common/NewsCard';
import { useRouter } from 'next/router';
import Image from 'next/image';
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

            <div className='border-8 rounded-[15px] border-double border-primary-color p-3'>
                {/* <p>1. Tư Vấn, Thiết kế Nhà Gỗ: </p>
                <p className='indent-[32px]'>
                    Chúng tôi cung cấp dịch vụ thiết kế tận tâm đến khách hàng,
                    các bước trong dịch vụ thiết kế của chúng tôi gồm:
                </p>
                <p className='indent-[60px]'>
                    - Gặp gỡ trao đổi với khách hàng
                </p>
                <div className='w-4/5 h-[330px] relative overflow-hidden'>
                    <Image
                        src='/gap-go-khach-hang.png'
                        alt='gap-go-khach-hang'
                        layout='fill'
                        // className='hover:scale-105 ease-linear duration-150'
                    ></Image>
                </div>
                <p className='indent-[60px]'>- Khảo sát địa hình thực tế</p>
                <div className='w-4/5 h-[330px] relative overflow-hidden'>
                    <Image
                        src='/khao-sat-dia-hinh-thuc-te.png'
                        alt='khao-sat-dia-hinh-thuc-te'
                        layout='fill'
                        // className='hover:scale-105 ease-linear duration-150'
                    ></Image>
                </div>
                <p className='indent-[60px]'>
                    - Lên ý tưởng (Diễn họa bằng mô hình, hình ảnh 3D)
                </p>
                <div className='w-4/5 h-[330px] relative overflow-hidden'>
                    <Image
                        src='/len-y-tuong.png'
                        alt='len-y-tuong'
                        layout='fill'
                        // className='hover:scale-105 ease-linear duration-150'
                    ></Image>
                </div>
                <div className='w-4/5 h-[330px] relative overflow-hidden'>
                    <Image
                        src='/y-tuong-3d.png'
                        alt='y-tuong-3d'
                        layout='fill'
                        // className='hover:scale-105 ease-linear duration-150'
                    ></Image>
                </div>
                <p className='indent-[60px]'>- Chốt ý tưởng với khách hang</p>
                <div className='w-4/5 h-[330px] relative overflow-hidden'>
                    <Image
                        src='/chot-y-tuong.png'
                        alt='chot-y-tuong'
                        layout='fill'
                        // className='hover:scale-105 ease-linear duration-150'
                    ></Image>
                </div> */}
                <p className='indent-[32px]'>
                    Với tay nghề truyền thống đã được khẳng định qua nhiều thế
                    hệ, Nhà Gỗ Ba Miền luôn khẳng định được vị thế và thương
                    hiệu hàng đầu Việt Nam về thiết kế, thi công nhà gỗ, nội
                    thất và các sản phẩm từ gỗ.
                </p>
                <br />
                <p className='indent-[32px]'>
                    Các dịch vụ chính của chúng tôi gồm:
                </p>
                <ul className='list-disc ml-20'>
                    <li>Tư vấn, thiết kế nhà gỗ</li>
                    <li>Thi công nhà gỗ</li>
                    <li>Tư vấn thiết kế và thi công nội thất</li>
                </ul>
                <br />
                <p className='indent-[32px]'>
                    Nhà gỗ Ba Miền đã thiết kế và thi công rất nhiều công trình
                    trên khắp mọi miền đất nước. Đến với Nhà gỗ Ba Miền quý
                    khách được tư vấn tỉ mỷ đến từng chi tiết, mọi thắc mắc của
                    Quý khách hàng chúng tôi luôn sãn sàng giải đáp.... Đến với
                    nhà Gỗ Ba Miền Quý khách sẽ luôn hài lòng với đội ngũ nhân
                    viên nhiều kinh nghiệm, nhiệt tình, tận tâm.
                </p>
            </div>
        </NewsWrapper>
    );
};

export default AllServices;
