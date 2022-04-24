// import PostsTitle from 'components/common/SideBar/PostsTitle';
// import Category from 'components/common/SideBar/Category';
// import Support from 'components/common/SideBar/Support';
// import Contact from 'components/common/SideBar/Contact';
// import BreadCrumb from 'components/common/SideBar/Breadcrumb';
// import { PageItem, PageWrapper } from 'components/common/PageWrapper';
import Link from 'next/link';
import NewsWrapper from 'components/common/NewsWrapper';
const data = [
    {
        type: 'Mít',
        price: '10 triệu đồng / m3',
    },
    {
        type: 'Sồi',
        price: '6 - 20 triệu đồng / m3',
    },
    {
        type: 'Xoan',
        price: '7 - 12 triệu đồng / m3',
    },
    {
        type: 'Tần Bì',
        price: '7 - 14 triệu đồng / m3',
    },
    {
        type: 'Căm Xe',
        price: '12 - 24 triệu đồng / m3',
    },
    {
        type: 'Hương',
        price: '14 - 16 triệu đồng / m3',
    },
    {
        type: 'Lim',
        price: '26 - 30 triệu đồng / m3',
    },
];

const Introduction = () => {
    return (
        <NewsWrapper pathname={{ title: 'Giới Thiệu', link: '/gioi-thieu' }}>
            <h2 className='font-bold text-xl text-primary-color'>Giới thiệu</h2>
            <br />
            <div className='border-2 p-3 text-sm'>
                <p className='indent-8'>
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
                <p className=' font-semibold text-primary-color'>
                    1. Các yếu tố cấu thành giá làm nhà gỗ 3 gian:
                </p>
                <p className='indent-8'>
                    Để cấu thành nên tổng thể chi phí làm nhà gỗ 3 gian, ta cần
                    tính toán chi tiết những yếu tố sau:
                </p>
                <br />
                <p className='font-semibold text-primary-color'>
                    A. Chi phí thiết kế:
                </p>
                <p className='indent-8'>
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
                <p className='indent-12'>- Bản vẽ kiến trúc</p>
                <p className='indent-12'>- Bản vẽ kiến trúc</p>
                <p className='indent-12'>- Bản vẽ kết cấu</p>
                <p className='indent-12'>- Bản vẽ điện, nước</p>
                <p className='indent-12'>- Bản vẽ nội, ngoại thất</p>
                <p className='indent-8'>
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
                <br />
                <p className='font-semibold text-primary-color'>
                    B. Chi phí nguyên vật liệu:
                </p>
                <p className='indent-8'>
                    Trên thị trường có đa dạng loại gỗ với đặc tính và giá trị
                    khác nhau dẫn đến sự đa dạng về giá cả. Bạn có thể dựa trên
                    bản vẽ để tính toán khối lượng gỗ cần thiết và giá tham khảo
                    của một số loại gỗ thường được sử dụng hiện nay mà chúng tôi
                    cung cấp bên dưới để hoạch toán ra một kế hoạch chi tiêu hợp
                    lý.
                </p>
                <table className='text-center mx-auto mt-4 mb-2'>
                    <tr>
                        <th className='w-[100px]'>LOẠI GỖ</th>
                        <th className='w-[150px]'>MỨC GIÁ</th>
                    </tr>
                    {data.map((d, index) => (
                        <tr key={index}>
                            <td className='w-[100px]'>{d.type}</td>
                            <td className='w-[150px]'>{d.price}</td>
                        </tr>
                    ))}
                </table>
                <p className='text-center'>
                    XEM THÊM:{' '}
                    <Link href={'/mau-nha'}>
                        <a className='hover:text-primary-color hover:font-semibold hover:italic hover:underline transition-all duration-100'>
                            Mẫu nhà gỗ 3 gian 5 gian đẹp
                        </a>
                    </Link>
                </p>
                <br />
                <p className='font-semibold text-primary-color'>
                    C. Chi phí nhân công:
                </p>
                <p className='indent-8'>
                    Chi phí nhân công phụ thuộc vào đơn giá do đơn vị thi công
                    đưa ra, kích thước, kiến trúc của ngôi nhà và khối lượng
                    công việc họ cần làm để xác định.
                </p>
                <br />
                <p className='font-semibold text-primary-color'>
                    D. Chi phí lắp đặt điện, nước:
                </p>
                <p className='indent-8'>
                    Dựa trên bản vẽ thiết kế và các yêu cầu đặc biệt của chủ
                    nhà, đội ngũ thi công sẽ tính được chi phí lắp đặt điện nước
                    theo các yếu tố sau:
                </p>
                <p className='indent-12'>
                    - Chi phí mua vật liệu: dây điện, ống nước, bóng đèn, vòi
                    nước, cầu chì, ổ cắm,…
                </p>
                <p className='indent-12'>- Chi phí nhân công</p>
                <br />
                <p className='font-semibold text-primary-color'>
                    E. Chi phí nội, ngoại thất:
                </p>
                <p className='indent-8'></p>Giống như chi phí lắp đặt điện nước,
                chi phí nội thất bao gồm chi phí sắm sửa trang thiết bị và chi
                phí nhân công lắp đặt.
                <p className='ml-12'>
                    - Chi phí mua trang thiết bị: được quyết định bởi giá thành
                    của các đồ nội – ngoại thất mà bạn yêu cầu như tủ, giường,
                    bàn ghế, lan can,…
                </p>
                <p className='ml-12'>
                    - Chi phí nhân công lắp đặt: dựa trên các yêu cầu của bạn
                    như trồng vườn cây, đào hồ - ao cá, xây lắp ban công, trang
                    trí, bày trí thêm một số đồ vật thiết kế,…
                </p>
                <br />
                <p className=' font-semibold text-primary-color'>
                    2. Giá xây nhà gỗ 3 gian tại Nhà Gỗ Làng Mộc là bao nhiêu:
                </p>
                <p className='indent-8'>
                    Sau khi tính toán được chi phí trên, bạn chỉ cần tổng tất cả
                    chúng lại sẽ có được mức kinh phí dự trù để xây dựng nhà gỗ
                    3 gian. Để cụ thể hơn, Nhà Gỗ Làng Mộc đã lập nên một công
                    thức tổng quát:
                </p>
                <br />
                <p className='indent-8 font-semibold text-primary-color'>
                    Giá nhà gỗ = CP thiết kế + CP nguyên vật liệu + CP nhân công
                    + CP lắp đặt điện, nước + CP nội, ngoại thất
                </p>
                <br />
                <p className='indent-8'>
                    Bên trên là một số thông tin liên quán đến vấn đề xây dựng
                    nhà gỗ 3 gian giá bao nhiêu mà Nhà Gỗ Làng Mộc muốn gửi đến
                    các bạn ra đời với sứ mệnh mang đẳng cấp đến gần hơn với
                    cuộc sống Việt. Hơn 18 năm trôi qua, Nhà Gỗ Làng Mộc vẫn
                    luôn nỗ lực không ngừng trên con đường của mình. Sau thời
                    gian dài hoạt động, chúng tôi đã phần nào hiểu được nhu cầu
                    cũng như thị hiếu của khách hàng về một tổ ấm hoàn thiện:
                </p>
                <p className='indent-8'>
                    Để đáp ứng nhu cầu của khách hàng, Nhà Gỗ Làng Mộc cho ra
                    đời dịch vụ thiết kế - thi công nhà gỗ 3 gian tại TPHCM và
                    trên địa bàn cả nước. Với nguồn lực và văn hóa công ty mà
                    chúng tôi đang sở hữu, Nhà Gỗ Làng Mộc chính là một đơn vị
                    uy tín, chuyên nghiệp mà bạn hoàn toàn có thể đặt niềm tin.
                    Với hơn 18 năm kinh nghiệm, chúng tôi hiểu cần làm gì để
                    giúp bạn tối thiểu nhất chi phí xây dựng mà vẫn đảm bảo được
                    độ khả thi và tính thẩm mĩ của công trình. Nếu đang có nhu
                    cầu, bạn hãy liên hệ đến chúng tôi theo số Hotline: 0388 135
                    440 để được tư vấn chi tiết và tận tình hơn. Hoặc có thể
                    tham khảo thêm tại Website: https://langmoc.vn/ Xin chân
                    thành cảm ơn!
                </p>
            </div>
        </NewsWrapper>
        /* <PageWrapper>
            <PageItem>
                <BreadCrumb
                    location={[
                        { title: 'Trang chủ', link: '/' },
                        { title: 'Giới Thiệu', link: '/gioi-thieu' },
                    ]}
                />
            </PageItem>
            <PageItem>
                //<PostsTitle /> 
                <Category />
                <Support />
                <Contact />
            </PageItem>
            <PageItem>
                <h2 className='font-bold text-xl text-primary-color'>
                    Giới thiệu
                </h2>
                <br />
                <div className='border-2 p-3 text-sm'>
                    <p className='indent-8'>
                        Nhà gỗ 3 gian vốn không còn xa lạ với người dân Việt
                        Nam, đặc biệt là vùng Bắc bộ, tuy nhiên, cùng với sự du
                        nhập trong lối kiến trúc, nhà gỗ 3 gian đã có nhiều phát
                        triển hơn trong nhận thức những người yêu kiến trúc. Nếu
                        bạn muốn xây dựng một nhà gỗ 3 gian vừa mang nét đẹp
                        truyền thống, vừa mang nét hiện đại của kiến trúc phương
                        tây nhưng lo ngại về vấn đề giá cả, thì bài viết dưới
                        đây, Nhà Gỗ Làng Mộc sẽ gửi đến bạn bảng báo giá chi
                        tiết dịch vụ thiết kế - xây dựng nhà gỗ 3 gian do chúng
                        tôi cung cấp.
                    </p>
                    <br />
                    <p className=' font-semibold text-primary-color'>
                        1. Các yếu tố cấu thành giá làm nhà gỗ 3 gian:
                    </p>
                    <p className='indent-8'>
                        Để cấu thành nên tổng thể chi phí làm nhà gỗ 3 gian, ta
                        cần tính toán chi tiết những yếu tố sau:
                    </p>
                    <br />
                    <p className='font-semibold text-primary-color'>
                        A. Chi phí thiết kế:
                    </p>
                    <p className='indent-8'>
                        Giai đoạn đầu tiên để hoàn thiện ngôi nhà gỗ trong mơ
                        của bản thân chính là hoàn thiện chúng trên giấy, đây
                        được gọi là giai đoạn thiết kế. Việc thiết kế giúp bạn
                        và đội ngũ xây dựng xác định được hình dáng, kết cấu của
                        ngôi nhà, từ đó dự trù được số lượng nguyên – vật liệu
                        cần thiết, các bước tiến hành để hoàn thiện chúng. Ngoài
                        ra bản vẽ cũng chính là cách để chúng ta kiểm soát được
                        chất lượng của thành phẩm. Thông thường một bộ bản vẽ
                        thiết kế căn nhà đầy đủ sẽ gồm 4 loại bản vẽ:
                    </p>
                    <p className='indent-12'>- Bản vẽ kiến trúc</p>
                    <p className='indent-12'>- Bản vẽ kiến trúc</p>
                    <p className='indent-12'>- Bản vẽ kết cấu</p>
                    <p className='indent-12'>- Bản vẽ điện, nước</p>
                    <p className='indent-12'>- Bản vẽ nội, ngoại thất</p>
                    <p className='indent-8'>
                        Hiện nay, mức giá thiết kế phổ biến cho một căn nhà gỗ
                        có diện tích dưới 120m2 là 2 triệu đồng, trên 120m2 sẽ
                        có giá 65.000đ/m2. Ngoài ra, nếu bạn có kỹ năng chuyên
                        môn về thiết kế, có sẵn ý tưởng trong đầu, bạn hoàn toàn
                        có thể tiết kiệm chi phí bằng cách tự tạo lập hay tính
                        toán các bản vẽ trên. Nếu không có thời gian hoặc không
                        chắc chắn về khả năng thiết kế, bạn có thể tìm đến sự
                        giúp đỡ từ những công ty, doanh nghiệp hoặc kiến trúc sư
                        chuyên nghiệp với một khoảng phí như trên.
                    </p>
                    <br />
                    <p className='font-semibold text-primary-color'>
                        B. Chi phí nguyên vật liệu:
                    </p>
                    <p className='indent-8'>
                        Trên thị trường có đa dạng loại gỗ với đặc tính và giá
                        trị khác nhau dẫn đến sự đa dạng về giá cả. Bạn có thể
                        dựa trên bản vẽ để tính toán khối lượng gỗ cần thiết và
                        giá tham khảo của một số loại gỗ thường được sử dụng
                        hiện nay mà chúng tôi cung cấp bên dưới để hoạch toán ra
                        một kế hoạch chi tiêu hợp lý.
                    </p>
                    <table className='text-center mx-auto mt-4 mb-2'>
                        <tr>
                            <th className='w-[100px]'>LOẠI GỖ</th>
                            <th className='w-[150px]'>MỨC GIÁ</th>
                        </tr>
                        {data.map((d, index) => (
                            <tr key={index}>
                                <td className='w-[100px]'>{d.type}</td>
                                <td className='w-[150px]'>{d.price}</td>
                            </tr>
                        ))}
                    </table>
                    <p className='text-center'>
                        XEM THÊM:{' '}
                        <Link href={'/mau-nha'}>
                            <a className='hover:text-primary-color hover:font-semibold hover:italic hover:underline transition-all duration-100'>
                                Mẫu nhà gỗ 3 gian 5 gian đẹp
                            </a>
                        </Link>
                    </p>
                    <br />
                    <p className='font-semibold text-primary-color'>
                        C. Chi phí nhân công:
                    </p>
                    <p className='indent-8'>
                        Chi phí nhân công phụ thuộc vào đơn giá do đơn vị thi
                        công đưa ra, kích thước, kiến trúc của ngôi nhà và khối
                        lượng công việc họ cần làm để xác định.
                    </p>
                    <br />
                    <p className='font-semibold text-primary-color'>
                        D. Chi phí lắp đặt điện, nước:
                    </p>
                    <p className='indent-8'>
                        Dựa trên bản vẽ thiết kế và các yêu cầu đặc biệt của chủ
                        nhà, đội ngũ thi công sẽ tính được chi phí lắp đặt điện
                        nước theo các yếu tố sau:
                    </p>
                    <p className='indent-12'>
                        - Chi phí mua vật liệu: dây điện, ống nước, bóng đèn,
                        vòi nước, cầu chì, ổ cắm,…
                    </p>
                    <p className='indent-12'>- Chi phí nhân công</p>
                    <br />
                    <p className='font-semibold text-primary-color'>
                        E. Chi phí nội, ngoại thất:
                    </p>
                    <p className='indent-8'></p>Giống như chi phí lắp đặt điện
                    nước, chi phí nội thất bao gồm chi phí sắm sửa trang thiết
                    bị và chi phí nhân công lắp đặt.
                    <p className='ml-12'>
                        - Chi phí mua trang thiết bị: được quyết định bởi giá
                        thành của các đồ nội – ngoại thất mà bạn yêu cầu như tủ,
                        giường, bàn ghế, lan can,…
                    </p>
                    <p className='ml-12'>
                        - Chi phí nhân công lắp đặt: dựa trên các yêu cầu của
                        bạn như trồng vườn cây, đào hồ - ao cá, xây lắp ban
                        công, trang trí, bày trí thêm một số đồ vật thiết kế,…
                    </p>
                    <br />
                    <p className=' font-semibold text-primary-color'>
                        2. Giá xây nhà gỗ 3 gian tại Nhà Gỗ Làng Mộc là bao
                        nhiêu:
                    </p>
                    <p className='indent-8'>
                        Sau khi tính toán được chi phí trên, bạn chỉ cần tổng
                        tất cả chúng lại sẽ có được mức kinh phí dự trù để xây
                        dựng nhà gỗ 3 gian. Để cụ thể hơn, Nhà Gỗ Làng Mộc đã
                        lập nên một công thức tổng quát:
                    </p>
                    <br />
                    <p className='indent-8 font-semibold text-primary-color'>
                        Giá nhà gỗ = CP thiết kế + CP nguyên vật liệu + CP nhân
                        công + CP lắp đặt điện, nước + CP nội, ngoại thất
                    </p>
                    <br />
                    <p className='indent-8'>
                        Bên trên là một số thông tin liên quán đến vấn đề xây
                        dựng nhà gỗ 3 gian giá bao nhiêu mà Nhà Gỗ Làng Mộc muốn
                        gửi đến các bạn ra đời với sứ mệnh mang đẳng cấp đến gần
                        hơn với cuộc sống Việt. Hơn 18 năm trôi qua, Nhà Gỗ Làng
                        Mộc vẫn luôn nỗ lực không ngừng trên con đường của mình.
                        Sau thời gian dài hoạt động, chúng tôi đã phần nào hiểu
                        được nhu cầu cũng như thị hiếu của khách hàng về một tổ
                        ấm hoàn thiện:
                    </p>
                    <p className='indent-8'>
                        Để đáp ứng nhu cầu của khách hàng, Nhà Gỗ Làng Mộc cho
                        ra đời dịch vụ thiết kế - thi công nhà gỗ 3 gian tại
                        TPHCM và trên địa bàn cả nước. Với nguồn lực và văn hóa
                        công ty mà chúng tôi đang sở hữu, Nhà Gỗ Làng Mộc chính
                        là một đơn vị uy tín, chuyên nghiệp mà bạn hoàn toàn có
                        thể đặt niềm tin. Với hơn 18 năm kinh nghiệm, chúng tôi
                        hiểu cần làm gì để giúp bạn tối thiểu nhất chi phí xây
                        dựng mà vẫn đảm bảo được độ khả thi và tính thẩm mĩ của
                        công trình. Nếu đang có nhu cầu, bạn hãy liên hệ đến
                        chúng tôi theo số Hotline: 0388 135 440 để được tư vấn
                        chi tiết và tận tình hơn. Hoặc có thể tham khảo thêm tại
                        Website: https://langmoc.vn/ Xin chân thành cảm ơn!
                    </p>
                </div>/*}
                */
        //     </PageItem>
        // </PageWrapper>
    );
};

export default Introduction;

