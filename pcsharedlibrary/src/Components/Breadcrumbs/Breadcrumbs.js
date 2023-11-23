import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function CustomBreadcrumbs() {
    const urlPath = "/mdr/terminology/controlledterminology";

    // Split the URL path into segments
    const pathSegments = urlPath.split('/').filter(Boolean);

    // Generate breadcrumb elements based on path segments
    const breadcrumbs = pathSegments.map((segment, index) => {
        const isLast = index === pathSegments.length - 1;
        const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
        debugger
        // if (isLast) {
        //     return (
        //         <Typography key={index} color="text.primary" sx={{ fontFamily: 'Roboto, Helvetica, Arial, sans-serif', fontSize: '.875rem' }}>
        //             {segment}
        //         </Typography>
        //     );
        // }

        return (
            <Link sx={{ fontFamily: 'Roboto, Helvetica, Arial, sans-serif', fontSize: '.875rem' }}
                underline="hover"
                key={index}
                color="inherit"
                href={path}
                onClick={handleClick}
            >
                {segment.toUpperCase()}
            </Link>
        );
    });

    // Create the breadcrumbs with the generated elements
    return (
        <Stack spacing={5}>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
                {breadcrumbs}
            </Breadcrumbs>
        </Stack>
    );
}
