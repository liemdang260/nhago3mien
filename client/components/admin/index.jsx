import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const AdminPage = () => {
    return (
        <Admin dataProvider={dataProvider}>
            <Resource name='quytrinhphattrien' list={ListGuesser} />
            <Resource name='duandalam' list={ListGuesser} />
            <Resource name='thuvientulieu' list={ListGuesser} />
            <Resource name='dichvu' list={ListGuesser} />
            <Resource name='thongtinkhac' list={ListGuesser} />
        </Admin>
    );
};

export default AdminPage;
