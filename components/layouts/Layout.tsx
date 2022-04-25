import { Box } from '@mui/system'
import Head from 'next/head'
import React, { FC } from 'react'
import { Navbar } from '../ui';

interface Props {
    title?: string;
    children?: JSX.Element | JSX.Element[]
}

export const Layout: FC<Props> = ({ title = 'Jira - APP', children }) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Head>
                <title>{title}</title>
            </Head>

            <Navbar />
            <Box sx={{ paddingTop: '10px 20px' }}>
                {children}
            </Box>

        </Box>
    )
}
