import NewsWrapper from 'components/common/NewsWrapper';
// import ArticalInsights from 'components/common/ArticleInsights';
// import Image from 'next/image';
// import { faEye, faClock } from '@fortawesome/free-regular-svg-icons';
// import { faServicestack } from '@fortawesome/free-brands-svg-icons';
import { useRouter } from 'next/router';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { marked } from 'marked';

const ServiceDetail = ({ title, slug, content }) => {
    const { asPath } = useRouter();
    const htmlContent = marked.parse(content);
    // console.log(htmlContent);
    return (
        <NewsWrapper pathname={{ title: title, link: asPath }}>
            <p className='text-primary-color font-semibold text-xl text-center p-4 '>
                {title}
            </p>
            <div
                className=''
                dangerouslySetInnerHTML={{ __html: htmlContent }}
            ></div>
            <div className='w-full bg-gray-200 px-4 py-4 text-center'>
                <h1
                    className='text-red-600'
                    style={{ fontSize: 24, fontWeight: 700 }}
                >
                    Nhà gỗ Ba Miền
                </h1>
                <address className='text-sm md:text-lg leading-loose font-normal'>
                    Địa chỉ: 72/24 Phan Đăng Lưu, Phường 5, Quận Phú Nhuận,
                    TP.HCM. <br />
                    Văn phòng chi nhánh: 305/35 TA28, Quận 12, TP.HCM <br />
                    Xưởng: Thôn Hà Thái, Xã Hoằng Hà, Huyện Hoằng Hóa, Tỉnh
                    Thanh Hóa. <br />
                    Điện thoại:{' '}
                    <a className='text-red-500' href='tel:0932112365'>
                        096.211.6789
                    </a>
                    ,{' '}
                    <a className='text-red-500' href='tel:0909377365'>
                        0977.325.651
                    </a>{' '}
                    <br />
                    Email:{' '}
                    <a href='mailto:info@nhagobamien.vn'>info@nhagobamien.vn</a>
                </address>
            </div>
        </NewsWrapper>
    );
};

export default ServiceDetail;

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('mock-data', 'services'), {
        encoding: 'utf-8',
    });
    const paths = files.map((filename) => ({
        params: { loaiDichVuID: filename.replace('.md', '') },
    }));
    // console.log(paths);
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps(context) {
    const { params } = context;
    const fileContent = fs.readFileSync(
        path.join('mock-data', 'services', params.loaiDichVuID + '.md'),
        { encoding: 'utf-8' },
    );
    // console.log(matter(fileContent));
    const frontMatter = matter(fileContent);
    return {
        props: {
            title: frontMatter.data.title,
            slug: params.loaiDichVuID,
            content: frontMatter.content,
        },
    };
}

