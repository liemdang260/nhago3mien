import dynamic from 'next/dynamic';
const AppAdmin = dynamic(() => import('../../components/admin'), {
    ssr: false,
});

const AdminPage = () => {
    return <AppAdmin />;
};

export default AdminPage;
