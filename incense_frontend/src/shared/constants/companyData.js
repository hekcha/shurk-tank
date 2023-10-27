import instagram from '../../assets/instagram.svg';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import whatsapp from '../../assets/whatsapp.svg';

export const addressInfo = {
  fullAddress: `Shree Ansh Agarbatti co. Gola Bazar, Gorakhpur, Uttar Pradesh, 273408, India`,
  mapLink: `https://maps.app.goo.gl/esvj5UkrWBXzgWoY6`,
  iframeLink: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.6083767575033!2d83.366911!3d26.339177799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39917791a09a80bd%3A0x9900a17a6a00a2e7!2sSHREE%20ANSH%20AGARBATTI%20CO.!5e0!3m2!1sen!2sin!4v1698425193471!5m2!1sen!2sin`,
  emailAddress: `shreeansh26@gmail.com`,
  phoneNumber: `+91 9889733153`,
};

export const aboutUsPageDetails = {
  TagLine1: `Exceptional fragrances, quality, innovation, and customer-focused variety set us apart.`,
  TagLine2: `Shree Ansh Agarbatti is a renowned brand known for crafting fragrant incense sticks. With state-of-the-art facilities in Gorakhpur, we produce a wide range of premium incense products, including our flagship collection. We prioritize customer satisfaction, innovation, and creativity, carefully creating each incense stick. Our product line consists of 35 varieties, spanning floral, oriental, premium, woody, cosmetic, and florabatti fragrances.`,
  Vision: `The brand envisions a future where every Indian household uses Shree Ansh Agarbatti to enhance prayers with purity and divinity. Incense sticks purify prayers, uplift moods, bring calmness, and improve concentration.`,
};

export const footerLinks1 = [
  {
    Title: 'About Us',
    Link: '#',
  },
  {
    Title: 'Blog',
    Link: '#',
  },
  {
    Title: 'GitHub',
    Link: '#',
  },
  {
    Title: 'Free Products',
    Link: '#',
  },
];

export const footerLinks2 = [
  {
    Title: 'MIT License',
    Link: '#',
  },
  {
    Title: 'Terms & Conditions',
    Link: '#',
  },
  {
    Title: 'Privacy Policy',
    Link: '#',
  },
  {
    Title: 'Contact Us',
    Link: '#',
  },
];

export const socialMediaLinks = [
  {
    Title: 'Facebook',
    SVGPath: facebook,
    Link: 'https://www.facebook.com/shree.ansh.7',
  },
  {
    Title: 'Instagram',
    SVGPath: instagram,
    Link: 'https://www.instagram.com/shree_ansh_agarbatti',
  },
  {
    Title: 'Twitter',
    SVGPath: twitter,
    Link: 'https://twitter.com/AnshAgarbatti?t=Lt2kaeNpGzyNQ6wxqxNj9Q&s=09',
  },
  {
    Title: 'Whatsapp',
    SVGPath: whatsapp,
    Link: 'https://wa.me/91' + addressInfo.phoneNumber.split(' ')[1],
  },
];
