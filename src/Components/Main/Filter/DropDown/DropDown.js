// /* This example requires Tailwind CSS v2.0+ */
// import { Fragment } from 'react';
// import { Menu, Transition } from '@headlessui/react';
// import { ChevronDownIcon } from '@heroicons/react/solid';
// import './DropDown.scss';
// import DropDownData from './DropDownData';

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ');
// }

// const DropDown = () => {
//   return (
//     <>
//       <Menu as='div' className='dr-menu relative inline-block text-left'>
//         {({ open }) => (
//           <>
//             <div>
//               <Menu.Button className='menu-btn inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500'>
//                 <span className='btn-text'>
//                   {/* {dataItem.btnName} */}
//                   btn name
//                 </span>
//                 <ChevronDownIcon
//                   className='btn-icon -mr-1 ml-2 h-5 w-5'
//                   aria-hidden='true'
//                 />
//               </Menu.Button>
//             </div>

//             <Transition
//               show={open}
//               as={Fragment}
//               enter='transition ease-out duration-100'
//               enterFrom='transform opacity-0 scale-95'
//               enterTo='transform opacity-100 scale-100'
//               leave='transition ease-in duration-75'
//               leaveFrom='transform opacity-100 scale-100'
//               leaveTo='transform opacity-0 scale-95'
//             >
//               <Menu.Items static>
//                 <div className='py-1'>
//                   <Menu.Item>
//                     {({ active }) => (
//                       <a
//                         href='#'
//                         className={classNames(
//                           active
//                             ? 'bg-gray-100 text-black-900'
//                             : 'text-gray-700',
//                           'block px-4 py-2 text-sm'
//                         )}
//                       >
//                         {/* {dataItem.data} */}
//                         item name
//                       </a>
//                     )}
//                   </Menu.Item>
//                 </div>
//               </Menu.Items>
//             </Transition>
//           </>
//         )}
//       </Menu>
//     </>
//   );
// };

// export default DropDown;

import React from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './DropDown.scss';

const DropDown = () => {
  const menu = (
    <Menu>
      <Menu.Item key='0'>
        <a href='https://www.antgroup.com'>1st menu item</a>
      </Menu.Item>
      <Menu.Item key='1'>
        <a href='https://www.aliyun.com'>2nd menu item</a>
      </Menu.Item>
      {/* <Menu.Divider /> */}
      <Menu.Item key='3'>3rd menu item</Menu.Item>
    </Menu>
  );

  return (
    <>
      <Dropdown overlay={menu} trigger={['click']}>
        <Button
          className='ant-dropdown-link'
          onClick={(e) => e.preventDefault()}
        >
          Click me <DownOutlined />
        </Button>
      </Dropdown>
    </>
  );
};

export default DropDown;
