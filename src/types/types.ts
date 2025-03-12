export type OrderBase = {
  orderNumber: string;
  shippingAddress: Address;
  billingAddress: Address;
  paymentMethod?: string;
  paymentInstruction?: string;
  lineItems: LineItem[];
  subtotalPrice: string;
  totalPrice: string;
  shippingPrice?: string;
  createdAt: string;
  title: string;
  greeting: string;
  orderDate: string;
  shipping: string;
  closing: string;
};
export type Address = {
  firstName?: string;
  lastName?: string;
  company?: string;
  addressLine1?: string;
  addressLine2?: string;
  addressLine3?: string;
  postalCode?: string;
  city?: string;
  country: string;
};
export type ConfigType = {
  currentYear: string;
  logoUri: string;
  productImageFallbackUri: string;
  social: {
    youtube: SocialLinks;
    facebook: SocialLinks;
    twitter: SocialLinks;
    instagram: SocialLinks;
  };
};
export type LineItem = {
  lpid?: string;
  mpn?: string;
  name: string;
  totalPrice: string;
  quantity: number;
  slug?: string;
  media: ImageCollection;
};
export type SocialLinks = {
  uri: string;
  iconUri: string;
};

type ImageCollection = {
  images: ImageData[];
};
type ImageData = {
  label: string | null;
  uri: string;
};
