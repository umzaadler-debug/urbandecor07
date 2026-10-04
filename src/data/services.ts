import wallpaperImg from '../assets/images/hero_luxury_wallpaper_living_room_1791044802154.jpg';
import custom3dWallpaperImg from '../assets/images/custom_3d_wallpaper_1791049812417.jpg';
import blindsImg from '../assets/images/service_window_blinds_modern_1791044824606.jpg';
import wallPanelsImg from '../assets/images/service_feature_wall_panels_1791044813187.jpg';
import pvcSpcFlooringImg from '../assets/images/pvc_spc_flooring_1791049136515.jpg';
import artificialGrassImg from '../assets/images/artificial_grass_1791050665180.jpg';
import furnishingImg from '../assets/images/soft_furnishings_1791050677677.jpg';
import glassFilmImg from '../assets/images/glass_film_1791050689586.jpg';
import installationImg from '../assets/images/installation_1791050701274.jpg';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  description: string;
  features: string[];
  image: string;
  category: 'wall' | 'window' | 'floor' | 'furnishing' | 'craft';
}

export const servicesData: ServiceItem[] = [
  {
    id: 'wallpapers',
    number: '01',
    title: 'Wallpapers',
    shortDesc: 'Premium wallpapers designed to transform ordinary walls into stunning interiors.',
    description: 'Immerse your space in timeless tactile luxury. From hand-crafted textured vinyls and bespoke non-woven murals to metallic foil grasscloth and organic linen wallcoverings, our curated international collections bring depth, warmth, and enduring character to living rooms, bedrooms, and commercial suites.',
    features: ['Textured Linen & Silk Wallpapers', 'Seamless Custom Murals', 'Acoustic & Moisture-Resistant', 'Washable High-Traffic Vinyls'],
    image: wallpaperImg,
    category: 'wall',
  },
  {
    id: 'customised-3d-wallpaper',
    number: '02',
    title: 'Customised 3D Wallpaper',
    shortDesc: 'Bespoke optical 3D murals and customized dimensional wallpapers engineered to your exact wall dimensions.',
    description: 'Transform accent walls into breathtaking spatial focal points. We custom design, print, and install ultra-high-definition 3D wallpapers with visual depth, tactile embossing, architectural geometries, and lifelike textures tailored to your room scale and lighting.',
    features: ['Custom Sized to Exact Wall Dimensions', 'High-Definition Optical 3D Depth', 'Tactile Embossed & Seamless Finish', 'Eco-Friendly, Odorless UV Inks'],
    image: custom3dWallpaperImg,
    category: 'wall',
  },
  {
    id: 'window-blinds',
    number: '03',
    title: 'Window Blinds',
    shortDesc: 'Stylish and functional window blinds tailored to your space.',
    description: 'Master natural illumination with architectural precision. Our made-to-measure blinds combine contemporary aesthetics with intelligent thermal insulation and sun control. Available in motorized smart options and manual luxury finishes.',
    features: ['Motorized Smart Roller Blinds', 'Venetian & Wooden Louvers', 'Blackout & Zebra Blinds', 'Honeycomb Thermal Cell Shades'],
    image: blindsImg,
    category: 'window',
  },
  {
    id: 'wall-panels',
    number: '04',
    title: 'Wall Panels',
    shortDesc: 'Modern decorative wall panels for sophisticated residential and commercial interiors.',
    description: 'Transform flat walls into three-dimensional architectural statements. Featuring fluted timber slats, upholstered acoustic leather panels, geometric 3D relief surfaces, and waterproof stone-composite elements engineered for durability.',
    features: ['Acoustic Fluted Wood Slats', '3D Geometric Embossed Panels', 'Luxury Upholstered Leather', 'Waterproof Stone Polymer (SPC)'],
    image: wallPanelsImg,
    category: 'wall',
  },
  {
    id: 'pvc-spc-flooring',
    number: '05',
    title: 'PVC, SPC Flooring',
    shortDesc: '100% waterproof luxury PVC and SPC flooring with authentic wood & stone textures.',
    description: 'Elevate your floors with advanced Stone Polymer Composite (SPC) and luxury PVC planks. Engineered for heavy residential and commercial foot-traffic, our 100% waterproof click-lock flooring replicates authentic European oak timber and Italian marble without the maintenance.',
    features: ['100% Waterproof SPC Rigid Core', 'Luxury PVC Vinyl Wood Planks', 'Scratch, Stain & Termite Proof', 'Acoustic Sound-Dampening Underlay'],
    image: pvcSpcFlooringImg,
    category: 'floor',
  },
  {
    id: 'artificial-grass',
    number: '06',
    title: 'Artificial Grass',
    shortDesc: 'Low-maintenance greenery for beautiful indoor and outdoor spaces.',
    description: 'Bring evergreen natural beauty into your lifestyle with zero irrigation or maintenance. UV-stabilized, pet-safe, and incredibly lush turf designed for residential balconies, terrace gardens, putting greens, and indoor vertical accents.',
    features: ['Multi-Tone Realistic Thatch', 'UV-Resistant & Non-Fading', 'All-Weather Drainage Backing', 'Pet & Child Friendly Density'],
    image: artificialGrassImg,
    category: 'floor',
  },
  {
    id: 'furnishing',
    number: '07',
    title: 'Furnishing',
    shortDesc: 'Complete furnishing solutions that bring your interior vision together.',
    description: 'Harmonize your walls and windows with bespoke soft furnishings. Tailored luxury drapery, textured sheer curtains, custom upholstery, and coordinating cushions crafted with imported European textiles to complete your interior sanctuary.',
    features: ['Custom Tailored Drapery & Sheers', 'Bespoke Upholstery Restoration', 'Designer Hardware & Pelmets', 'Color-Coordinated Textiles'],
    image: furnishingImg,
    category: 'furnishing',
  },
  {
    id: 'glass-film',
    number: '08',
    title: 'Sun Control & Glass Film',
    shortDesc: 'Advanced sun control, solar heat rejection, and architectural privacy glass films.',
    description: 'Elevate architectural glass with high-performance solar and decorative films. We specialize in premium sun control heat-rejection films, frosted privacy partitions, reflective exterior solar tints, gradient optics, and custom laser patterns for modern corporate offices and residences.',
    features: ['Frosted Privacy & Decorative Film', 'Sun Control Glass Film', 'UV & Solar Heat Rejection (85%+)', 'Shatter & Safety Reinforcement'],
    image: glassFilmImg,
    category: 'window',
  },
  {
    id: 'professional-installation',
    number: '09',
    title: 'Professional Installation',
    shortDesc: 'Expert installation with attention to detail and a flawless finish.',
    description: 'Mastery in execution makes the difference. Our in-house certified master applicators possess over 15 years of precision installation experience, guaranteeing pattern matching, bubble-free adhesion, clean trim lines, and spotless handover.',
    features: ['Certified Master Applicators', 'Laser-Level Pattern Alignment', 'Substrate Preparation & Priming', 'Comprehensive Workmanship Guarantee'],
    image: installationImg,
    category: 'craft',
  },
];
