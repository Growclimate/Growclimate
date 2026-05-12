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
    image: 'D:\\汪珍妮-工作资料\\1.产品图片\\9.主图LOGO\\主图\\RYCM-50C.jpg',
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
    image: 'D:\\汪珍妮-工作资料\\1.产品图片\\9.主图LOGO\\主图\\RYCM-90C.jpg',
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
    image: 'D:\\汪珍妮-工作资料\\1.产品图片\\4.商用除湿机Industrial dehumidifier\\1.自产R290&R410\\自产138L R410\\138 1.png',
    scenes: ['Large Greenhouse', 'Warehouse Grow', 'Vertical Farm', 'Battery Storage Room'],
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
    image: 'D:\\汪珍妮-工作资料\\1.产品图片\\6.转轮除湿机\\1 新款100 200\\RY-100.jpg',
    scenes: ['Pharmaceutical Cold Storage', 'Seed Drying Room', 'Battery Manufacturing'],
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
    image: 'D:\\汪珍妮-工作资料\\1.产品图片\\6.转轮除湿机\\1 新款100 200\\RY-200.jpg',
    scenes: ['Seed Storage', 'Industrial Drying', 'Lithium Battery Facility'],
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
    image: 'D:\\汪珍妮-工作资料\\1.产品图片\\2.超声波加湿机Ultrasonic Humidifier\\1.YAKE 新款自制加湿机\\YAKE 3L humidifier .jpg',
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
    image: 'D:\\汪珍妮-工作资料\\1.产品图片\\2.超声波加湿机Ultrasonic Humidifier\\1.YAKE 新款自制加湿机\\1.jpg',
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
    image: 'D:\\汪珍妮-工作资料\\1.产品图片\\2.超声波加湿机Ultrasonic Humidifier\\1.YAKE 新款自制加湿机\\微信图片_20201215175135.jpg',
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
    title: 'Nanjing Hengyu Seed Storage',
    location: 'Nanjing, China',
    equipment: 'RY-600M Desiccant Dehumidifier',
    challenge: 'Seed cold storage required RH below 35% to prevent germination and mold growth.',
    solution: 'Installed 4 units of RY-600M in cascade configuration, maintaining 28-32% RH year-round.',
    result: 'Seed viability increased by 23%, zero mold incidents in 2 years.',
    image: 'D:\\汪珍妮-工作资料\\1.产品图片\\案例图片\\转轮-南京恒裕仪器设备制造有限公司-种子冷库\\IMAG0767.jpg',
    industry: 'Seed Storage'
  },
  {
    id: 'case-2',
    title: 'Jiangxi Changhe Battery Facility',
    location: 'Jiangxi, China',
    equipment: 'RY-600M Industrial Dehumidifier',
    challenge: 'Lithium battery production requires ultra-dry environments below 40% RH in assembly areas.',
    solution: 'Custom RY-600M with stainless steel housing and Modbus integration for BMS monitoring.',
    result: 'Production yield improved 18%, full BMS integration achieved.',
    image: 'D:\\汪珍妮-工作资料\\1.产品图片\\案例图片\\转轮RY-600M-江西长河新电池有限公司-锂电池车间\\IMAG0222.jpg',
    industry: 'Battery Manufacturing'
  },
  {
    id: 'case-3',
    title: 'Guangzhou Airport Terminal',
    location: 'Guangzhou, China',
    equipment: 'RY-600 × 2 Units',
    challenge: 'Underground tunnel sections faced severe condensation issues affecting infrastructure.',
    solution: 'Ducted RY-600 units with custom condensation collection and automated drainage.',
    result: 'RH consistently maintained below 50%, condensation eliminated.',
    image: 'D:\\汪珍妮-工作资料\\1.产品图片\\案例图片\\转轮600-广州飞机场\\600串联1.jpg',
    industry: 'Infrastructure'
  }
]
