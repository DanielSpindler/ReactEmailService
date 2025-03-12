import sendOrderConfirmation from "./actions/sendOrderConfirmation";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
const orderContext = {
  orderNumber: "ORD-20240312-12345",
  shippingAddress: {
    firstName: "John",
    lastName: "Doe",
    company: "Acme Corp",
    addressLine1: "123 Main St",
    addressLine2: "Apt 4B",
    postalCode: "10001",
    city: "New York",
    country: "USA",
  },
  billingAddress: {
    firstName: "John",
    lastName: "Doe",
    company: "Acme Corp",
    addressLine1: "123 Main St",
    addressLine2: "Apt 4B",
    postalCode: "10001",
    city: "New York",
    country: "USA",
  },
  paymentMethod: "Credit Card",
  paymentInstruction: "Pay in full upon checkout",
  lineItems: [
    {
      lpid: "LP123456",
      mpn: "MPN7890",
      name: "Wireless Headphones",
      totalPrice: "99.99",
      quantity: 1,
      slug: "wireless-headphones",
      media: {
        images: [
          {
            label: "Front View",
            uri: "https://cdn.example.com/images/headphones-front.jpg",
          },
        ],
      },
    },
    {
      lpid: "LP123456",
      mpn: "MPN7890",
      name: "Wireless Headphones",
      totalPrice: "99.99",
      quantity: 1,
      slug: "wireless-headphones",
      media: {
        images: [
          {
            label: "Front View",
            uri: "https://cdn.example.com/images/headphones-front.jpg",
          },
        ],
      },
    },
  ],
  subtotalPrice: "99.99",
  totalPrice: "109.99",
  shippingPrice: "10.00",
  createdAt: "2025-03-12T10:00:00Z",
  title: "OrderConfirmation",
  greeting: "OrderConfirmation",
  orderDate: "01.01.1969",
  shipping: "Shipping",
  closing: "closing",

  // ConfigType properties
  currentYear: "2025",
  logoUri: "https://cdn.example.com/logo.png",
  productImageFallbackUri: "https://cdn.example.com/default-product.png",
  social: {
    youtube: {
      uri: "https://youtube.com/example",
      iconUri: "https://cdn.example.com/icons/youtube.svg",
    },
    facebook: {
      uri: "https://facebook.com/example",
      iconUri: "https://cdn.example.com/icons/facebook.svg",
    },
    twitter: {
      uri: "https://twitter.com/example",
      iconUri: "https://cdn.example.com/icons/twitter.svg",
    },
    instagram: {
      uri: "https://instagram.com/example",
      iconUri:
        "https://static.cdninstagram.com/rsrc.php/v4/yI/r/VsNE-OHk_8a.png",
    },
  },
}; //gets filled in when the mail is executed. EXAMPLEDATA

const app = express();

app.use(express.json());

app.post("/", async (req: Request, res: Response) => {
  const { to, subject, type } = req.body; // adjust data you want to receive so you can customize your template with the data
  if(!type) {
    res.status(400).send("no type set")
    return;
  }

  if (!to || !subject) {
    res.status(400).send("'to' or subject missing");
    return;
  }
  if(type === 'orderConfirmation') {
  await sendOrderConfirmation({ to, subject, orderContext }); // EXAMPLEDATA is on the top of the index.js file, delete it
    res.json({ message: "Email sent successfully" });
    return;
  } else {
    res.status(400).send("Wrong type")
    return;
  }
});

// Handle all other methods with 405 Method Not Allowed
app.all("*", (req: Request, res: Response) => {
  res
    .status(405)
    .json({ error: "Method Not Allowed", message: "Use POST instead" });
});

// Set up the server to listen on the provided port and host
const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || "localhost";

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});