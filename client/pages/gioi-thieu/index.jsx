import PostsTitle from "components/common/SideBar/PostsTitle";
import Category from "components/common/SideBar/Category";
import Support from "components/common/SideBar/Support";
import Contact from "components/common/SideBar/Contact";
import { PageItem, PageWrapper } from "components/common/PageWrapper";

const Introduction = () => {
  return (
    <PageWrapper>
      <PageItem>breadcrum</PageItem>
      <PageItem>
        <PostsTitle />
        <Category />
        <Support />
        <Contact />
      </PageItem>
      <PageItem>content</PageItem>
    </PageWrapper>
  );
};

export default Introduction;
