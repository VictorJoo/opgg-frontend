import React from 'react';
import { MainWrapper } from '@layouts/MainLayout/styles';
interface MainLayoutProps {
	children: React.ReactNode;
}
const MainLayout = ({ children }: MainLayoutProps) => {
	return <MainWrapper>{children}</MainWrapper>;
};

export default MainLayout;
