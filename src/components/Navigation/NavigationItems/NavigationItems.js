import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Home</NavigationItem>
        <NavigationItem link="/projects">Projects</NavigationItem>
        <NavigationItem link="/blog">Blog</NavigationItem>
        <NavigationItem link="/resources">Resources</NavigationItem>
        <NavigationItem link="/shop">Shop</NavigationItem>
        <NavigationItem link="/about">About</NavigationItem>
    </ul>
);

export default navigationItems;