import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';
import fs from 'fs';
import path from 'path';
import type { NavLink } from './types';

// Helper to detect whether a page exists under src/pages for a given href
const pageExists = (href: string) => {
  try {
    if (!href || href === '#' || href.startsWith('http')) return false;
    // Normalize to a filesystem path under src/pages
    const cleaned = href.replace(/^\//, '').replace(/\/?$/, '');
    if (cleaned === '') {
      // home page
      const p = path.join(process.cwd(), 'src', 'pages', 'index.astro');
      return fs.existsSync(p);
    }
    const candidates = [
      path.join(process.cwd(), 'src', 'pages', `${cleaned}.astro`),
      path.join(process.cwd(), 'src', 'pages', cleaned, 'index.astro'),
    ];
    return candidates.some((c) => fs.existsSync(c));
  } catch (err) {
    return false;
  }
};

const makeLink = (text: string, href: string) => ({ text, href: getPermalink(href), disabled: !pageExists(href) });

export const headerData = {
  links: [
    {
      text: 'About',
      links: [
        makeLink('About', '/about'),
        makeLink('Services', '/services'),
        makeLink('Contact', '/contact-us'),
        makeLink('Terms', '/terms'),
        makeLink('Privacy', '/privacy'),
      ],
    },
    {
      text: 'Info',
      links: [
        makeLink('Latest Articles', '/blog/'),
        makeLink('Hot Topics', '/blog'),
        makeLink('News', '/blog'),
        makeLink('Tutorials', '/blog'),
      ],
    },
    {
      text: 'Products',
      links: [
        makeLink('Proton for Business', '/products/proton-for-business'),
        makeLink('Proton Mail', '/products/proton-mail'),
        makeLink('Proton VPN', '/products/proton-vpn'),
        makeLink('Proton Pass', '/products/proton-pass'),
        makeLink('Proton Authenticator', '/products/proton-authenticator'),
        makeLink('Proton Drive', '/products/proton-drive'),
      ],
    },
    // Members link - show but disabled if no page
    { text: 'Projects', href: '#', disabled: true },
    { text: 'Members', href: '#', disabled: true },
  ],
  actions: [{ text: 'Login', href: '/login', disabled: true }],
};

export const footerData = {
  links: [

    // Mirror the 'About' section links in headerData so company links stay in sync
    {
      title: 'Products',
      links: ((): Array<{ text: string; href: string; disabled?: boolean }> => {
        const products = headerData.links.find((l) => l.text === 'Products');
        if (!products || !Array.isArray(products.links)) {
          return [
            { text: 'Products', href: getPermalink('/products/proton-for-business') },
          ];
        }
        return (products as { links: NavLink[] }).links.map((item) => ({
          text: item.text,
          href: item.href,
          disabled: item.disabled,
        }));
      })(),
    },    
    {
      title: 'Shop',
      links: [
        { text: 'E-Books', href: getPermalink('/shop'), disabled: true },
        { text: 'Hardware', href: getPermalink('/shop'), disabled: true },
        { text: 'Merch', href: getPermalink('/shop'), disabled: true },
      ],
    },
    {
      title: 'Members',
      links: [
        { text: 'Login', href: '#', disabled: true },
        { text: 'Encryption', href: '#', disabled: true },
        { text: 'Newsletter', href: '#', disabled: true },
        { text: 'Status', href: '#', disabled: true },
      ],
    },
    // Mirror the 'About' section links in headerData so company links stay in sync
    {
      title: 'Company',
      links: ((): Array<{ text: string; href: string; disabled?: boolean }> => {
        const about = headerData.links.find((l) => l.text === 'About');
        if (!about || !Array.isArray(about.links)) {
          return [
            { text: 'About', href: getPermalink('/about') },
            { text: 'Blog', href: getBlogPermalink() },
          ];
        }
        return (about as { links: NavLink[] }).links.map((item) => ({
          text: item.text,
          href: item.href,
          disabled: item.disabled,
        }));
      })(),
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/rebel-state/rebel-frontend' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://github.com/rebel-state"> Rebel-State</a> · All rights reserved.
  `,
};
