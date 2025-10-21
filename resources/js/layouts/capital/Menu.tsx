import React, {useState, useEffect, createElement} from "react";

import {
   Navbar,
   Collapse,
   Typography,
   IconButton,
   List,
   ListItem,
   Menu,
   MenuHandler,
   MenuList,
   MenuItem
} from "@material-tailwind/react";

import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon
} from "@heroicons/react/24/outline";

import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon
} from "@heroicons/react/24/solid";


const navListMenuItems = [
  {
    title: "Products",
    description: "Find the perfect solution for your needs.",
    icon: SquaresPlusIcon,
  },
  {
    title: "About Us",
    description: "Meet and learn about our dedication",
    icon: UserGroupIcon,
  },
  {
    title: "Blog",
    description: "Find the perfect solution for your needs.",
    icon: Bars4Icon,
  },
  {
    title: "Services",
    description: "Learn how we can help you achieve your goals.",
    icon: SunIcon,
  },
  {
    title: "Support",
    description: "Reach out to us for assistance or inquiries",
    icon: GlobeAmericasIcon,
  },
  {
    title: "Contact",
    description: "Find the perfect solution for your needs.",
    icon: PhoneIcon,
  },
  {
    title: "News",
    description: "Read insightful articles, tips, and expert opinions.",
    icon: NewspaperIcon,
  },
  {
    title: "Products",
    description: "Find the perfect solution for your needs.",
    icon: RectangleGroupIcon,
  },
  {
    title: "Special Offers",
    description: "Explore limited-time deals and bundles",
    icon: TagIcon,
  },
];
 
function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState( false );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState( false );
  const renderItems = navListMenuItems.map(
    ({ icon, title, description }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className="fex items-center justify-center rounder-lg !bg-blue-gray-50 p-2">
            {" "}
            {createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6"
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    )
  );

  return (
    <>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography
            as="div"
            variant="small"
            className="font-medium"
          >
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-meidum text-gray-900"
              selected={ isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Resources
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 trasition-transform lg:block ${ isMenuOpen ? "rotate-180" : "" } `}
              />
              <ChevronDownIcon 
                strokeWidth={2.5}
                className={`block h-3 w-3 trasition-transform lg:hidden ${ isMobileMenuOpen ? "rotate-180" : "" } `}
              />
            </ListItem>
          </Typography>
        </MenuHandler>

        <MenuList className="hidden max-w-screen-xl rounder-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            { renderItems }
          </ul>
        </MenuList>

      </Menu>
    </>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-gray-900">Home</ListItem>
      </Typography>
      <NavListMenu />
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      > 
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-gray-900">
          Contact Us
        </ListItem>
      </Typography>
    </List>
  )
}
export default function Menus() {

  const [openNav, setOpenNav] = useState( false )

  useEffect(() => {
    window.removeEventListener(
      "resize", 
      () => window.innerWidth > 960 && setOpenNav( false ),
    )
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2">
      <div className="flex item-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2 text-gray-900"
        >
          Material Tailwind
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {
            openNav ? (
                <XMarkIcon className="h-6 w-6" strokeWidth={ 2 } />
            ) : <Bars3Icon className="h-6 w-6" strokeWidth={ 2 } />
          }
        </IconButton>
      </div>
      <Collapse open={ openNav }>
          <NavList />
      </Collapse>
    </Navbar>
  );
}