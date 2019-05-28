import React from 'react'
import Link from 'next/link'
import AdminHeader from '../components/layouts/admin.header';
import AdminSidebar from '../components/layouts/admin.menu';
import AdminFooter from '../components/layouts/admin.footer';
import AdminHOC from '../components/layouts/admin.hoc';

const Home = () => (
  <div>
    <AdminHOC content_title="user_page" menu_id="12">
      <h1>hello bank</h1>
    </AdminHOC>
  </div>
);

export default Home
