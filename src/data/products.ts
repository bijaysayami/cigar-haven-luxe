import catCigars from "@/assets/cat-cigars.jpg";
import catAccessories from "@/assets/cat-accessories.jpg";
import catGifts from "@/assets/cat-gifts.jpg";
import catCollectibles from "@/assets/cat-collectibles.jpg";

export interface Product {
  id: number;
  name: string;
  category: string;
  type: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
  rating: number;
  reviews: number;
  sold: number;
  description: string;
  details: string[];
  inStock: boolean;
}

export const allProducts: Product[] = [
  {
    id: 1, name: "Cohiba Behike 56", category: "Cigars", type: "Cuban",
    price: 89.95, originalPrice: 109.95, image: catCigars, badge: "Best Seller",
    rating: 4.9, reviews: 124, sold: 342, inStock: true,
    description: "The Cohiba Behike 56 is a masterpiece of Cuban cigar craftsmanship. With its unique medio tiempo leaves, this cigar delivers an extraordinary smoking experience — complex, rich, and unforgettable. Notes of dark chocolate, cedar, and a hint of spice make every puff a journey of flavour.",
    details: ["Origin: Cuba", "Wrapper: Cuban", "Length: 5.5\"", "Ring Gauge: 56", "Strength: Medium-Full", "Smoking Time: 60-75 mins"],
  },
  {
    id: 2, name: "Gold Cigar Cutter Set", category: "Accessories", type: "Cutters",
    price: 45.00, image: catAccessories,
    rating: 4.7, reviews: 89, sold: 210, inStock: true,
    description: "A precision-engineered gold-plated cigar cutter set that delivers a perfect cut every time. Housed in an elegant gift box, this set includes a double-blade guillotine cutter and a V-cut companion.",
    details: ["Material: Stainless Steel, Gold Plated", "Blade: Double Guillotine + V-Cut", "Includes Gift Box", "Weight: 180g"],
  },
  {
    id: 3, name: "Crystal Whiskey Decanter", category: "Luxury Gifts", type: "Whiskey Sets",
    price: 129.95, originalPrice: 159.95, image: catGifts, badge: "Sale",
    rating: 4.8, reviews: 67, sold: 156, inStock: true,
    description: "This hand-crafted crystal whiskey decanter elevates any home bar. With its diamond-cut pattern and airtight stopper, it preserves and presents your finest spirits in stunning fashion.",
    details: ["Material: Lead-Free Crystal", "Capacity: 850ml", "Height: 26cm", "Hand-Cut Diamond Pattern", "Airtight Glass Stopper"],
  },
  {
    id: 4, name: "Bronze Atlas Statue", category: "Collectibles", type: "Statues",
    price: 199.00, image: catCollectibles, badge: "Limited",
    rating: 5.0, reviews: 23, sold: 42, inStock: true,
    description: "A meticulously detailed bronze Atlas statue that serves as a commanding centrepiece. Hand-finished with an antique patina, this piece captures the strength and beauty of classical sculpture.",
    details: ["Material: Cold Cast Bronze", "Height: 30cm", "Weight: 2.4kg", "Hand-Finished Patina", "Felt-Lined Base"],
  },
  {
    id: 5, name: "Montecristo No. 2", category: "Cigars", type: "Cuban",
    price: 64.95, image: catCigars,
    rating: 4.8, reviews: 203, sold: 520, inStock: true,
    description: "The iconic Montecristo No. 2 torpedo is revered by cigar enthusiasts worldwide. Its perfectly tapered head allows for a concentrated draw, revealing layers of nutty, woody, and creamy flavours.",
    details: ["Origin: Cuba", "Wrapper: Cuban", "Length: 6.1\"", "Ring Gauge: 52", "Strength: Medium", "Smoking Time: 45-60 mins"],
  },
  {
    id: 6, name: "Premium Humidor 50ct", category: "Accessories", type: "Humidors",
    price: 249.00, originalPrice: 299.00, image: catAccessories, badge: "Sale",
    rating: 4.9, reviews: 45, sold: 98, inStock: true,
    description: "Crafted from Spanish cedar with a high-gloss piano finish, this 50-count humidor maintains perfect humidity for your prized cigar collection. Features a precision hygrometer and humidification system.",
    details: ["Capacity: 50 Cigars", "Material: Spanish Cedar Interior", "Finish: High-Gloss Piano", "Hygrometer: Analogue Precision", "Lock & Key Included"],
  },
  {
    id: 7, name: "Leather Travel Case", category: "Luxury Gifts", type: "Leather Goods",
    price: 79.95, image: catGifts, badge: "New",
    rating: 4.6, reviews: 34, sold: 87, inStock: true,
    description: "A handcrafted genuine leather travel cigar case that holds up to 3 cigars securely. With its cedar lining and crush-proof design, your cigars stay fresh and protected on every journey.",
    details: ["Material: Genuine Leather", "Capacity: 3 Cigars", "Cedar-Lined Interior", "Crush-Proof Construction", "Magnetic Closure"],
  },
  {
    id: 8, name: "Vintage Compass Set", category: "Collectibles", type: "Vintage",
    price: 149.00, image: catCollectibles,
    rating: 4.7, reviews: 19, sold: 56, inStock: true,
    description: "An exquisite vintage-style brass compass set presented in a hand-finished wooden box. A perfect gift for the explorer at heart, combining functional beauty with timeless craftsmanship.",
    details: ["Material: Solid Brass", "Box: Hand-Finished Wood", "Diameter: 7.5cm", "Includes Certificate of Authenticity"],
  },
  {
    id: 9, name: "Romeo y Julieta Churchill", category: "Cigars", type: "Cuban",
    price: 54.95, image: catCigars,
    rating: 4.7, reviews: 178, sold: 430, inStock: true,
    description: "A timeless classic, the Romeo y Julieta Churchill offers a smooth, elegant smoke with notes of cedar, cream, and a subtle sweetness. Named after Sir Winston Churchill himself.",
    details: ["Origin: Cuba", "Wrapper: Cuban", "Length: 7\"", "Ring Gauge: 47", "Strength: Medium", "Smoking Time: 60-90 mins"],
  },
  {
    id: 10, name: "Arturo Fuente Opus X", category: "Cigars", type: "Dominican",
    price: 74.50, image: catCigars, badge: "Limited",
    rating: 4.9, reviews: 92, sold: 215, inStock: true,
    description: "The legendary Opus X — one of the most sought-after cigars in the world. Grown entirely from Dominican soil, it delivers a powerful yet refined experience with notes of pepper, leather, and dark fruit.",
    details: ["Origin: Dominican Republic", "Wrapper: Dominican Rosado", "Length: 5.6\"", "Ring Gauge: 52", "Strength: Full", "Smoking Time: 50-70 mins"],
  },
  {
    id: 11, name: "Jet Flame Lighter", category: "Accessories", type: "Lighters",
    price: 39.95, image: catAccessories,
    rating: 4.5, reviews: 156, sold: 340, inStock: true,
    description: "A precision triple-jet flame lighter with a built-in cigar punch. Windproof and refillable, it's the perfect companion for any cigar enthusiast on the go.",
    details: ["Flame: Triple Jet", "Fuel: Butane (Refillable)", "Built-In Cigar Punch", "Windproof Design", "Material: Zinc Alloy"],
  },
  {
    id: 12, name: "Hand-Carved Chess Set", category: "Luxury Gifts", type: "Chess Sets",
    price: 349.00, image: catGifts,
    rating: 5.0, reviews: 28, sold: 64, inStock: true,
    description: "An heirloom-quality hand-carved wooden chess set featuring intricate medieval-themed pieces. The folding board doubles as a storage case, making it both beautiful and practical.",
    details: ["Material: Sheesham & Boxwood", "Board Size: 18\" x 18\"", "King Height: 4\"", "Hand-Carved Pieces", "Folding Storage Board"],
  },
  {
    id: 13, name: "Padron 1964 Anniversary", category: "Cigars", type: "Nicaraguan",
    price: 42.95, image: catCigars,
    rating: 4.8, reviews: 145, sold: 380, inStock: true,
    description: "Aged for four years, the Padron 1964 Anniversary is a benchmark Nicaraguan cigar. Rich, complex, and beautifully balanced with notes of cocoa, espresso, and toasted nuts.",
    details: ["Origin: Nicaragua", "Wrapper: Nicaraguan", "Length: 5\"", "Ring Gauge: 50", "Strength: Medium-Full", "Smoking Time: 45-60 mins"],
  },
  {
    id: 14, name: "Antique Bronze Globe", category: "Collectibles", type: "Vintage",
    price: 189.00, image: catCollectibles,
    rating: 4.8, reviews: 31, sold: 73, inStock: true,
    description: "A beautifully detailed antique-style bronze globe on a wooden stand. This decorative masterpiece adds a touch of old-world sophistication to any study or office.",
    details: ["Material: Bronze-Finished Metal", "Stand: Solid Wood", "Height: 35cm", "Rotating Globe", "Hand-Painted Details"],
  },
  {
    id: 15, name: "Davidoff Grand Cru No. 2", category: "Cigars", type: "Dominican",
    price: 38.95, image: catCigars,
    rating: 4.6, reviews: 88, sold: 195, inStock: true,
    description: "Refined and elegant, the Davidoff Grand Cru No. 2 is a light-to-medium cigar with exceptional smoothness. Notes of white pepper, cream, and toasted almond create a sophisticated profile.",
    details: ["Origin: Dominican Republic", "Wrapper: Ecuadorian Connecticut", "Length: 5.6\"", "Ring Gauge: 43", "Strength: Light-Medium", "Smoking Time: 35-50 mins"],
  },
  {
    id: 16, name: "Cedar Cigar Ashtray", category: "Accessories", type: "Ashtrays",
    price: 59.00, image: catAccessories,
    rating: 4.4, reviews: 62, sold: 145, inStock: true,
    description: "A solid cedar wood cigar ashtray with four wide grooves, designed for the perfect resting position. The natural cedar enhances the aroma of your smoking experience.",
    details: ["Material: Solid Cedar Wood", "Grooves: 4 Wide-Set", "Dimensions: 20cm x 20cm", "Natural Cedar Finish", "Felt Bottom Pads"],
  },
];

export const categories = ["All", "Cigars", "Accessories", "Luxury Gifts", "Collectibles"];
export const types: Record<string, string[]> = {
  "All": [],
  "Cigars": ["Cuban", "Dominican", "Nicaraguan"],
  "Accessories": ["Humidors", "Cutters", "Lighters", "Ashtrays"],
  "Luxury Gifts": ["Whiskey Sets", "Leather Goods", "Chess Sets"],
  "Collectibles": ["Statues", "Vintage"],
};
export const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Best Selling", value: "best-selling" },
  { label: "Newest", value: "newest" },
  { label: "Rating", value: "rating" },
];
