import type {NextPage} from "next";
import {useRouter} from "next/router";

const News: NextPage = () => {
  const router = useRouter();
  const {tinTucID} = router.query;

  return (
    <div className="underline decoration-sky-500/30">
      <div>Trang hien thi tin tuc: {tinTucID}</div>
    </div>
  );
};

export default News;
