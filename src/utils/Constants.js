import HomeIcon from '~/assets/components/HomeIcon';
import Customer, {
  Battary,
  Brake,
  DownArrow,
  Exhaust,
  Fan,
  Setting,
  Transmission,
  Truck,
  Wheel,
  WheelBalance,
  WheelManagement,
} from '~/assets/components/Icons';
import {Images} from '~/assets/sourceFile';

export let filter_buttons = [
  {id: 1, label: 'Today'},
  {id: 2, label: 'Weekly'},
  {id: 3, label: 'Monthly'},
];
export let tracking_data = [
  {
    persent: '+4.56%',
    total: '90,0000',
    type: 'In Process',
    icon: 'Revenue',
  },
  {
    persent: '+4.56%',
    total: '70',
    type: 'In Review',
    icon: 'ClosedTask',
  },
  {
    persent: '+4.56%',
    total: '10,0000',
    type: 'Approved',
    icon: 'OpenTaks',
  },
  {
    persent: '+4.56%',
    total: '10,0000',
    type: 'Rejected',
    icon: 'OpenTaks',
  },
  {
    persent: '+4.56%',
    total: '50,0000',
    type: 'Completed',
    icon: 'ClosedTask',
  },
];
export let service_buttons = [
  {
    id: 1,
    label: 'Create a Repair Order',
    route: 'ChooseServices',
    leftIcon: Images.UserwithCap,
    righIcon: Images.Left,
  },
  {
    id: 2,
    label: 'Job Center',
    route: 'JobCenter',
    leftIcon: Images.UserwithCap,
    righIcon: Images.Left,
  },
  {
    id: 3,
    label: 'Parts Counter Sale',
    route: 'Products',
    leftIcon: Images.UserwithCap,
    righIcon: Images.Left,
  },
  
];
export let bottom_Tabs = [
  {id: 1, label: 'Home', route: 'Home', isplus: false, key: 1},
  {id: 2, label: 'Inventory', route: 'Inventory', isplus: false, key: 2},
  {id: 3, label: 'CraeteService', route: 'CraeteService', isplus: true, key: 3},
  {id: 4, label: 'Analytics', route: 'Analytics', isplus: false, key: 4},
  {id: 5, label: 'More', route: 'More', isplus: false, key: 5},
];

export let Choose_Service_Buttons = [
  {id: 1, label: 'Tune-Ups', icon: Images?.Tune_Ups},
  {id: 2, label: 'Lube/Oil/Filter Change', icon: Images?.Oil},
  {id: 3, label: 'Transmission', icon: Images?.ChainWheel},
];

export let JobsData = [
  {id: 1, label: 'Tune-Ups', desc: 'confusing behavior during navigation',vihicle:"UTL-54657",customer:"Mechal jhon"},
  {
    id: 2,
    label: 'Lube/Oil/Filter Change',
    desc: 'Inspecting vehicle engine and mechanical/electrical components to diagnose issues accurately',
    vihicle:"UTL-54657",customer:"Mechal jhon"
  },
  {
    id: 3,
    label: 'Transmission',
    desc: 'Inspecting vehicle computer and electronic systems to repair, maintain and upgrade',
    vihicle:"UTL-54657",customer:"Mechal jhon"
  },
  {
    id: 4,
    label: 'Inspecting vehicle',
    desc: 'Inspecting vehicle computer and electronic systems to repair, maintain and upgrade',
    vihicle:"UTL-54657",customer:"Mechal jhon"
  },
  {
    id: 5,
    label: 'Repair dysfunctional',
    desc: 'confusing behavior during navigation',
    vihicle:"UTL-54657",customer:"Mechal jhon"
  },
  {id: 6, label: 'Transmission', desc: 'confusing behavior during navigation',vihicle:"UTL-54657",customer:"Mechal jhon"},
  {id: 6, label: 'Transmission', desc: 'confusing behavior during navigation',vihicle:"UTL-54657",customer:"Mechal jhon"},
  {id: 6, label: 'Transmission', desc: 'confusing behavior during navigation',vihicle:"UTL-54657",customer:"Mechal jhon"},
  {id: 6, label: 'Transmission', desc: 'confusing behavior during navigation',vihicle:"UTL-54657",customer:"Mechal jhon"},

];
export let popular_Services_Data = [
  {
    id: 1,
    label: `Check ${'\n'}Engine Light`,
    type: 'Check Engine Light',
    isSelected: false,
    price:"49"
  },
  {
    id: 2,
    label: `Normal${'\n'}Service`,
    type: 'Normal Service',
    isSelected: false,
    price:"79"

  },
  {
    id: 3,
    label: `Wheel ${'\n'}Balancing`,
    type: 'Wheel Balancing',
    isSelected: false,
    price:"229"

  },
  {
    id: 4,
    label: `Battery${'\n'}Services`,
    type: 'Battery Services',
    isSelected: false,
    price:"49"

  },
  {
    id: 5,
    label: `A/C${'\n'}Daignosis`,
    type: 'A/C Daignosis',
    isSelected: false,
    price:"9"

  },
  {
    id: 6,
    label: `Wheel${'\n'}Alignment`,
    type: 'Wheel Alignment',
    isSelected: false,
    price:"123"
  },
  {id: 4, label: 'Transmission', type: 'Transmission', isSelected: false,  price:"123"},
  {id: 5, label: 'Exhaust', type: 'Exhaust', isSelected: false ,  price:"123"},
  {id: 6, label: 'Brake Pads', type: 'Brake Pads', isSelected: false,  price:"123"},
];
export let Customer_Data = [
  {
    id: 1,
    name: `waheed Aslam`,
    service: 'Check Engine Light',
    status: 'Online',
    img: 'https://th.bing.com/th/id/R.52f554f5142d7265944f220007ba4f18?rik=ml15N7nufCLKSA&pid=ImgRaw&r=0',
  },
  {
    id: 2,
    name: `Ali `,
    service: 'Normal Service',
    status: 'Online',
    img: 'https://th.bing.com/th/id/OIP.uXZUXAGiGlZPEbkmjMI5wAHaFW?pid=ImgDet&rs=1',
  },
  {
    id: 3,
    name: `Faseh Ahamad`,
    service: 'Wheel Balancing',
    status: 'Online',
    img: 'https://th.bing.com/th/id/R.7503b15aec88952fbc09d3857bc8120b?rik=lyHxsy5eJw13qg&pid=ImgRaw&r=0',
  },
  {
    id: 4,
    name: `Salaman`,
    service: 'Battery Services',
    status: 'Online',
    img: 'https://th.bing.com/th/id/R.3e6804ac9971b19f81b88b211500a58a?rik=WQ4NQsJuLuC%2b0Q&pid=ImgRaw&r=0',
  },
  {
    id: 4,
    name: `Irfan`,
    service: 'A/C Daignosis',
    status: 'Online',
    img: 'https://th.bing.com/th/id/OIP.IKFzsO1tqkswdAbz-5ZF8wHaE7?pid=ImgDet&rs=1',
  },
  {
    id: 5,
    name: `John Jelly`,
    service: 'Wheel Alignment',
    status: 'Online',
    img: 'https://th.bing.com/th/id/R.439d704ee5d6bf69892dc65e4a6e0d90?rik=K17%2bYykY%2fA071Q&riu=http%3a%2f%2fimages.esellerpro.com%2f2681%2fI%2f139%2f544%2fEM-3203.jpg&ehk=j7Dt9h2nTHkz9Zz6iT5c7nTc8aqNPa6uUFRTbqzDFzs%3d&risl=&pid=ImgRaw&r=0',
  },
  {
    id: 6,
    name: `wandu jon`,
    service: 'Transmission',
    status: 'Online',
    img: 'https://th.bing.com/th/id/R.f7a72010d6854b4ea2ddb47d875f19b3?rik=ljtaX9qkVFtOeA&pid=ImgRaw&r=0',
  },
  {
    id: 7,
    name: `Awais As`,
    service: 'Exhaust',
    status: 'Online',
    img: 'https://thumbs.dreamstime.com/z/auto-mechanics-car-mechanic-worker-professional-worker-car-service-man-32080798.jpg',
  },
];
export let Vehcle_Data = [
  {
    id: 1,
    name: `Vehcle1`,
    service: 'Check Engine Light',
    status: 'Active',
    img: 'https://static.vecteezy.com/system/resources/previews/000/623/004/original/auto-car-logo-template-vector-icon.jpg',
  },
  {
    id: 2,
    name: `Vehcle2 `,
    service: 'Normal Service',
    status: 'Active',
    img: 'https://th.bing.com/th/id/R.d01a125f17ca860e8a8c8e7f8ba89e2e?rik=UCa5E0Yc0eBnmw&pid=ImgRaw&r=0',
  },
  {
    id: 3,
    name: `Vehcle3`,
    service: 'Wheel Balancing',
    status: 'Active',
    img: 'https://th.bing.com/th/id/OIP.KMosWYXn4e6Q9UTEKWvbFwHaEK?pid=ImgDet&rs=1',
  },
  {
    id: 4,
    name: `Vehcle4`,
    service: 'Battery Services',
    status: 'Active',
    img: 'https://th.bing.com/th/id/OIP.fFkQSuHajk7y2fi93i5V1QHaEK?pid=ImgDet&rs=1',
  },
];
export const sideBar_Data = [
  {
    id: 1,
    label: 'Home',
    img: "https://th.bing.com/th/id/R.79444de8511a6dadffa4082e06386fb2?rik=6vWZKjltZsWhYw&pid=ImgRaw&r=0",
    RightIcon: null,
    route: 'Home',
    
  },
  {
    id: 5,
    label: 'Gallary',
    img: "https://th.bing.com/th/id/R.9d16c886972180ffe7477ec226d03dfc?rik=8fzi0KTWoPUvEg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_562621.png&ehk=7%2bGLHs54LMcKmEHE1jTqnPbp7oJSLGzqlH%2fTppaE7ZY%3d&risl=&pid=ImgRaw&r=0",
    route: 'JobCenter',
    
  
  },
  {
    id: 5,
    label: 'SlideShow',
    img:"https://th.bing.com/th/id/R.f9e7e3f8a7e8e83309bb846d653f6ba9?rik=bOGQS92czcxP%2bQ&pid=ImgRaw&r=0" ,
    route: 'Services',
    RightIcon: null,
  },
  {
    id: 6,
    label: 'Tools',
    img: "https://th.bing.com/th/id/R.225c4c2e82da136734c501335a5bc08e?rik=5k7BzgB%2bpEYfqw&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2015%2f07%2ftools-icon_100211.png&ehk=C7PjwLlnUS%2bTR4na37cPPkcUUvmz9NYa6BEUvKp%2b73g%3d&risl=&pid=ImgRaw&r=0",
    route: 'Services',
    RightIcon: DownArrow,
    child: [
      {id: 1, label: 'Services', route: 'ServiceListing',type:"ServiceListing"},
      {id: 2, label: 'Service Category', route: 'ServiceListing',type:"Service Category"},
      {id: 3, label: 'Service Type', route: 'ServiceListing',type:"Service Type"},
    ],
  },
  {
    id: 2,
    label: 'Share',
    img: "https://th.bing.com/th/id/R.787c4c7659fd99c02b605ae64452820f?rik=LEs7hljZqV0TAA&pid=ImgRaw&r=0",
    route: 'CustomerList',
    RightIcon: null,
    type:"ok"
  },

  {
    id: 2,
    label: 'Share',
    img: "https://th.bing.com/th/id/R.787c4c7659fd99c02b605ae64452820f?rik=LEs7hljZqV0TAA&pid=ImgRaw&r=0",
    route: 'CustomerList',
    RightIcon: null,
  },
  {
    id: 4,
    label: 'Send',
    img: 'https://th.bing.com/th/id/R.8fedacefda882f7937cb7853ffb8aef1?rik=s68dMKMzwGyWxw&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_173361.png&ehk=ZVDM%2f9Rj4JjzM22N3v3HwrH%2fCLiLalPO4RVmY3HlypQ%3d&risl=&pid=ImgRaw&r=0',
    route: 'VehicleList',
    RightIcon: null,
  },
 
];
export const servicesTypes = [
  'Check Engine Light',
  'Normal Service',
  'Wheel Balancing',
  'Wheel Alignment',
  'Battery Services',
  'Transmission',
  'A/C Daignosis',
];
export const servicesCategory = [
  'Check Engine Light',
  'Normal Service',
  'Wheel Balancing',
  'Wheel Alignment',
  'Battery Services',
  'Transmission',
  'A/C Daignosis',
];
export const CompanyDropDown = [
  {label: 'Company1', value: '1'},
  {label: 'Company2', value: '2'},
  {label: 'Company3', value: '3'},
  {label: 'Company4', value: '4'},
];
export const mechanicdropDown = [
  {label: 'Mechanic1', value: '2'},
  {label: 'Mechanic2', value: '3'},
  {label: 'Mechanic3', value: '4'},
];

export const CustomIcons = [
  {
    id: 1,
    label: 'Select Icon',
    LeftIcon: null,
    RightIcon: null,
    route: 'Home',
  },
  {
    id: 2,
    label: 'Customers',
    LeftIcon: Customer,
    route: 'CustomerList',
    RightIcon: null,
  },
  {
    id: 4,
    label: 'Vehicles',
    LeftIcon: Battary,
    route: 'VehicleList',
    RightIcon: null,
  },
  {
    id: 5,
    label: 'Services',
    LeftIcon: Setting,
    route: 'Services',
    RightIcon: DownArrow,
  },
  {
    id: 6,
    label: 'Mechanic',
    LeftIcon: Truck,
    route: 'Dashboard',
    RightIcon: null,
  },
  {
    id: 7,
    label: 'Job Center',
    LeftIcon: Customer,
    route: 'JobCenter',
    RightIcon: null,
  },
  {
    id: 8,
    label: 'Create A Repair Order',
    LeftIcon:Truck ,
    route: 'Services',
    RightIcon: null,
  },
  
];
export const TimeSlote = [
  {
    id: 1,
    label: '04:04 PM',

  },
  {
    id: 2,
    label: '08:23 AM',
    isDisable:true


  },
  {
    id: 4,
    label: '07:04 AM'
   
  },
  {
    id: 5,
    label: '04:45 AM',
    isDisable:true

  },
  {
    id: 6,
    label: '09:24 PM'

  },
  {
    id: 7,
    label: '04:08 PM',

  },
  {
    id: 8,
    label: '7:09 PM'  
  },
  {
    id: 7,
    label: '04:14 PM',
    isDisable:true


  },
  {
    id: 8,
    label: '7:19 AM'  
  },
  {
    id: 7,
    label: '10:04 PM',

  }
  
];
export let Setting_Button_Data = [
  {
    id: 1,
    label: 'Update Password',
    route: 'JobCenter',
    leftIcon: Images.Ordersicon,
    righIcon: Images.Left,
  },
  {
    id: 2,
    label: 'Update Signature',
    route: 'JobCenter',
    leftIcon: Images.Ordersicon,
    righIcon: Images.Left,
  },
  
  // {
  //   id: 2,
  //   label: 'My Details',
  //   route: 'MyDetails',
  //   leftIcon: Images.MyDetailsicon,
  //   righIcon: Images.Left,
  // },
  {
    id: 3,
    label: 'Payment Methods',
    route: 'Service',
    leftIcon: Images.Paymenticon,
    righIcon: Images.Left,
  },
  {
    id: 4,
    label: 'Notifecation Setting',
    route: 'Noti_Setting',
    leftIcon: Images.Bellicon,
    righIcon: Images.Left,
  },
  {
    id: 5,
    label: 'Help',
    route: 'Service',
    leftIcon: Images.Helpicon,
    righIcon: Images.Left,
  },
  {
    id: 6,
    label: 'About',
    route: 'Service',
    leftIcon: Images.Abouticon,
    righIcon: Images.Left,
  },
  
];
export const dynamicsForm=[
  {type: 'text', label_name: 'Starting Time'},
  {
    type: 'text',
    label_name:
      'yre pressure readings are as first inspected, any adjustments will be noted.',
  },
  {type: 'text', label_name: 'Safety Related Defects'},
  {type: 'radio', label_name: 'Trailer Inspection',option:["Report"," serviceable","we declare that this is ok for repair to  manage inventory","Self-Authorised"]},
  {type: 'checkbox', label_name: 'Check Box To Test',option:["Report"," serviceable","we declare that this is ok for repair to  manage inventory","Self-Authorised"]},
  {type: 'dropdown', label_name: 'Check Dropdown Test',data:[{label:"ok",value:"ok"}]},
  {type: 'file', label_name: 'Check Dropdown Test',data:[{label:"ok",value:"ok"}]},
]
export const productdata=[
  {
    name:"Gear",
    price:"563",
    img:"https://th.bing.com/th/id/R.4bb822caecac26f2c71b63591c873c2a?rik=oJrsOQUYKJHM%2bg&pid=ImgRaw&r=0"
  },
  {
    name:"Gear",
    price:"563",
    img:"https://th.bing.com/th/id/OIP.lMp9WAfoyV45Y5Nxb0PxCQHaGh?pid=ImgDet&rs=1"
  },
  {
    name:"Gear",
    price:"563",
    img:"https://th.bing.com/th/id/R.9c86aa647ef746562ede547ea416b7d4?rik=VHrDScdlKfR25g&pid=ImgRaw&r=0"
  },
  {
    name:"Gear",
    price:"563",
    img:"https://th.bing.com/th/id/OIP.SkIkKqRm2sYGn-o2iPcl1AHaGq?pid=ImgDet&rs=1"
  },
  {
    name:"Gear",
    price:"563",
    img:"https://th.bing.com/th/id/OIP.lMp9WAfoyV45Y5Nxb0PxCQHaGh?pid=ImgDet&rs=1"
  },
  {
    name:"Gear",
    price:"563",
    img:"https://th.bing.com/th/id/OIP.lMp9WAfoyV45Y5Nxb0PxCQHaGh?pid=ImgDet&rs=1"
  }
]