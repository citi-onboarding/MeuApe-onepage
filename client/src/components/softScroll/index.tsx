import React from 'react';

export const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const target = event.currentTarget.getAttribute('href');
    const offsetTop = (document.querySelector(target!) as HTMLElement).offsetTop;

    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
    });
};
