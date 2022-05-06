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

