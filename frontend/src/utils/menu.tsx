import { MdFormatListNumbered } from 'react-icons/md';
import { VscSave } from 'react-icons/vsc';
const MenuLinks = [
  {
    name: 'Lista de Alunos',
    path: '/admin/users-list',
    icon: <MdFormatListNumbered />,
    isAdmin: true,
  },
  {
    name: 'Cadastrar documentos',
    path: '/user/save-documents',
    icon: <VscSave />,
    isAdmin: false,
  },
  {
    name: 'Cadastrar Tipos',
    path: '/admin/save-types',
    icon: <VscSave />,
    isAdmin: true,
  },
];

export default MenuLinks;
