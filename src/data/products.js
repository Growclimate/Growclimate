// Product data for GrowClimate website
// Image paths reference the local product image folder

export const productCategories = [
  {
    id: 'dehumidifiers',
    name: 'Dehumidifiers',
    shortName: 'Dehumidifiers',
    description: 'From compact residential units to heavy-duty industrial systems, our dehumidifiers maintain precise humidity for every growing environment.',
    coverImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    icon: 'humidity',
    applications: ['Greenhouse', 'Mushroom Farm', 'Indoor Grow Room', 'Seed Storage']
  },
  {
    id: 'humidifiers',
    name: 'Humidifiers',
    shortName: 'Humidifiers',
    description: 'Ultrasonic and evaporative humidifiers provide consistent moisture control for optimal plant growth and climate stability.',
    coverImage: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=800&q=80',
    icon: 'sprout',
    applications: ['Hydroponics', 'Greenhouse', 'Tissue Culture Lab', 'Herb Cultivation']
  },
  {
    id: 'ventilation',
    name: 'Fans & Ventilation',
    shortName: 'Fans & Ventilation',
    description: 'Intelligent air circulation systems ensuring uniform temperature, CO₂ distribution, and preventing heat stratification.',
    coverImage: 'https://images.unsplash.com/photo-1500674425229-f692875b0ab9?w=800&q=80',
    icon: 'wind',
    applications: ['Vertical Farm', 'Grow Tent', 'Container Farm', 'Climate Chamber']
  }
]

export const dehumidifierProducts = [
  {
    id: 'gro-60l',
    model: 'GRO-60L',
    series: 'Commercial Dehumidifier',
    tagline: 'Compact commercial dehumidifier for grow rooms and horticulture facilities.',
    capacity: '60L/day',
    power: '750W',
    refrigerant: 'R290',
    dimensions: '500×400×650mm',
    weight: '38kg',
    airflow: '400m³/h',
    noise: '≤53dB',
    image: '/images/products/RYCM-60C.jpg',
    scenes: ['Indoor Grow Room', 'Greenhouse', 'Propagation Chamber', 'Mushroom Farm'],
    features: ['R290 Eco Refrigerant', 'Auto Drain Pump', 'LED Display', 'CE Certified']
  },
  {
    id: 'rycm-50c',
    model: 'RYCM-50C',
    series: 'Commercial Dehumidifier',
    tagline: 'Compact R290 dehumidifier ideal for small grow rooms and propagation chambers.',
    capacity: '50L/day',
    power: '680W',
    refrigerant: 'R290',
    dimensions: '480×380×620mm',
    weight: '32kg',
    airflow: '350m³/h',
    noise: '≤52dB',
    image: '/images/products/RYCM-50C.jpg',
    scenes: ['Indoor Grow Room', 'Small Greenhouse', 'Propagation Chamber'],
    features: ['R290 Eco Refrigerant', 'Micro-channel Condenser', 'Auto Drain Pump', 'CE/UL Certified']
  },
  {
    id: 'rycm-90c',
    model: 'RYCM-90C',
    series: 'Commercial Dehumidifier',
    tagline: 'High-capacity commercial unit for mid-size greenhouses and cultivation facilities.',
    capacity: '90L/day',
    power: '1050W',
    refrigerant: 'R290',
    dimensions: '560×450×780mm',
    weight: '48kg',
    airflow: '500m³/h',
    noise: '≤55dB',
    image: '/images/products/RYCM-90C.jpg',
    scenes: ['Commercial Greenhouse', 'Mushroom Farm', 'Indoor Farm'],
    features: ['R410A Option Available', 'Digital Humidistat', 'Auto Restart', 'LED Display']
  },
  {
    id: 'rycm-138c',
    model: 'RYCM-138C',
    series: 'Heavy-Duty Dehumidifier',
    tagline: 'Industrial-grade dehumidifier engineered for large-scale growing operations.',
    capacity: '138L/day',
    power: '1500W',
    refrigerant: 'R410A',
    dimensions: '680×520×920mm',
    weight: '72kg',
    airflow: '750m³/h',
    noise: '≤58dB',
    image: '/images/products/RYCM-138C.jpg',
    scenes: ['Large Greenhouse', 'Warehouse Grow', 'Vertical Farm', 'Fruit Drying Room'],
    features: ['Industrial Scroll Compressor', 'Remote Humidistat', 'Modbus/RS485', 'CE/UL/ETL']
  },
  {
    id: 'ry-100',
    model: 'RY-100',
    series: 'Desiccant Rotor Dehumidifier',
    tagline: 'Sorptive rotor technology for ultra-low humidity environments below 30% RH.',
    capacity: '5kg/h',
    power: '3.5kW',
    refrigerant: 'N/A (Desiccant)',
    dimensions: '750×600×1200mm',
    weight: '95kg',
    airflow: '400m³/h',
    noise: '≤62dB',
    image: '/images/products/RY-100.jpg',
    scenes: ['Seed Storage', 'Museum Archives', 'Pharmaceutical Cold Storage'],
    features: ['Silica Gel Rotor', 'Electric Heater', 'Process Air & Regeneration Air', 'PLC Control']
  },
  {
    id: 'ry-200',
    model: 'RY-200',
    series: 'Desiccant Rotor Dehumidifier',
    tagline: 'High-capacity desiccant dehumidifier for large-volume low-humidity applications.',
    capacity: '10kg/h',
    power: '6.5kW',
    refrigerant: 'N/A (Desiccant)',
    dimensions: '900×700×1400mm',
    weight: '145kg',
    airflow: '800m³/h',
    noise: '≤65dB',
    image: '/images/products/RY-200.jpg',
    scenes: ['Seed Storage', 'Industrial Drying', 'Museum Archives'],
    features: ['High-Capacity Rotor', 'Industrial Fan', 'Auto Desiccant Regeneration', 'Touch Screen PLC']
  }
]

export const humidifierProducts = [
  {
    id: 'uh-3l',
    model: 'UH-3L',
    series: 'Ultrasonic Humidifier',
    tagline: 'Compact ultrasonic misting unit for small grow tents and herb gardens.',
    capacity: '3L/h',
    power: '180W',
    mistType: 'Ultrasonic',
    dimensions: '280×200×320mm',
    weight: '3.5kg',
    coverage: '20-40m²',
    noise: '≤35dB',
    image: '/images/products/UH-3L.jpg',
    scenes: ['Grow Tent', 'Hydroponics', 'Herb Garden', 'Small Greenhouse'],
    features: ['Ultrasonic Vibration', 'Adjustable Mist Output', 'Auto Humidity Control', 'Water Shortage Protection']
  },
  {
    id: 'uh-6l',
    model: 'UH-6L',
    series: 'Ultrasonic Humidifier',
    tagline: 'Mid-range ultrasonic unit with dual mist heads for larger growing areas.',
    capacity: '6L/h',
    power: '360W',
    mistType: 'Ultrasonic',
    dimensions: '380×280×400mm',
    weight: '6kg',
    coverage: '50-80m²',
    noise: '≤38dB',
    image: '/images/products/UH-6L.jpg',
    scenes: ['Medium Greenhouse', 'Hydroponic System', 'Tissue Culture Lab'],
    features: ['Dual Mist Heads', 'RS485 Compatible', 'Hygrostat Controlled', 'Stainless Steel Body']
  },
  {
    id: 'eh-12l',
    model: 'EH-12L',
    series: 'Evaporative Humidifier',
    tagline: 'High-volume evaporative humidifier for large-scale greenhouse operations.',
    capacity: '12L/h',
    power: '550W',
    mistType: 'Evaporative',
    dimensions: '600×400×800mm',
    weight: '18kg',
    coverage: '150-300m²',
    noise: '≤45dB',
    image: '/images/products/EH-12L.jpg',
    scenes: ['Large Greenhouse', 'Nursery', 'Indoor Farm'],
    features: ['Forced Draft Fan', 'Auto Water Inlet', 'Media Pad Filter', 'Multi-Unit Cascade']
  }
]

export const ventilationProducts = [
  {
    id: 'ac-3hp',
    model: 'AC-3HP',
    series: 'Air Conditioner / Cooler',
    tagline: '3HP industrial air conditioner for climate-controlled grow rooms.',
    cooling: '8.5kW',
    power: '3.2kW',
    refrigerant: 'R410A',
    dimensions: '900×500×1100mm',
    weight: '85kg',
    airflow: '1200m³/h',
    noise: '≤55dB',
    image: 'D:\\汪珍妮-工作资料\\1.产品资料\\5.空调冷气机\\placeholder.jpg',
    scenes: ['Climate-Controlled Grow Room', 'Container Farm', 'Vertical Farm'],
    features: ['Precise Temp Control ±0.5°C', 'R410A Eco', 'CE Certified', 'Remote Control']
  }
]

export const applicationCases = [
  {
    id: 'case-1',
    title: 'Dutch Greenhouse Tomato Complex',
    location: 'Westland, Netherlands',
    equipment: 'GRO-385L × 4, GROW-12D × 6',
    challenge: 'A 2-hectare glasshouse producing vine tomatoes year-round needed precise humidity control across 8 climate zones. Night RH spikes above 90% were causing Botrytis outbreaks, reducing Grade-A yield by 15%.',
    solution: 'Deployed 4 GRO-385L floor-standing dehumidifiers with 6 GROW-12D humidifiers in a zoned cascade configuration. Full Modbus integration with the existing Priva climate computer for automated day/night RH setpoint management.',
    result: 'Botrytis incidence reduced to below 2%, Grade-A yield increased 28%. Energy consumption for dehumidification dropped 22% vs previous compressor units thanks to variable-speed control.',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80',
    industry: 'Greenhouse Vegetables'
  },
  {
    id: 'case-2',
    title: 'California Licensed Cannabis Facility',
    location: 'Monterey County, California, USA',
    equipment: 'GD-240L × 8, GRO-720L × 2',
    challenge: 'A 4,500m² indoor cannabis cultivation facility required strict humidity control across flowering rooms (45-50% RH), vegetative rooms (60-65% RH), and drying rooms (50-55% RH). Existing compressor-based units couldn\'t maintain setpoints during peak summer heat.',
    solution: 'Installed 8 GD-240L ceiling-mounted dehumidifiers across flowering and veg zones, and 2 GRO-720L floor-standing units for the post-harvest drying facility. All units integrated into the facility\'s TrolMaster Hydro-X Pro control system via Modbus RS485.',
    result: 'RH maintained within ±3% of target across all zones year-round. Drying cycle time reduced by 1.5 days. Zero crop loss due to humidity-related mold in 18 months of operation.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    industry: 'Cannabis Cultivation'
  },
  {
    id: 'case-3',
    title: 'Nordic Seed Vault Preservation',
    location: 'Stockholm, Sweden',
    equipment: 'GROW-1100M × 3, GROW-580 × 4',
    challenge: 'A national germplasm bank storing 150,000 seed accessions required ultra-low humidity (20-25% RH) at 4°C in their long-term storage vaults. Standard compressor dehumidifiers failed at low temperatures, causing frost buildup and unreliable humidity control.',
    solution: 'Implemented 3 GROW-1100M desiccant dehumidifiers for the main vault, with 4 GROW-580 units for the processing and packaging areas. The desiccant rotor technology operates effectively at sub-ambient temperatures where compressor units cannot function.',
    result: 'RH maintained at 22% ±2% in main vaults. Zero frost-related equipment failures in 3 years. Seed viability testing confirmed germination rates unchanged after 24 months — meeting ISTA (International Seed Testing Association) standards.',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80',
    industry: 'Seed Banking'
  }
]
