import React, { useState } from 'react';
import {
  Checkbox,
  Button,
  Form,
  Input,
  InputNumber,
  Popconfirm,
  Table,
  Typography,
} from 'antd';
import {
  AlingContainer,
  ButtonAdd,
  SearchButton,
  UsersContainer,
} from './styles';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoAddOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

export interface Item {
  key: string;
  name: string;
  status: number;
  phone: string;
  email: string;
}

export const originData: Item[] = [
  {
    key: '1',
    name: 'Paulo Henrique Mattos',
    status: 32,
    phone: '(16) 99653-8899',
    email: 'ph.mattos@gmail.com',
  },
  {
    key: '2',
    name: 'Juliana Martins Silva',
    status: 32,
    phone: '(16) 99819-3112',
    email: 'jumartins.silva@hotmail.com',
  },
  {
    key: '3',
    name: 'Luís Rocha',
    status: 32,
    phone: '(16) 99776-9290',
    email: 'luisrocha@yahoo.com.br',
  },
  {
    key: '4',
    name: 'Adilson Vieira Antunes',
    status: 32,
    phone: '(16) 99664-0187',
    email: 'a.vieira@uol.com.br',
  },
  {
    key: '5',
    name: 'Felipe Alves',
    status: 32,
    phone: '(16) 99660-7765',
    email: 'felipe_alves@hotmail.com',
  },
  {
    key: '6',
    name: 'Roberta Vianna',
    status: 32,
    phone: '(16) 99765-2233',
    email: 'robertavianna@gmail.com',
  },
  {
    key: '7',
    name: 'Silvia Pereira',
    status: 32,
    phone: '(16) 99642-8721',
    email: 'silvia.pereira@outlook.com',
  },
  {
    key: '8',
    name: 'Eduardo Oliveira',
    status: 32,
    phone: '(16) 99872-3254',
    email: 'eduoliveira@hotmail.com',
  },
  {
    key: '9',
    name: 'Maria Antônia Silva Santos',
    status: 32,
    phone: '(16) 99443-9986',
    email: 'maria.ss@uol.com.br',
  },
  {
    key: '10',
    name: 'Rodrigo Ribeiro Costa',
    status: 32,
    phone: '(16) 99876-0012',
    email: 'rrc@gmail.com',
  },
];

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  inputType: 'number' | 'text';
  record: Item;
  index: number;
  children: React.ReactNode;
}

const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

export const TableUsers: React.FC = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');

  const isEditing = (record: Item) => record.key === editingKey;

  const edit = (record: Partial<Item> & { key: React.Key }) => {
    form.setFieldsValue({ name: '', age: '', address: '', ...record });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key: React.Key) => {
    try {
      const row = (await form.validateFields()) as Item;

      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const columns = [
    {
      title: 'NOME',
      dataIndex: 'name',
      key: 'name',
      width: '387px',
      editable: true,
      style: { backgroundColor: '#fff' },
    },
    {
      title: 'STATUS',
      dataIndex: 'status',
      key: 'status',
      width: '132px',
      editable: true,
      style: { backgroundColor: '#fff' },
    },
    {
      title: 'TELEFONE',
      dataIndex: 'phone',
      key: 'phone',
      width: '150px',
      editable: true,
    },
    {
      title: 'E-MAIL',
      dataIndex: 'email',
      key: 'email',
      width: '375px',
      editable: true,
    },
    {
      title: '',
      with: '10px',
      dataIndex: 'operation',
      render: (_: any, record: Item) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{ marginRight: 8 }}
            >
              Save
            </Typography.Link>
            <Popconfirm
              title="Tem certeza que deseja cancelar?"
              onConfirm={cancel}
            >
              <a>Cancelar</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link
            disabled={editingKey !== ''}
            onClick={() => edit(record)}
          >
            <BiDotsVerticalRounded size={25} style={{ color: '#666666' }} />
          </Typography.Link>
        );
      },
    },
  ];
  const [searchText, setSearchText] = useState('');
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record: Item) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  const { Search } = Input;

  return (
    <Form form={form} component={false}>
      <NavLink to="/new">
        <ButtonAdd>
          <IoAddOutline size={16} />
          ADICIONAR
        </ButtonAdd>
      </NavLink>
      <UsersContainer>
        <Search
          placeholder="Busca por nome..."
          onChange={handleSearch}
          style={{ width: 372 }}
        />

        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          bordered={false}
          rowSelection={rowSelection}
          dataSource={filteredData}
          columns={mergedColumns}
          rowClassName="editable-row"
          pagination={{
            onChange: cancel,
          }}
        />
      </UsersContainer>
    </Form>
  );
};
